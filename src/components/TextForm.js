import React, {useState} from 'react'

export default function TextForm() {

    const [text, setText] = useState('')

    const toUpperCase = () => {
        console.log("UpperCase button has been clicked.")
        // let str = 'Convert to upperCase has been clicked.'
        setText(text.toUpperCase())
    }

    const toLowerCase = () => {
        setText(text.toLowerCase())
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    // setText("This has been changed.")
    return (
        <>
        <div className='container'>
            <h1>Enter your text here</h1>
            <div className=" my-3">
                <textarea className="form-control" id="floatingTextarea" rows='8' value = {text} onChange={handleOnChange}></textarea>
                <button className = "btn btn-primary my-2 mx-1"
                onClick = {toUpperCase}>Convert to Uppercase</button>
                <button className = "btn btn-secondary  my-2 mx-1" onClick={toLowerCase}>Convert to LowerCase</button>
            </div>
        </div>
        <div className="container my-2">
            <h2>Your text summary: </h2>
            <p>{text.split(' ').length} words and {text.length} characters</p>
            <p>{(0.008 * text.split(' ').length).toFixed(2)} Minutes is sufficient to read this.</p>
            <h3>Preview</h3>
            <p>{text}</p>
            
        </div>
        </>
    )
}
