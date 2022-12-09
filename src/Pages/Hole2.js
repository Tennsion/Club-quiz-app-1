import './Hole2.css';
import Course from '../Course2.png';
import Driver from '../Driver.png'
import Iron from '../Iron.png'
import { Link } from 'react-router-dom';
export function Hole2(){
  function Wrong(){
    alert('Wrong');
  }
  function Correct(){
    alert('Correct');
  }
    return (
        <div className="Hole2">
          <header className="Hole2-header">
          <h1>
                Distance to hole 150 yards
          </h1>
          <img src={Course} className="Hole2-Course" alt="logo" />
          <p>
          Click the correct club for this yardage!
          </p>
          </header>
          <button onClick={Wrong}><img src ={Driver} className="Hole2-Club" alt="Driver"/></button>
          <button onClick={Correct}><img src ={Iron} className="Hole2-Club" alt="Iron"/></button>
          <body className="Body">
          <Link to="/Hole3">
                <button>Next Hole</button>
            </Link>
            <br></br>
            <br></br>
            <Link to="/">
                <button>Home</button>
            </Link>
            </body>
        </div>
      );
}
export default Hole2