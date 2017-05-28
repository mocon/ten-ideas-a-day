import React, { Component } from 'react';
import Form from './components/Form';
// import bgImage from './images/bg.png';

const currentYear = new Date().getFullYear();

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //
        };
    }

    render() {
        return (
            <div className="app-wrapper">
                <header className="app-header">
                    <div className="container">
                        <h2 className="app-title">Ten Ideas a Day</h2>
                        <Form />
                    </div>
                </header>
                <main className="app-main">
                    <div className="container app-flex-container">
                        <section className="app-main__left-column">
                            <p>Recent ideas go here</p>
                        </section>
                        <section className="app-main__right-column">
                            <p>Top ideas go here, with upvote, downvote, and total score</p>
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
