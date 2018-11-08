import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count : 0,
            guesses : [],
            curGuess : null,
            feedback: "Make your guess!", 
            targetNum : Math.floor(Math.random() * 100)
        }
    }

    handleGuess(guess) {
        this.setState({
            curGuess : guess,
            count : (this.state.count + 1), 
            guesses : ([...this.state.guesses, guess])
        }, this.converStuff)
    }

    converStuff(){ 
        const diff = 
            (Math.abs(Number(this.state.targetNum) - Number(this.state.curGuess))); 
        
        let temperature; 
        if (diff <= 5 && diff !== 0){ 
            temperature = 'hot'
        } else if (diff === 0) { 
            temperature = 'correct'
        } else { 
            temperature = 'cold'; 
        }
        
        this.setState({feedback : temperature}); 
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
