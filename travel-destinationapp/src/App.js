import './App.css';
import data from './Data/data.json';
import TourDetails from './components/ TourDetail/ TourDetails';
import Home from './components/home/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/city/:id' element={<TourDetails  cityinf={data}/>} />
      </Routes>
    </>);
}

export default App;
