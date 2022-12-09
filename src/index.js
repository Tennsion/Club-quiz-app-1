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
import {Hole5} from './Pages/Hole5'
import {Hole6} from './Pages/Hole6'
import {Hole7} from './Pages/Hole7'
import {Hole8} from './Pages/Hole8'
import {Hole9} from './Pages/Hole9'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<StartPage />}/>
        <Route path='/hole1' element= {<Hole1 />}/>
        <Route path='/hole2' element= {<Hole2 />}/>
        <Route path='/hole3' element= {<Hole3 />}/>
        <Route path='/hole4' element= {<Hole4 />}/>
        <Route path='/hole5' element= {<Hole5 />}/>
        <Route path='/hole6' element= {<Hole6 />}/>
        <Route path='/Hole7' element= {<Hole7 />}/>
        <Route path='/Hole8' element= {<Hole8 />}/>
        <Route path='/Hole9' element= {<Hole9 />}/>
      </Routes>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
