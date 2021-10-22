import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

// App has to be capitalised, so that JSX later recognises that it's something custom
const App = () => {
  return React.createElement("div", {}, [
    // the square brackets are optional, you can just pass everything here as separate arguments
    React.createElement("h1", { id: "my-brand" }, "Adopt Me!"),
    ...[1, 2, 3, 4].map((i) => React.createElement("h2", {}, i)),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel",
    }),
    React.createElement(Pet, {
      name: "Sudo",
      animal: "Dog",
      breed: "Wheaten Terrier",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
