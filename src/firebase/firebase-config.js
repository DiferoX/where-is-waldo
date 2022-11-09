import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrj18wSvAZdlylUiqXOaIJBNorK6cQeiU",
  authDomain: "where-is-waldo-60fe8.firebaseapp.com",
  projectId: "where-is-waldo-60fe8",
  storageBucket: "where-is-waldo-60fe8.appspot.com",
  messagingSenderId: "1042498421642",
  appId: "1:1042498421642:web:9f242455b908b51abd3e73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);

export function downloadFile (file)
{
  const storageRef = ref(storage, `mapx600/waldo-600 00${file}.webp`)
  getDownloadURL(storageRef)
  .then((url) => 
  {
    const img = document.getElementsByClassName('selectListImg');
    img[file-1].setAttribute('src', url)
  })
}

// export function downloadBigFile (file)
// {
//   const storageRef = ref(storage, `map/where-is-waldo 00${file}.jpg`)
//   getDownloadURL(storageRef)
//   .then((url) => 
//   {
//     const img = document.getElementsByClassName('gameboardContentImg');
//     img[0].setAttribute('src', url)
//   })
// }
