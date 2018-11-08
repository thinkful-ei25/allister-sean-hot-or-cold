import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export default function Header(props) {
    
    if (props.info) {
        return (
            <InfoModal handleInfo={() => props.handleInfo()}/>
        )
    }
    
    return (
        <header>
            <TopNav handleNewGame={() => props.handleNewGame()} handleInfo={() => props.handleInfo()}/>
            {/* <InfoModal /> */}
            <h1>HOT or COLD</h1>
        </header>
    );
};
