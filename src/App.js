import logo from './logo.svg';
import './App.css';
import { CheckLisence } from '@pamuditha-blockstars/check-license-react'

function App() {

  const result = CheckLisence(process.env.REACT_APP_LICENSE_KEY);
  console.log("License key: " + process.env.REACT_APP_LICENSE_KEY);
  console.log(result);
}

export default App;
