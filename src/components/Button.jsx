import React from "react";

export default function Button(props) {
  return (
    <button type="button" className="btn btn-started btn-lg" style={{backgroundColor: props.bgColor}}>
      {props.content}
    </button>
  );
}

