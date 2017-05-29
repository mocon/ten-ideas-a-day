/* eslint react/jsx-no-bind: 0 */
import React, { Component } from 'react';
import Table from './components/Table';
import fire from './firebase';
import { sortByProperty } from './helpers';

const currentYear = new Date().getFullYear();

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newIdea: null,
            ideas: null
        };
    }

    componentWillMount() {
        // Create reference to ideas in Firebase Database
        let ideasRef = fire.database().ref('ideas');

        // Update state with snapshot value
        ideasRef.on('value', snapshot => this.setState({ ideas: snapshot.val() }));
    }

    componentDidMount() {
        this.formInput.focus();
    }

    componentWillUnmount() {
        this.firebaseRef.off();
    }

    addMessage(e) {
        e.preventDefault();

        const newIdea = {
            text: this.formInput.value,
            rating: 90,
            votes: 1,
            dateCreated: + new Date()
        };

        // Send the message to Firebase
        fire.database().ref('ideas').push(newIdea);
        this.formInput.value = '';
        this.formInput.focus();
    }

    handleOnChange = () => {
        this.setState({ newIdea: this.formInput.value });
    }

    render() {
        const hasFetchedIdeas = (this.state.ideas !== null) ? true : false;
        let ideasByDate = null;
        let ideasByRating = null;

        if (hasFetchedIdeas) {
            const ideas = this.state.ideas;

            ideasByDate = sortByProperty(ideas, 'dateCreated', false);
            ideasByRating = sortByProperty(ideas, 'rating', false);
        }

        return (
            <div className="app-wrapper">
                <header className="app-header">
                    <div className="container">
                        <h2 className="app-title">Ten Ideas a Day</h2>
                        <form className="form" onSubmit={ this.addMessage.bind(this) }>
                            <input
                                className="form-input"
                                type="text"
                                ref={ (input) => this.formInput = input }
                                onChange={ () => this.handleOnChange() }
                                placeholder="What's the idea?"
                                value={ this.state.formInputText }
                            />
                            <button className="button button-outline form-button" type="submit">Add to List</button>
                        </form>
                    </div>
                </header>
                <main className="app-main">
                    <div className="container app-flex-container">
                        <section className="app-main__left-column">
                            <h4 className="app-subtitle">Recent ideas go here</h4>
                            <Table
                                ideas={ (ideasByDate !== null) ? ideasByDate : null }
                            />
                        </section>
                        <section className="app-main__right-column">
                            <h4 className="app-subtitle">Top ideas</h4>
                            <Table
                                ideas={ (ideasByRating !== null) ? ideasByRating : null }
                            />
                        </section>
                    </div>
                </main>
                <footer className="app-footer">
                    <div className="container">
                        &copy; { currentYear }
                    </div>
                </footer>
            </div>
        );
    }
}
