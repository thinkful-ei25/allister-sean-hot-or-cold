import React from 'react';

import './guess-form.css';

export default function GuessForm(props) {
    let myFormRef;
    function clear() {
        myFormRef.reset()
    }
    
    let textInput;
    return (
        <form ref={par => myFormRef=par}onSubmit={(e) => {
            e.preventDefault();
            props.handleGuess(textInput.value)
            clear()
            // document.getElementById('userGuess').value='';
        }}>
            <input ref={input => textInput = input} type="text" name="userGuess" id="userGuess"
                className="text" maxLength="3" autoComplete="off"
                placeholder="Enter your Guess" required />
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
        </form>
    );
};

