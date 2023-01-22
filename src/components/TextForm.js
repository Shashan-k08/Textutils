import React, { useState } from 'react'

export default function Textform(props) {

    const handleupclick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        // setText("You have clicked on handleupclick");
        setText(newText);
        props.showalert("Converted to uppercase", "success"); 
    }
    const handledownclick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        // setText("You have clicked on handleupclick");
        setText(newText);
        props.showalert("Converted to lowercase", "success"); 
    }


    const handleonchange = (event) => {
        // console.log("On chnage");
        setText(event.target.value)
    }

    const handleclearclick = () => {
        setText("");
    }

    const handle_copy_text = () => {
        let text = document.getElementById("myBox");
        text.select();


        navigator.clipboard.writeText(text.value);
    }
    const [text, setText] = useState('');
    return (<>
        <div>
            <h1 className='mb-3'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} style={{ backgroundColor:props.mode === 'dark' ? '#042743' : 'white',
            color:props.mode === 'dark' ?'white':'black'}} onChange={handleonchange} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-1 my-1' disabled={text.length===0} onClick={handleupclick}>Caps</button>
            <button className='btn btn-primary mx-1 my-1' disabled={text.length===0} onClick={handledownclick}>Down</button>
            <button className='btn btn-primary mx-1 my-1' disabled={text.length===0} onClick={handleclearclick}>Clear Message</button>
            <button className='btn btn-primary mx-1 my-1'disabled={text.length===0} onClick={handle_copy_text}>Copy Message</button>
            <button className='btn btn-primary mx-1 my-1'  disabled={text.length===0} >Remove spaces</button>
        </div>

        <div className="container my-3">
            <h1> Your text summary </h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length}characters</p>
            <p>{.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>

            <h2> Preview</h2>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
    </>
    )
}