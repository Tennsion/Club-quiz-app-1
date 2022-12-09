import './Hole8.css';
import Course from '../Course8.png';
import Wedge from '../Wedge.png'
import Putter from '../Putter.png'
import Driver from '../Driver.png'
import Iron from '../Iron.png'
import { Link } from 'react-router-dom';
export function Hole8(){
  function Wrong(){
    alert('Wrong');
  }
  function Correct(){
    alert('Correct');
  }
    return (
        <div className="Hole8">
          <header className="Hole8-header">
          <h1>
                Distance to hole 220 yards
          </h1>
          <img src={Course} className="Hole8-Course" alt="logo"/>
          <p>
          Click the correct club for this yardage!
          </p>
          </header> 
          <button onClick={Correct}><img src ={Driver} className="Hole8-Club" alt="Driver"/></button>
          <button onClick={Wrong}><img src ={Iron} className="Hole8-Club" alt="Iron"/></button>
          <button onClick={Wrong}><img src ={Wedge} className="Hole8-Club" alt="Wedge"/></button>
          <button onClick={Wrong}><img src ={Putter} className="Hole8-Club" alt="Putter"/></button>
          <body className="Body">
          <Link to="/Hole9">
          <button>Next Hole</button>
          </Link>
          <Link to="/Hole7">
                <button>Last Hole</button>
            </Link>
          <Link to="/">
                <button>Home</button>
            </Link>
            </body>
        </div>
      );
}
export default Hole8