import './Hole9.css';
import Course from '../Course9.png';
import Wedge from '../Wedge.png'
import Putter from '../Putter.png'
import Driver from '../Driver.png'
import Iron from '../Iron.png'
import { Link } from 'react-router-dom';
export function Hole9(){
  function Wrong(){
    alert('Wrong');
  }
  function Correct(){
    alert('Correct');
  }
    return (
        <div className="Hole9">
          <header className="Hole9-header">
          <h1>
                Distance to hole 1 yard
          </h1>
          <img src={Course} className="Hole9-Course" alt="logo"/>
          <p>
          Click the correct club for this yardage!
          </p>
          </header> 
          <button onClick={Wrong}><img src ={Driver} className="Hole9-Club" alt="Driver"/></button>
          <button onClick={Wrong}><img src ={Iron} className="Hole9-Club" alt="Iron"/></button>
          <button onClick={Wrong}><img src ={Wedge} className="Hole9-Club" alt="Wedge"/></button>
          <button onClick={Correct}><img src ={Putter} className="Hole9-Club" alt="Putter"/></button>
          <body className="Body">
          <Link to="/Hole8">
                <button>Last Hole</button>
            </Link>
          <Link to="/">
                <button>Home</button>
            </Link>
            </body>
        </div>
      );
}
export default Hole9