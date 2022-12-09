import React from 'react';
import Logo from './Logo.png';
import './App.css';
import { Link } from 'react-router-dom';

export function StartPage(){
    return (
        <div className="App">
          <header className="App-header">
            <img src={Logo} className="App-logo" alt="logo" />
            <p>
              Welcome to Club Quiz
            </p>
            <Link to="./Hole1">
                <button>Start</button>
            </Link>
          </header>
        </div>
      );
}