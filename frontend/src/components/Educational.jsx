import React, { useState } from "react";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import data from "./data.json";

export default function Educational() {
  console.log(data);
  const [count, setCount] = useState(0);
  function nextData() {
    if (count <data.length-1) {
      setCount(count + 1);
    } else {
      setCount(0);
    }
  }
  function prevData() {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(data.length - 1);
    }
  }
  return (
    <div className="edu-parent">
      <div className="edu-div">
        <div className="content">
          <div className="edu-text">{data[count].text}</div>
          <div className="edu-video">
            <img src={data[count].gif} />
          </div>
        </div>
        <div className="nav-buttons">
          <GrPrevious size="2vmax" onClick={prevData} />
          <GrNext size="2vmax" onClick={nextData} />
        </div>
      </div>
    </div>
  );
}
