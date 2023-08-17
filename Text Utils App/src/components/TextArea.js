import React, { useState } from "react";

export default function TextArea(props) {
    const [text, setText] = useState("");

    function toUpper() {
        setText(text.toUpperCase());
        props.showAlert("Converted to upper case.", "success");
    }
    function toLower() {
        setText(text.toLowerCase());
        props.showAlert("Converted to lower case.", "success");
    }
    function clear() {
        setText("");
        props.showAlert("Text is cleared", "warning");
    }
    function onChange(event) {
        setText(event.target.value);
    }
    function copyText() {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied", "success");
    }

    return (
        <div className="container">
            <div className="my-2">
                <div id="textArea">
                    <h3 className="my-3">Things you can do here</h3>
                    <ul>
                        <li>Convert to upper case</li>
                        <li>Convert to lower case</li>
                        <li>Word and character count</li>
                    </ul>
                    <div className="mb-3 my-5">
                        <label for="exampleFormControlTextarea1" className="form-label"><h2>{props.title}</h2></label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" onChange={onChange} value={text}></textarea>
                    </div>
                    <button className="btn btn-primary" onClick={toUpper}>Upper case</button>
                    <button className="btn btn-primary mx-2" onClick={toLower}>Lower case</button>
                    <button className="btn btn-danger mx-2" onClick={clear}>Clear</button>
                    <button className="btn btn-primary" onClick={copyText}>Copy text</button>
                    <div className="my-3">
                        <h3>You text summary</h3>
                        <p>{text.length === 0 ? 0 : text.split(" ").length} Words and {text.length} Characters</p>
                    </div>
                </div>
            </div>
        </div>
    )
}