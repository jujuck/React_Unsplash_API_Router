import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Photos from './pages/Photos';


function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/photos/:toto/:id" element={<Photos />} />
    </Routes>
    <Home />
  </BrowserRouter>
}

export default App;
