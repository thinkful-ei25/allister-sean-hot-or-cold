import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count : 3,
            guesses : [10, 15, 25],
            curGuess : null,
            feedback: "Make your guess!"
        }
    }

    handleGuess(guess) {
        this.setState( {
            curGuess : guess
        })
    }


    render() {

        return (
            <div>
                <Header />
                <GuessSection feedback={this.state.feedback} handleGuess={(guess) => this.handleGuess(guess)} />
                <GuessCount count={this.state.count} />
                <GuessList guesses={this.state.guesses} />
            </div>
        );
    }
}
