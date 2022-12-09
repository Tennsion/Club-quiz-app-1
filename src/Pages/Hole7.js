import './Hole7.css';
import Course from '../Course7.png';
import Wedge from '../Wedge.png'
import Putter from '../Putter.png'
import Driver from '../Driver.png'
import Iron from '../Iron.png'
import { Link } from 'react-router-dom';
export function Hole7(){
  function Wrong(){
    alert('Wrong');
  }
  function Correct(){
    alert('Correct');
  }
    return (
        <div className="Hole7">
          <header className="Hole7-header">
          <h1>
                Distance to hole 100 yards
          </h1>
          <img src={Course} className="Hole7-Course" alt="logo"/>
          <p>
          Click the correct club for this yardage!
          </p>
          </header>
          <button onClick={Wrong}><img src ={Driver} className="Hole7-Club" alt="Driver"/></button>
          <button onClick={Wrong}><img src ={Iron} className="Hole7-Club" alt="Iron"/></button>
          <button onClick={Correct}><img src ={Wedge} className="Hole7-Club" alt="Wedge"/></button>
          <button onClick={Wrong}><img src ={Putter} className="Hole7-Club" alt="Putter"/></button>
          <body className="Body">
          <Link to="/Hole8">
          <button>Next Hole</button>
          </Link>
          <Link to="/Hole6">
                <button>Last Hole</button>
            </Link>
          <Link to="/">
                <button>Home</button>
            </Link>
            </body>
        </div>
      );
}
export default Hole7