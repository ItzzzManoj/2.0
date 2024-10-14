import React from "react";
import ReactDOM from "react-dom/client";

const TitleComponent = function () {
  return (
    <h1 id="color-red">
        I am a title component of normal function!
    </h1>
  );
}

const hundred = 100;

const titleElement = (
  <div>
    { hundred }
    { TitleComponent() }
    <h2>
      I am heading 2!
    </h2>
  </div>
);

const HeadingComponent = () => (
  <div>
    <TitleComponent />
    {
      titleElement
    }
    <h1 id="color-red">
      I am a Heading Component
    </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);