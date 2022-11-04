import App from "./App";
import { HashRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import Gameboard from "./components/Gameboard";
import { useState } from "react";

const RouteSwitch = () =>
{
  const [data, setData] = useState('');

  const displayItem = (item) => { setData(item) }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App displayItem={displayItem} />} />
        <Route path="/gameboard/:id" element={<Gameboard data={data} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
