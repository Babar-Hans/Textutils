import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import Alert from './components/Alert';
import {
   BrowserRouter as Router,
   Routes,
   Route,
 } from "react-router-dom";
 




function App() {
   const[alert,setAlert] = useState(null);
 
   const showAlert = (message,type)=>{
  setAlert({
   msg: message,
   type: type
  })

    setTimeout(()=>{
   setAlert(null);
   },2000);
   }

    const [mode, setMode] = useState("light");

    const toggleMode = ()=>{
     if(mode==='light'){
        setMode("dark")
        document.body.style.backgroundColor = "black"
        document.body.style.color = "white"
        showAlert("dark mode has been enabled","success")
     }
     else{
        setMode("light")
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
        showAlert("ligh mode has been enabled","success")
     }
    }
return(
<Router>
<>
<Navbar title= "Textutils" about="About Us"  mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>

      <Routes>
        <Route path="/about" element={<About  mode={mode}/>}/>
        <Route path="/" element={<Textform heading="Enter the Text to Analyze Here"/>}/>
      </Routes>

</>
</Router>
);
}
export default App;
