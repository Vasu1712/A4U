import React from "react";
import Entry from "./Entry";
import Cardid from "./Cardid";
// import css from "../public/styles.css";

function createEntry(subject) {
  return (
    <Entry
      key={subject.id}
      icon={subject.icon}
      name={subject.name}
    />
  );
}

function Card() {
  return (
    <div>
      <dl className="dictionary">{Cardid.map(createEntry)}</dl>
    </div>
  );
}

export default Card;
