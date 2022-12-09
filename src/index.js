import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import {Hole1} from './Pages/Hole1'
import {Hole2} from './Pages/Hole2'
import {StartPage} from './StartPage'
import {Hole3} from './Pages/Hole3'
import {Hole4} from './Pages/Hole4'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/hole1' element= {<Hole1 />}/>
        <Route path='/hole2' element= {<Hole2 />}/>
        <Route path='/hole3' element= {<Hole3 />}/>
        <Route path='/hole4' element= {<Hole4 />}/>
        <Route path='/' element= {<StartPage />}/>
      </Routes>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
