const heading = React.createElement("h1", { id: "heading" }, "Hello World from React!");
console.log(heaading);  //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);