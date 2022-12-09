import React from 'react';
import Course from '../Course.png';
import Driver from '../Driver.png'
import Iron from '../Iron.png'
import Wedge from '../Wedge.png'
import Putter from '../Putter.png'
import './Hole1.css';
import {Link} from 'react-router-dom';
export function Hole1(){
  
  function Wrong(){
    alert('Wrong');
  }
  function Correct(){
    alert('Correct');
  }
    return (
        <div className="Hole1">
          <header className="Hole1-header">
          <h1>
                Distance to hole 250 yards
            </h1>
          <img src={Course} className="Hole1-Course" alt="logo" />
          <p>
            Click the correct club for this yardage!
          </p>
          </header>
          <button onClick={Correct}><img src ={Driver} className="Hole1-Club" alt="Driver"/></button>
          <button onClick={Wrong}><img src ={Iron} className="Hole1-Club" alt="Iron"/></button>
          <button onClick={Wrong}><img src ={Wedge} className="Hole1-Club" alt="Wedge"/></button>
          <button onClick={Wrong}><img src ={Putter} className="Hole1-Club" alt="Putter"/></button>
          <body className="Body">
          <Link to="/Hole2">
                <button>Next Hole</button>
            </Link>
            <Link to="/">
                <button>Home</button>
            </Link>
            </body>
        </div>
      );
}
export default Hole1