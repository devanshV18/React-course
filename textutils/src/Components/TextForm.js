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
    console.log("Lowercase was clicked" + text);
    setText(event.target.value);
  }

  const clearText = (event) =>{
    console.log("Text Cleared");
    let newText = '';
    setText(newText);
  }

  const handleCopy = () => {
    console.log('I am copy')
    var text = document.getElementById("myBox")
    text.select()
    navigator.clipboard.writeText(text.value)
    }

    const handleExtraSpace = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
    }
  
  const [text, setText] = useState(''); 
  // setText("new Text"); updation ka correct way
  return (
    <>
 <div className='container' style = {{color: props.mode==='dark'?'white':'black'}} >
  <h1>{props.heading}</h1>
  <div className="mb-3">
  
  <textarea className="form-control" value = {text} onChange={handleOnChange} style = {{backgroundColor: props.mode==='dark'?'grey':'white' ,color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-3" onClick = {handleUpClick} >Convert to UpperCase</button>
<button className="btn btn-primary mx-3" onClick = {handleLowClick} >Convert to LowerCase</button>
<button className="btn btn-primary mx-3" onClick = {clearText} >Clear</button>
<button className="btn btn-primary mx-3" onClick = {handleCopy} >Copy Text</button>
<button className="btn btn-primary mx-3" onClick = {handleExtraSpace} >Remove Extra Space</button>
</div>

<div className="container my-4" style = {{color: props.mode==='dark'?'white':'black'}}>
  <h1>Your Text Summary</h1>
  <p>{text.split("").length} words and {text.length} characters</p>
  <p>{0.008 * text.split("").length} Minutes Read </p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Enter Something to Preview"}</p>
</div>
</>

    
  )
}
