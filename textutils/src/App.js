import logo from './logo.svg';
import './App.css';
let name = "Devansh";

function App() {
  return (
    <>
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>

    </nav>

    <div className="container">
      <h1>Hello {name}</h1>
     <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias distinctio est facere similique ipsa libero ducimus neque quos beatae autem ratione explicabo aut ipsam porro praesentium, tempore hic officiis voluptatibus cum labore. Quibusdam, dolorum.</p>
    </div>
    </>
   
  );
}

export default App;
