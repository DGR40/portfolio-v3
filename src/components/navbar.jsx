import MeOnBoat from "../images/meonboat2.png";
import React from "react";

export default function NavBar() {
  return (
    <>
      <div className="navbar" id="navbar">
        <div className="navbar-left">
          <img src={MeOnBoat} className="prof-pic-img" />
        </div>
        <div className="navbar-right">
          <h5 className="hotlink" onClick={() => goToDiv("home")}>
            Home
          </h5>
          <h5 className="hotlink" onClick={() => goToDiv("about")}>
            About
          </h5>
          <h5 className="hotlink" onClick={() => goToDiv("project-section")}>
            Projects
          </h5>
          <h5 className="hotlink">Contact</h5>
          <h5
            className="hotlink"
            id="resume-hotlink"
            onClick={() =>
              goToURL(
                "https://dgr40.github.io/portfolio-v3/images/dgrResume2023pdf-1.pdf"
              )
            }
          >
            Resume
          </h5>
        </div>
      </div>
    </>
  );

  function goToDiv(divID) {
    var elem = document.getElementById(divID);
    elem.scrollIntoView({
      behavior: "smooth",
    });
  }

  function goToURL(url) {
    window.open(url, "_blank");
  }
}
