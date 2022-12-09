import './Hole6.css';
import Course from '../Course6.png';
import Wedge from '../Wedge.png'
import Putter from '../Putter.png'
import Driver from '../Driver.png'
import Iron from '../Iron.png'
import { Link } from 'react-router-dom';
export function Hole6(){
  function Wrong(){
    alert('Wrong');
  }
  function Correct(){
    alert('Correct');
  }
    return (
        <div className="Hole6">
          <header className="Hole6-header">
          <h1>
                Distance to hole 135 yards
          </h1>
          <img src={Course} className="Hole6-Course" alt="logo"/>
          <p>
          Click the correct club for this yardage!
          </p>
          </header> 
          <button onClick={Wrong}><img src ={Driver} className="Hole6-Club" alt="Driver"/></button>
          <button onClick={Correct}><img src ={Iron} className="Hole6-Club" alt="Iron"/></button>
          <button onClick={Wrong}><img src ={Wedge} className="Hole6-Club" alt="Wedge"/></button>
          <button onClick={Wrong}><img src ={Putter} className="Hole6-Club" alt="Putter"/></button>
          <body className="Body">
          <Link to="/Hole7">
          <button>Next Hole</button>
          </Link>
          <Link to="/Hole5">
                <button>Last Hole</button>
            </Link>
          <Link to="/">
                <button>Home</button>
            </Link>
            </body>
        </div>
      );
}
export default Hole6