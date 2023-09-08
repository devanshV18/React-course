import React, {useState} from 'react'




export default function TextForm(props) {
  const handleUpClick = () =>{
    console.log("Uppercase was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLowClick = () =>{
    console.log("Uppercase was Clicked" + text);
    let newText = text.toLocaleLowerCase();
    setText(newText);
  }

  const handleOnChange = (event) =>{
    console.log("On Change");
    setText(event.target.value);
  }
  
  const [text, setText] = useState('Enter text Here'); 
  // setText("new Text"); updation ka correct way
  return (
    <>
 <div className='container'>
  <h1>{props.heading}</h1>
  <div className="mb-3">
  
  <textarea className="form-control" value = {text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-3" onClick = {handleUpClick} >Convert to UpperCase</button>
<button className="btn btn-primary mx-3" onClick = {handleLowClick} >Convert to LowerCase</button>
</div>

<div className="container my-4">
  <h1>Your Text Summary</h1>
  <p>{text.split("").length} words and {text.length} characters</p>
  <p>{0.008 * text.split("").length} Minutes Read </p>
  <h2>Preview</h2>
  <p>{text}</p>
</div>
</>

    
  )
}
