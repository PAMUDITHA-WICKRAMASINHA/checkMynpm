import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/home';
import NavBar from './components/navBar';
import Success from './components/success';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><NavBar/><Home/></>} />
        <Route path="/success" element={<><NavBar/><Success/></>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
