import React from "react";
import "./JoinOurTeam.css";
import joinourteam from "./images/joinourteam.png";

function JoinOurTeam() {
  return (
    <div className="container joinourteam_main">
      <div className="joinourteam_textside">
        <div className="joinourteam_heading">
          Want to join our <br />
          helping team?
        </div>
        <div className="joinourteam_button">Register as professional</div>
      </div>
      <div className="joinourteam_imageside">
        <img src={joinourteam} alt="" />
      </div>
    </div>
  );
}

export default JoinOurTeam;
