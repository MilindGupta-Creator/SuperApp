import './App.css';
import Genre from './Component/Genre/Genre.js';
import Signup from './Pages/Signup';
import { Routes, Route } from "react-router-dom";
import PreBrowse from './Pages/prebrowse';

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Signup />} />
    <Route path="/genre" element={<Genre/>} />
    <Route path="/prebrowse" element={<PreBrowse/>} />
  </Routes>
  </>)
}

export default App;
