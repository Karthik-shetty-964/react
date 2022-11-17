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

    const clearText = () => {
        setText('')
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const changeColor = (event) => {
        console.log(event.target.value)
        let ele = document.getElementById('floatingTextarea')
        ele.style.color = event.target.value
        // ele.value = event.target.value
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
                <button className = "btn btn-warning my-2 mx-1" onClick = {clearText}>Clear Text</button>
                <input type="color" className = "color-picker my-2"  onChange={changeColor}/> 
            </div>
        </div>
        <div className="container my-2">
            <h2>Your text summary: </h2>
            <p>{(text.length > 0)?text.split(' ').length:0} words and {text.length} characters</p>
            <p>{(0.008 * text.split(' ').length).toFixed(2)} Minutes is sufficient to read this.</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </>
    )
}
