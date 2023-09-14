import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
// import TextForm from './Components/TextForm';

function App() {
  return (
  <>
   
<Navbar title = "Textutils" aboutText = "About us"/>
<div className="container my-3">
{/* <TextForm heading = "Enter the text to analyse Below:-"/> */}
<About/>
</div>


  </>
);
}

export default App;
