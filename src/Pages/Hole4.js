import './Hole4.css';
import Course from '../Course4.png';
import Wedge from '../Wedge.png'
import Putter from '../Putter.png'
import { Link } from 'react-router-dom';
export function Hole4(){
  function Wrong(){
    alert('Wrong');
  }
  function Correct(){
    alert('Correct');
  }
    return (
        <div className="Hole4">
          <header className="Hole4-header">
          <h1>
                Distance to hole 5 yards
          </h1>
          <img src={Course} className="Hole4-Course" alt="logo"/>
          <p>
          Click the correct club for this yardage!
          </p>
          </header> 
          <button onClick={Wrong}><img src ={Wedge} className="Hole4-Club" alt="Wedge"/></button>
          <button onClick={Correct}><img src ={Putter} className="Hole4-Club" alt="Putter"/></button>
          <body className="Body">
          <Link to="/">
                <button>Home</button>
            </Link>
            </body>
        </div>
      );
}
export default Hole4