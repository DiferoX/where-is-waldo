import '../styles/Gameboard.css'
import { downloadBigFile } from "../firebase/firebase-config";
import { useParams } from "react-router"
import Sidebar from './Sidebar';

function Gameboard() 
{
  let { id } = useParams();
  downloadBigFile(id);

  let cursor = document.getElementsByClassName('cursor');
  document.addEventListener('mousemove', (e) => 
  {
    let x = e.clientX;
    let y = e.clientY;
    cursor[0].style.left = x + "px";
    cursor[0].style.top = y + "px";
    // console.log(x + "px " + y + "px");
  })

  return (
    <div className="gameboardContent">
      <div className='mainContentImg'>
        <div className='divsGameboardContent'>
          <img className='gameboardContentImg' />
          <div className='cursor'></div>
        </div>
      </div>
      <Sidebar />
    </div>
  );
}

export default Gameboard;
