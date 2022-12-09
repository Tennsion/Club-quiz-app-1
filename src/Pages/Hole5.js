import './Hole5.css';
import Course from '../Course5.png';
import Wedge from '../Wedge.png'
import Putter from '../Putter.png'
import Driver from '../Driver.png'
import Iron from '../Iron.png'
import { Link } from 'react-router-dom';
export function Hole5(){
  function Wrong(){
    alert('Wrong');
  }
  function Correct(){
    alert('Correct');
  }
    return (
        <div className="Hole5">
          <header className="Hole5-header">
          <h1>
                Distance to hole 75 yards
          </h1>
          <img src={Course} className="Hole5-Course" alt="logo"/>
          <p>
          Click the correct club for this yardage!
          </p>
          </header> 
          <button onClick={Wrong}><img src ={Driver} className="Hole5-Club" alt="Driver"/></button>
          <button onClick={Wrong}><img src ={Iron} className="Hole5-Club" alt="Iron"/></button>
          <button onClick={Correct}><img src ={Wedge} className="Hole5-Club" alt="Wedge"/></button>
          <button onClick={Wrong}><img src ={Putter} className="Hole5-Club" alt="Putter"/></button>
          <body className="Body">
          <Link to="/Hole6">
          <button>Next Hole</button>
          </Link>
          <Link to="/Hole4">
                <button>Last Hole</button>
            </Link>
          <Link to="/">
                <button>Home</button>
            </Link>
            </body>
        </div>
      );
}
export default Hole5