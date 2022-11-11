import '../styles/SelectList.css'
import { Link } from 'react-router-dom';
import { downloadFile } from "../firebase/firebase-config";

function SelectList(props) 
{
  downloadFile(props.item.img);

  return (
    <div className="selectList">
      <Link to={`/gameboard/${props.item.img}`}>
        <img className='selectListImg' />
      </Link>
    </div>
  );
}

export default SelectList;
