import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
  <>
   
<Navbar title = "Textutils" aboutText = "About us"/>
<div className="container"><TextForm heading = "Enter the text to analyse Below:-"/></div>

  </>
);
}

export default App;
