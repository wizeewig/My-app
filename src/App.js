import React, { useState } from 'react';
import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import {
  BrowserRouter as Router,
  Route,
  Routes} from "react-router-dom";

function App() {

  const [mode,setMode] = useState('light')
  const [alert,setAlert] = useState(null)

  const showAlert = (message,type) =>{
        setAlert({
          msg:message,
          type:type
        })

        setTimeout(()=>{
          setAlert(null);}
          ,1500
        )
  }

  /* Adding colour palletes*/ 
  //  const removeBodyClasses=()=>{
  //      document.body.classList.remove('bg-light')
  //      document.body.classList.remove('bg-dark')
  //      document.body.classList.remove('bg-success')
  //      document.body.classList.remove('bg-warning')
  //      document.body.classList.remove('bg-danger')
  //      document.body.classList.remove('bg-primary')
  //  }

  const toggleMode=(cls)=>{
    
    // removeBodyClasses();
    // document.body.classList.add("bg-"+cls)

    if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor='#042743'
    showAlert("Dark Mode has been enabled", "success")
    }
  else{
    setMode('light')
    document.body.style.backgroundColor='white'
    showAlert("Light Mode has been enabled", "success")
  }
}
  return (
    <>
    <Router>
    <Navbar title="My-App" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} />
    <div className='container my-3'>
        <Routes>
            <Route exact path="/home" element={<TextForm showAlert={showAlert} title="Enter Text Here" mode={mode}/>} />
            <Route exact path="/about" element={<About mode={mode} />} />
        </Routes>
    </div>
    </Router>
    {/* <Navbar title="My-App" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} />
    <div className='container my-3'>
      <TextForm showAlert={showAlert} title="Enter Text Here" mode={mode}/>
    </div> */}
    </> 
    
  );
}

export default App;
