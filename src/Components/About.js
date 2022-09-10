import React from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color : 'black',
    //     backgroundColor : 'white'
    // })

    let myStyle = {
      color: props.mode === 'dark'?'white':'#042743',
      backgroundColor: props.mode === 'dark'?'rgb(36 74 104)':'white',
      border: '2px solid',
      borderColor: props.mode === 'dark'?'#042743':'white'
    }

    // const [btnText,setBtnText]=useState("Enable Dark Mode")
    // const toggleStyle= () =>{
    //     if(myStyle.color==='black'){
    //         setMyStyle({
    //             color : 'white',
    //             backgroundColor : 'black',
    //             border:'1px solid white'
    //     })
    //     setBtnText("Enable Light Mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color : 'black',
    //             backgroundColor : 'white'
    //     })
    //     setBtnText("Enable Dark Mode")
    //     }     
    // }

  return (
    <>
    <div className='container' >
        <h2 classNameName='my-3' style={{color: props.mode === 'dark'?'white':'#042743'}}>About Us</h2>
    <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>About the app</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        A simple React js App Project.
      </div>
    </div>
  </div>

  
  </div>
  {/* <div className='container my-3'>
    <button type="button" onClick={toggleStyle} className="btn btn-primary">{btnText}</button>
  </div> */}
    </div>
    </>
  )
}
