import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
 
    const handleUpClick=()=>{
        //console.log('Up Button was clicked')
        let newText=text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to UpperCase", "success")
    }
    const handleLowClick=()=>{
        //console.log('Low Button was clicked')
        let newText=text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to LowerCase", "success")
    }
    const handleClearTextClick=()=>{
        setText("")
        props.showAlert("Text cleared successfully", "success")
    }
    const handleCopy=()=>{
        //console.log('Copy Button was clicked')
        var text = document.getElementById('myBox')
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied to Clipboard", "success")
    }
    const handleExtraSpaces=()=>{
        //console.log('Extra Spaces Button was clicked')
        let newText=text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed successfully", "success")
    }
    const handleOnChange=(event)=>{
        //console.log('On change')
        setText(event.target.value)
    }
    const[text,setText]=useState('')

  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h1>{props.title}</h1>
     <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white' , 
        color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        <button className='btn btn-primary my-3 mx-2' onClick={handleUpClick}>Convert UpperCase</button>
        <button className='btn btn-primary my-3 mx-2' onClick={handleLowClick}>Convert LowerCase</button>
        <button className='btn btn-primary my-3 mx-2' onClick={handleClearTextClick}>Clear Text</button>
        <button className='btn btn-primary my-3 mx-2' onClick={handleCopy}>Copy Text</button>
        <button className='btn btn-primary my-3 mx-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
     </div>
     </div>
     <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1> Your Text Summary</h1>
        <p> {text.split(" ").length} Words {text.length} characters</p>
        <p> {0.008*text.split(" ").length} Minute read</p>
        <h2>Preview</h2>
        <p> {text.length>0?text:"Enter something above to preview it here"} </p>
     </div>
     </>
    
  )
}

TextForm.propTypes = { title : PropTypes.string.isRequired}

TextForm.defaultProps = { title : "Title Here" }