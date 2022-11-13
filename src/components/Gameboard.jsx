import '../styles/Gameboard.css'
import { Link } from "react-router-dom";
import { storage } from "../firebase/firebase-config";
import { ref, getDownloadURL } from "firebase/storage";
import ReactImageMagnify from 'react-image-magnify';
import { useParams } from "react-router"
import Sidebar from './Sidebar';
import { useState } from 'react';
import { FiZoomIn, FiZoomOut } from 'react-icons/fi';

function Gameboard(props) 
{
  let { id } = useParams();
  let currentObject = [];
  const [img, setImg] = useState('');
  const [zoom, setZoom] = useState(true);
  const [checked, setChecked] = useState();

  function downloadBigFile (file)
  {
    const storageRef = ref(storage, `map/where-is-waldo 00${file}.jpg`)
    getDownloadURL(storageRef)
    .then((url) => { setImg(url) })
  }
  downloadBigFile(id);

  props.object.forEach(element => 
  {
    if (element.img === id)
      currentObject = element;
  });

  const charactersHandler = () =>
  {
    let divCharacter = document.getElementsByClassName('divCharacter');

    for (let i = 0; i < currentObject.characters.length; i++)
    {
      divCharacter[i].style.top = `${currentObject.characters[i].top}%`;
      divCharacter[i].style.left = `${currentObject.characters[i].left}%`;
    }
  }

  const removeAvatarCursor = () =>
  {
    let cursor = document.getElementsByClassName('cursor');

    currentObject.characters.forEach(character => 
    {
      cursor[0].classList.remove(character.name)
    });
  }

  const removeAvatarActive = () =>
  {
    currentObject.characters.forEach(character => 
    {
      character.active = false;
    });
  }

  const characterFoundHandler = (element) =>
  {
    currentObject.characters.forEach(character => 
    {
      if (character.name === element)
      {
        if (character.active)
        {
          character.isFound = true;
          checked.classList.add('active');
          removeAvatarActive();
          removeAvatarCursor();
        }
        else
        {
          removeAvatarActive();
          removeAvatarCursor();
        }
      }
    });
  }

  const cursorHandler = (character, check) =>
  {
    setZoom(true);
    removeAvatarCursor();
    cursor[0].classList.add(character);
    setChecked(check);
    currentObject.characters.forEach(element => 
    {
      if (element.name === character)
        element.active = true;
    });
    console.log(currentObject);
  }

  const clickImageHandler = () =>
  {
    removeAvatarCursor();
    removeAvatarActive();
  }
  
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
        {
          zoom
          ? <div className='divsCharactersContent' onMouseMove={charactersHandler}>
              <img 
                  className='cardImg' 
                  src={img}
                  alt={"Where's Waldo"}
                  onClick={clickImageHandler}
              />
              <div className='divCharacter Waldo' onClick={() => characterFoundHandler("Waldo")}></div>
              <div className='divCharacter Odlaw' onClick={() => characterFoundHandler("Odlaw")}></div>
              <div className='divCharacter Wizard' onClick={() => characterFoundHandler("Wizard")}></div>
              <div className='divCharacter Wenda' onClick={() => characterFoundHandler("Wenda")}></div>
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
        <Sidebar cursorHandler={cursorHandler} />
        {
          zoom 
          ? <FiZoomIn className='icon zoomIn' onClick={() => setZoom(!zoom)} />
          : <FiZoomOut className='icon zoomOut' onClick={() => setZoom(!zoom)} />
        }
        <Link to="/" className="buttonHomeHeader">Home</Link>
      </div>
    </div>
  );
}

export default Gameboard;
