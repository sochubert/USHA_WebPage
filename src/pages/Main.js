import React from 'react';
import Content from '../Content';
import Home from '../Home';
import '../App.css';

const Main = () => {
    return (
        <div className='App'>
            <Home />
            <Content />
        </div>
    );
};

export default Main;