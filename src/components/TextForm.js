import React, { useState } from 'react';

export default function TextForm(props) {
    const handelUpCase = () => {
        // console.log("Upper case was Clicked" + text);
        let newText = text.toUpperCase()
        setText(newText);
    }
    const handelLoCase=()=>{
        let newText = text.toLowerCase();
        setText(newText);

    }
    const Cleartext=()=>{
        let newText = '';
        setText(newText);

    }
    const handelOnChange = (event) => {
        // console.log("on changed");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here');

    return (
        <>
            <div  className="container" style={{color: props.mode==='dark'? 'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3" >
                    <textarea className="form-control" value={text} onChange={handelOnChange} style={{backgroundColor:props.mode==='dark'? 'gray':'white',color:props.mode==='dark'? 'white':'black'}} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handelUpCase}>Convert UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handelLoCase}>Convert LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={Cleartext}>Clear test</button>
            </div>
            <div className="container" style={{color: props.mode==='dark'? 'white':'black'}}>
            <h2>Your Text summary</h2>
            <p>{text.length===0? 0:text.split(" ").length} words and {text.length} Character</p>
            <p>{0.008* text.split(" ").length} minuts. read</p>
            <h2>Preavew</h2>
            <p>{text}</p>
            </div>
        </>
    );
}
