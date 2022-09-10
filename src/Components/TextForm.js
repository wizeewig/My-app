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
        navigator.clipboard.writeText(text)
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
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white' , 
        color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        <button disabled={text.length===0} className='btn btn-primary my-3 mx-2' onClick={handleUpClick}>Convert UpperCase</button>
        <button disabled={text.length===0} className='btn btn-primary my-3 mx-2' onClick={handleLowClick}>Convert LowerCase</button>
        <button disabled={text.length===0} className='btn btn-primary my-3 mx-2' onClick={handleClearTextClick}>Clear Text</button>
        <button disabled={text.length===0} className='btn btn-primary my-3 mx-2' onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className='btn btn-primary my-3 mx-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
     </div>
     </div>
     <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1> Your Text Summary</h1>
        <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} characters</p>
        <p> {0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minute read</p>
        <h2>Preview</h2>
        <p> {text.length>0?text:"Nothing to preview."} </p>
     </div>
     </>
    
  )
}

TextForm.propTypes = { title : PropTypes.string.isRequired}

TextForm.defaultProps = { title : "Title Here" }