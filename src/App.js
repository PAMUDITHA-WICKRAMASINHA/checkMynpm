import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/home';
import NavBar from './components/navBar';
import Success from './components/success';
import { useEffect, useState } from 'react';

function App() {

  const [access, setAccess] = useState(null);

  useEffect(() => {
    const u = localStorage.getItem("access");
    u &JSON.parse(u) ? setAccess(true) : setAccess(false);
  },[]);

  useEffect(() => {
    localStorage.setItem("access", access);
  },[access])

  return(
    <BrowserRouter>
      <Routes>
        {!access && (
          <Route path="/" element={<><NavBar/><Home authenticate={() => setAccess(true)} /></>} />
        )}
        {access && (
          <Route path="/success" element={<><NavBar/><Success/></>}/>
        )}
        <Route path="*" element={<Navigate to={access ? "success" : "/"}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
