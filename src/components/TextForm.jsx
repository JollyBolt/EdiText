import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("")

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        console.log(msg)
        msg.text = text;
        msg.lang = ""
        window.speechSynthesis.speak(msg);
    }
    const capitalise = () => {
        const str=text.split(" ")
        for (var i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);      
        }
        const newText = str.join(" ");
        setText(newText)
    }

    const countWords = (str) => {
        return str.split(/\s+/).filter(function (num) {
            return num != ''
        }).length;

    }
return (
    <div className='container my-3'>
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="my-box" rows="8" placeholder='Enter Text Here' value={text} onChange={(e) => {setText(e.target.value)}}></textarea>
            </div>
            <button className="btn btn-primary me-2 my-1" onClick={()=>{setText(text.toUpperCase())}}>Convert to Uppercase</button>
            <button className="btn btn-primary me-2 my-1" onClick={()=>{setText(text.toLowerCase())}}>Convert to Lowercase</button>
            <button className="btn btn-primary me-2 my-1" onClick={capitalise}>Capitalise each word</button>
            <button className="btn btn-primary me-2 my-1" onClick={speak}>Listen</button>
            <button className="btn btn-primary me-2 my-1" onClick={()=>{navigator.clipboard.writeText(text)}}>Copy Text</button>
            <button className="btn btn-primary me-2 my-1" onClick={()=>{setText("")}}>Clear Text</button>
        </div>
        <h1 className='my-2'>Your Text Summary</h1>
        <p>Entered text has {countWords(text)} words and {text.length} characters.</p>
    </div>
)
}

