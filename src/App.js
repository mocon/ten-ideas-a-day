/* eslint react/jsx-no-bind: 0 */
import React, { Component } from 'react';
import Table from './components/Table';
import fire from './firebase';

const currentYear = new Date().getFullYear();

const sortByDate = (arr) => {
    return arr.sort((a, b) => {
        return a[0].dateCreated - b[0].dateCreated;
    });
};

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
        let ideasRef = fire.database().ref('ideas').orderByKey().limitToLast(100);

        // Update React state when idea is added to Firebase database
        ideasRef.on('child_added', snapshot => {
            let idea = {
                id: snapshot.key,
                text: snapshot.val().text,
                rating: snapshot.val().rating,
                votes: snapshot.val().votes,
                dateCreated: snapshot.val().dateCreated
            };

            this.setState({ ideas: [idea].concat(this.state.ideas) });
        });
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

        fire.database().ref('ideas').push(newIdea); // Send the message to Firebase
        this.formInput.value = '';
        this.formInput.focus();
    }

    handleOnChange = () => {
        this.setState({ newIdea: this.formInput.value });
    }

    render() {
        const hasIdeas = (this.state.ideas !== null) ? true : false;
        if (hasIdeas) {
            this.state.ideas.forEach((idea) => {
                console.log(idea.id);
            });
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
                            <Table />
                        </section>
                        <section className="app-main__right-column">
                            <h4 className="app-subtitle">Top ideas</h4>
                            <Table />
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
