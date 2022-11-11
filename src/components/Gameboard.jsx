import '../styles/Gameboard.css'
import { storage } from "../firebase/firebase-config";
import { ref, getDownloadURL } from "firebase/storage";
// import { ReactImageMagnify } from 'react-image-magnify';
import ReactImageMagnify from 'react-image-magnify';
import { useParams } from "react-router"
import Sidebar from './Sidebar';
import { useState } from 'react';
import { FiZoomIn, FiZoomOut } from 'react-icons/fi';

function Gameboard(props) 
{
  let { id } = useParams();
  const [img, setImg] = useState('');
  const [zoom, setZoom] = useState(true);

  const charactersHandler = () =>
  {
    let divCharacter = document.getElementsByClassName('divCharacter');
    props.object.forEach(element => 
    {
      if (element.img === id)
      {
        for (let i = 0; i < element.characters.length; i++)
        {
          divCharacter[i].style.top = `${element.characters[i].top}%`;
          divCharacter[i].style.left = `${element.characters[i].left}%`;
        }
      }
    });
  }

  function downloadBigFile (file)
  {
    const storageRef = ref(storage, `map/where-is-waldo 00${file}.jpg`)
    getDownloadURL(storageRef)
    .then((url) => { setImg(url) })

  }
  downloadBigFile(id);
  
  // let cursor = document.getElementsByClassName('cursor');
  // document.addEventListener('mousemove', (e) => 
  // {
  //   let x = e.clientX;
  //   let y = e.clientY;
  //   cursor[0].style.left = x + "px";
  //   cursor[0].style.top = y + "px";
  //   // console.log(x + "px " + y + "px");
  // })

  return (
    <div className="gameboardContent">
      <div className='mainContentImg'>
        {
          zoom
          ? <div className='divsCharactersContent' onMouseMove={charactersHandler}>
              <img 
                  className='cardImg' 
                  src={img}
                  alt={"Where's Waldo"}
              />
              <div className='divCharacter Waldo'></div>
              <div className='divCharacter Odlaw'></div>
              <div className='divCharacter Wizard'></div>
              <div className='divCharacter Wenda'></div>
            </div>
          : <div className='divsZoomContent'>
              <ReactImageMagnify 
                {...{
                  smallImage: 
                  {
                    alt: "Where's Waldo",
                    isFluidWidth: true,
                    src: img
                  },
                  largeImage: 
                  {
                    src: img,
                    width: 2500,
                    height: 1500,
                  }
                }} />
            </div>
        }
        
        <div className='cursor'></div>
      </div>
      <div className='headerContent'>
        <Sidebar />
        {
          zoom 
          ? <FiZoomIn className='icon zoomIn' onClick={() => setZoom(!zoom)} />
          : <FiZoomOut className='icon zoomOut' onClick={() => setZoom(!zoom)} />
        }
      </div>
    </div>
  );
}

export default Gameboard;
