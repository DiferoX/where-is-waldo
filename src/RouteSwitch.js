import App from "./App";
import { HashRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import Gameboard from "./components/Gameboard";
import { v4 as uuidv4 } from 'uuid';

const object =
[
  {
    id: uuidv4(), 
    img: '1',
    characters:
    [
      { name: "Waldo", top: "31", left: "59.5", active: false, isFound: false },
      { name: "Odlaw", top: "29", left: "8", active: false, isFound: false },
      { name: "Wizard", top: "28.5", left: "24", active: false, isFound: false },
      { name: "Wenda", top: "34", left: "75", active: false, isFound: false },
    ]
  },
  {
    id: uuidv4(), 
    img: '2',
    characters:
    [
      { name: "Waldo", top: "67", left: "83", active: false, isFound: false },
      { name: "Odlaw", top: "57.5", left: "29", active: false, isFound: false },
      { name: "Wizard", top: "69", left: "5", active: false, isFound: false },
      { name: "Wenda", top: "35", left: "46.5", active: false, isFound: false },
    ]
  },
  {
    id: uuidv4(), 
    img: '3',
    characters:
    [
      { name: "Waldo", top: "55.5", left: "38", active: false, isFound: false },
      { name: "Odlaw", top: "62", left: "4.5", active: false, isFound: false },
      { name: "Wizard", top: "51", left: "76", active: false, isFound: false },
      { name: "Wenda", top: "45", left: "27", active: false, isFound: false },
    ]
  },
  {
    id: uuidv4(), 
    img: '4',
    characters:
    [
      { name: "Waldo", top: "27", left: "25.5", active: false, isFound: false },
      { name: "Odlaw", top: "59", left: "57.5", active: false, isFound: false },
      { name: "Wizard", top: "80", left: "59", active: false, isFound: false },
      { name: "Wenda", top: "66", left: "22.5", active: false, isFound: false },
    ]
  },
  {
    id: uuidv4(), 
    img: '5',
    characters:
    [
      { name: "Waldo", top: "59", left: "86.5", active: false, isFound: false },
      { name: "Odlaw", top: "50", left: "63.5", active: false, isFound: false },
      { name: "Wizard", top: "43", left: "22.5", active: false, isFound: false },
      { name: "Wenda", top: "78", left: "11", active: false, isFound: false },
    ]
  },
  {
    id: uuidv4(), 
    img: '6',
    characters:
    [
      { name: "Waldo", top: "35.5", left: "68", active: false, isFound: false },
      { name: "Odlaw", top: "73", left: "53", active: false, isFound: false },
      { name: "Wizard", top: "61", left: "66.5", active: false, isFound: false },
      { name: "Wenda", top: "60", left: "57", active: false, isFound: false },
    ]
  }
]

const RouteSwitch = () =>
{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App object={object} />} />
        <Route path="/gameboard/:id" element={<Gameboard object={object} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
