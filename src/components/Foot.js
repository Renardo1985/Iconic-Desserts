import React from "react";

export default function Foot() {
  return (
    <div>
      <footer className="mt-5 pt-5 text-center text-small ">
        <a href="https://www.instagram.com/iconic_desserts" target="blank">
          <img
            className="foot-icon"
            src="https://github.githubassets.com/images/modules/site/icons/footer/instagram.svg"
            alt="IG icon"
          />
        </a>
        <a href="https://facebook.com/iconicdesserts" target="blank">
          <img
            className="foot-icon"
            src="https://github.githubassets.com/images/modules/site/icons/footer/facebook.svg"
            alt="Github Icon"
          />
        </a>
        <div>
        <p>Millersville, MD, 21108 <br></br>Phone: (203)570-1650 <br></br>&copy;2023 Iconic Desserts</p>
        </div>
      </footer>
    </div>
  );
}