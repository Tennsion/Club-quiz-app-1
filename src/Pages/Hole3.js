import './Hole3.css';
import Wedge from '../Wedge.png'
import Putter from '../Putter.png'
import Course from '../Course3.png';
import { Link } from 'react-router-dom';
export function Hole3(){
  function Wrong(){
    alert('Wrong');
  }
  function Correct(){
    alert('Correct');
  }
    return (
        <div className="Hole3">
          <header className="Hole3-header">
          <h1>
                Distance to hole 50 yards
          </h1>
          <img src={Course} className="Hole3-Course" alt="logo" />
          <p>
          Click the correct club for this yardage!
          </p>
          </header> 
          <button onClick={Correct}><img src ={Wedge} className="Hole3-Club" alt="Wedge"/></button>
          <button onClick={Wrong}><img src ={Putter} className="Hole3-Club" alt="Putter"/></button>
          <body className="Body">
          <Link to="/Hole4">
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
export default Hole3