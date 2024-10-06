/*
    <div>
      <div id="new-div">
        <h1>
          I am heading 1
        </h1>
      </div>
      <div id="new-div1">
        <h2>
          I am heading 2
        </h2>
      </div>
    </div>
*/

import React from "react";
import ReactDOM from "react-dom/client";

const htmlEle = React.createElement("div", {}, [
    React.createElement("div", { id: "new-div" }, 
    React.createElement("h1", {}, "I am heading 1")
   ),
    React.createElement("div", { id: "new-div" }, 
    React.createElement("h2", {}, "I am heading 41"))
]);

const rootEle = ReactDOM.createRoot(document.getElementById("root"));

rootEle.render(htmlEle);