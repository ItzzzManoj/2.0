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

const htmlEle = React.createElement("div", {}, [
    React.createElement("div", { id: "new-div" }, 
    React.createElement("h1", {}, "I am heading 1")
   ),
    React.createElement("div", { id: "new-div" }, 
    React.createElement("h2", {}, "I am heading 2"))
]);

rootEle = ReactDOM.createRoot(document.getElementById("root"));

rootEle.render(htmlEle);