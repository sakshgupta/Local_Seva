import React from "react";
import "./Completed.css";
import workdone from "./images/work_done.jpeg";

function Completed() {
  return (
    <div className="workCompleted_container">
      <div className="container">
        <div className="workcomplete_main">
          <div className="workcompleted_image">
            <img src={workdone} alt="" />
          </div>
          <div className="workcompleted_button">
            <button>Work Done?</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Completed;
