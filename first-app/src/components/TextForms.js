import React, {useState} from 'react'

export default function TextForms(props) {
    const handleUpClick = ()=>{
        console.log("upper case clicked ");
        let newText= text.toUpperCase();
        setText(newText)
    }

    const handleDownClick=()=>{
        console.log("lower case");
        let newText2= text.toLowerCase();
        setText(newText2)
    }

    const handleOnChange = (event)=>{
        console.log("on change");
        setText(event.target.value)
       
    }

    const handleinverseClick=()=>{
        console.log("inversed text");
        let newText3="";
        setText(newText3)
    }
const [text, setText]= useState('Enter Your Text Here');
  return (
        <>
        <div>   
        <h1>{props.heading}</h1>
        <div className="container mb-3 my-3 ">
            <textarea className="form-control border-light-subtle" value={text} onChange={handleOnChange}  id="Textarea1" rows="12"></textarea>
            </div>
            <button className="btn btn-primary m-1" onClick={handleUpClick} >Convert To UpperCase</button>        
            <button className="btn btn-primary m-1" onClick={handleDownClick} >Convert To LowerCase</button>
            <button className="btn btn-primary m-1" onClick={handleinverseClick} >Clear Text </button>
        </div>
        <div className="container my-3">
            <h1>Your Text Summary</h1>
            <p> {text.split(" ").length} Words And {text.length} Characters</p>
            <p> {0.00333*text.split(" ").length} Minutes to read and {0.1998*text.split(" ").length} Seconds to read</p>
            
        </div>
        </>
  )
};
