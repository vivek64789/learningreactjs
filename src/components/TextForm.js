import React, { useState } from "react";

export default function TextForm(props) {
  const handleOnClick = (e) => {
    // e.preventDefault();
    // setText("You have changed the value of text");
    setText(text.toUpperCase());
    props.showAlert("Converted to Uppercase", "success");
    

    // console.log("Clicked!");
  };
  const handleOnClickLowercase = (e) => {
    // e.preventDefault();
    // setText("You have changed the value of text");
    setText(text.toLowerCase());
    props.showAlert("Converted to Lowercase", "success");
    // console.log("Clicked!");
  };
  const handleOnChange = (e) => {
    // e.preventDefault();
    setText(e.target.value);
    // console.log("Changed!");
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className={`container my-5 text-${
          props.darkMode === "light" ? "dark" : "light"
        }`}
      >
        <h2>{props.heading}</h2>
        <div className="form-floating">
          <textarea
            value={text}
            onChange={handleOnChange}
            style={{ height: "200px" }}
            className={`form-control bg-${
              props.darkMode === "dark" ? "dark" : "light"
            } text-${props.darkMode === "light" ? "dark" : "light"}`}
            placeholder="Leave a comment here"
            id="floatingTextarea"
          ></textarea>
          <label htmlFor="floatingTextarea">
            Enter the text below to analyze
          </label>

          <button onClick={handleOnClick} className={`btn btn-primary my-1 mx-1 ${text.length===0?'disabled':''}`}>
            Convert to Uppercase
          </button>
          <button
            onClick={handleOnClickLowercase}
            className={`btn btn-primary my-1 mx-1 ${text.length===0?'disabled':''}`}
          >
            Convert to Lowercase
          </button>
          <p>{text}</p>
        </div>
      </div>

      <div
        className={`container text-${
          props.darkMode === "light" ? "dark" : "light"
        }`}
      >
        <h3>Your text summary</h3>
        <p>
          Total Words: {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} <br /> Total Characters:{" "}
          {text.length}
        </p>
        <p>{text.length===0?0:0.0055 * text.split(" ").length} Minutes Read</p>
      </div>
      
    </>
  );
}
