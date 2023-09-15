import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
// import About from './Components/About';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light')
  const [alert , setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg: message
      type: type
    })
  }

  const togglemode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#1C2951';
      setAlert("Dark moide Enabled!","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      setAlert("Light moide Enabled!","success")


    }
  }

  return (
  <>
   
<Navbar title = "Textutils" aboutText = "About us" mode = {mode} togglemode ={togglemode}/>
<Alert alert = {alert}/>
<div className="container my-3">
<TextForm heading = "Enter the text to analyse Below:-" mode ={mode}/>
{/* <About/> */}
</div>


  </>
);
}

export default App;
