import React from "react";

export default function Alert(props) {
    const convertToCapitalize = (word)=>{
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    props.alert && <div>
      {/* This is alert box */}
     <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{convertToCapitalize(props.alert.type)} : {props.alert.message}</strong>
      </div>
    </div>
  );
}
