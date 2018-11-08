import React from 'react';

import './guess-form.css';

export default function GuessForm(props) {
    
    
    let textInput;
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            props.handleGuess(textInput.value)
        }}>
            <input ref={input => textInput = input} type="text" name="userGuess" id="userGuess"
                className="text" maxLength="3" autoComplete="off"
                placeholder="Enter your Guess" required />
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
        </form>
    );
};

