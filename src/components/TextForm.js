import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=>{
        //console.log("Uppercase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }

    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    }

    const encode = ()=>{
        let newText = btoa(text);
        setText(newText);
    }

    const decode = ()=>{
        let newText = atob(text);
        setText(newText);
    }

    const handleCopy =()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        alert("Copied text " + text.value);
        props.showAlert("Text copied to clipboard","warning")
    }
    const handleOnChange = (event)=>{
        //console.log("On Change ");
        setText(event.target.value);
    }

    const [text,setText] = useState('');

  return (
    <>
    <div className='container' style = {{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value = {text} onChange={handleOnChange} style = {{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
</div>
<button className='btn btn-primary mx-1' onClick = {handleUpClick}>Convert To Uppercase</button>
<button className='btn btn-primary mx-1' onClick = {handleLowClick}>Convert To Lowercase</button>
<button className='btn btn-danger mx-1' onClick = {encode}>Encode</button>
<button className='btn btn-success mx-1' onClick = {decode}>Decode</button>
<button className='btn btn-secondary mx-1' onClick = {handleCopy}>Copy</button>
    </div>
    <div className = 'container my-3' style = {{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characteres</p>
        <p>{0.008 * text.split(" ").length} Minutes read time</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
