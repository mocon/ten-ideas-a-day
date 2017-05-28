import React, { Component } from 'react';
import * as firebase from 'firebase';
import Form from './components/Form';
import constants from './constants';

const config = {
    apiKey: constants.apiKey,
    authDomain: constants.authDomain,
    databaseURL: constants.databaseURL,
    storageBucket: constants.storageBucket,
};

// Initialize Firebase
firebase.initializeApp(config);

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
        this.firebaseRef = firebase.database().ref('ideas');
        this.firebaseRef.on('child_added', function(dataSnapshot) {
            this.ideas.push(dataSnapshot.val());
            this.setState({
                ideas: this.ideas
            });
        }.bind(this));
    }

    handleSubmit = () => {
        this.firebaseRef.push({ text: this.state.newIdea, rating: 90 });
        this.setState({ newIdea: '' });
    }

    componentWillUnmount() {
        this.firebaseRef.off();
    }

    handleOnChange = (newValue) => {
        console.log('newValue:', newValue);
        this.setState({ newIdea: newValue });
    }

    render() {
        return (
            <div className="app-wrapper">
                <header className="app-header">
                    <div className="container">
                        <h2 className="app-title">Ten Ideas a Day</h2>
                        <Form
                            onChange={ this.handleOnChange }
                            onSubmit={ this.handleSubmit }
                            newIdea={ this.state.newIdea }
                        />
                    </div>
                </header>
                <main className="app-main">
                    <div className="container app-flex-container">
                        <section className="app-main__left-column">
                            <h4 className="app-subtitle">Recent ideas go here</h4>
                            <table>
                                <thead>
                                    <tr>
                                        <th>+/-</th>
                                        <th>Idea</th>
                                        <th>Score</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>[ ]</td>
                                        <td>Idea text goes here</td>
                                        <td>91</td>
                                    </tr>
                                    <tr>
                                        <td>[ ]</td>
                                        <td>Idea text goes here</td>
                                        <td>91</td>
                                    </tr>
                                    <tr>
                                        <td>[ ]</td>
                                        <td>Idea text goes here</td>
                                        <td>91</td>
                                    </tr>
                                    <tr>
                                        <td>[ ]</td>
                                        <td>Idea text goes here</td>
                                        <td>91</td>
                                    </tr>
                                    <tr>
                                        <td>[ ]</td>
                                        <td>Idea text goes here</td>
                                        <td>91</td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>
                        <section className="app-main__right-column">
                            <h4 className="app-subtitle">Top ideas</h4>
                            <table>
                                <thead>
                                    <tr>
                                        <th>+/-</th>
                                        <th>Idea</th>
                                        <th>Score</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>[ ]</td>
                                        <td>Idea text goes here</td>
                                        <td>91</td>
                                    </tr>
                                    <tr>
                                        <td>[ ]</td>
                                        <td>Idea text goes here</td>
                                        <td>91</td>
                                    </tr>
                                    <tr>
                                        <td>[ ]</td>
                                        <td>Idea text goes here</td>
                                        <td>91</td>
                                    </tr>
                                    <tr>
                                        <td>[ ]</td>
                                        <td>Idea text goes here</td>
                                        <td>91</td>
                                    </tr>
                                    <tr>
                                        <td>[ ]</td>
                                        <td>Idea text goes here</td>
                                        <td>91</td>
                                    </tr>
                                </tbody>
                            </table>
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
