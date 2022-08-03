import React, { useState } from "react";
export default function TextForm(prop) {
  const handleUpperCaseClick = () => {
    let result = text.toUpperCase();
    setText(result);
  };

  const handleLowerCaseClick = () => {
    let result = text.toLowerCase();
    setText(result);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleExtraSpaces = (event) => {
    let result = text.split(/[ ]+/);
    setText(result.join(" "));
  };
  const handleCopyText = (event) => {
    let copyiedText = document.getElementById("myBox");
    copyiedText.select();
    Navigator.clipboard.writeText(text.value);
  };

  const handleClearText = () => {
    let result = "";
    setText(result);
  };
  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div>
        <div className="container">
          <h1>{prop.heading}</h1>
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            rows="8"
            onChange={handleOnChange}
          ></textarea>
        </div>
        {/* button.btn.btn-primary */}
        <button
          className="btn btn-primary my-2 mx-3"
          onClick={handleUpperCaseClick}
        >
          Convert to uppercase
        </button>
        <button
          className="btn btn-primary my-2 mx-2"
          onClick={handleLowerCaseClick}
        >
          Convert to lowercase
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleCopyText}>
          Copy text
        </button>
        <button
          className="btn btn-primary my-2 mx-2"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button className="btn btn-danger my-2 mx-2" onClick={handleClearText}>
          Clear text
        </button>
      </div>
      <div className="container">
        <h2>Your text summary</h2>
        <p>
          {" "}
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
