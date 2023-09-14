import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
// import About from './Components/About';
import TextForm from './Components/TextForm';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light')

  const togglemode = () => {
    if(mode === 'light'){
      setMode('dark')
    }
    else{
      setMode('light')
    }
  }

  return (
  <>
   
<Navbar title = "Textutils" aboutText = "About us" mode = {mode} togglemode ={togglemode}/>
<div className="container my-3">
<TextForm heading = "Enter the text to analyse Below:-"/>
{/* <About/> */}
</div>


  </>
);
}

export default App;
