import React from 'react';

import './top-nav.css';

export default function TopNav(props) {
    return (
        <nav>
            <ul className="clearfix">
                <li>
                    <a onClick={() => props.handleInfo()}className="what" href="#">
                        What?
                    </a>
                </li>
                <li>
                    <a onClick={() => props.handleNewGame()} className="new" href="#">
                        + New Game
                    </a>
                </li>
            </ul>
        </nav>
    );
}

