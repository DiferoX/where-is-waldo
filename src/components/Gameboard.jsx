import '../styles/Gameboard.css'
import photo from '../images/Waldo-image.png'
import { storage } from "../firebase/firebase-config";
import { ref, getDownloadURL } from "firebase/storage";
// import { ReactImageMagnify } from 'react-image-magnify';
import ReactImageMagnify from 'react-image-magnify';
import { useParams } from "react-router"
import Sidebar from './Sidebar';
import { useState } from 'react';

function Gameboard() 
{
  let { id } = useParams();
  const [img, setImg] = useState('');

  function downloadBigFile (file)
  {
    const storageRef = ref(storage, `map/where-is-waldo 00${file}.jpg`)
    getDownloadURL(storageRef)
    .then((url) => 
    {
      // const img = document.getElementsByClassName('gameboardContentImg');
      // img[0].setAttribute('src', url)
      setImg(url);
    })
  }
  downloadBigFile(id);
  // console.log(photo);

  // let img = document.getElementsByClassName('divsCharactersContent');
  // img[0].setAttribute("style", "background-image: url(../images/Waldo-image.png)");

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
        <div className='divsCharactersContent'>
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
          {/* <div className='divWaldo'></div> */}
          {/* <div className='divOdlaw'></div> */}
        </div>
        <div className='cursor'></div>
      </div>
      <Sidebar />
    </div>
  );
}

export default Gameboard;
