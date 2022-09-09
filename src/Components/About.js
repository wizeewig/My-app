import React, {useState} from 'react'

export default function About() {

    const [myStyle, setMyStyle] = useState({
        color : 'black',
        backgroundColor : 'white'
    })

    const [btnText,setBtnText]=useState("Enable Dark Mode")

    const toggleStyle= () =>{
        if(myStyle.color==='black'){
            setMyStyle({
                color : 'white',
                backgroundColor : 'black',
                border:'1px solid white'
        })
        setBtnText("Enable Light Mode")
        }

        else{
            setMyStyle({
                color : 'black',
                backgroundColor : 'white'
        })
        setBtnText("Enable Dark Mode")
        }
           
    }

  return (
    <>
    <div className='container' style={myStyle}>
        {/* <h2 classNameName='my-3'>About Us</h2> */}
    <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        About
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>A simple React js App Project.</strong>
      </div>
    </div>
  </div>
  </div>
  <div className='container my-3'>
    <button type="button" onClick={toggleStyle} className="btn btn-primary">{btnText}</button>
  </div>
    </div>
    </>
  )
}
