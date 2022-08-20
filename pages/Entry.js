import React from "react";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" >
          {props.icon}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.description}</dd>
    </div>
  );
}

export default Entry;
