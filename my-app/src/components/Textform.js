import React, {useState} from 'react'


export default function Textform(props) {
 
    const handleUpClick = () => { 
        let newText = text.toUpperCase();
        setText(newText)
     }
     const handleLoClick = () => { 
        let newText = text.toLowerCase();
        setText(newText)
     }
     const handleOnChange  = (event) => { 
       setText(event.target.value);
     }

    const [text, setText] = useState("");
    // setText(); right way to use setText.....
  return (
    <div>
        <div className='container my-3'>
        <div className="mb-3">
        <h2>{props.heading}</h2>
        <textarea className="form-control border border-dark" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='light'?'dark':'light'}} id="exampleFormControlTextarea1" rows="10"></textarea>
        </div>
        <button type="button" className="btn btn-info" onClick={handleUpClick}><b>Convert to UpperCase</b></button>
        
        <button type="button" className="btn btn-info mx-3" onClick={handleLoClick}><b>Convert to LowerCase</b></button>
    
        <h3 className='my-3'>Text Summary</h3>
        <p>{text.split(" ").length} Word {text.length} Characters</p>
        <h4>Text Preview</h4>
        <span>{text}</span>
        </div>
    </div>
  );
}
