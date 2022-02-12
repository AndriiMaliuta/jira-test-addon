import React, {useState, useEffect} from "../_snowpack/pkg/react.js";
import ReactDOM from "../_snowpack/pkg/react-dom.js";
import Button from "../_snowpack/pkg/@atlaskit/button.js";
function Frontend() {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log("test");
    setData([1, 2, 3]);
  }, []);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Button, null, "Click"));
}
export default Frontend;
ReactDOM.render(/* @__PURE__ */ React.createElement(Frontend, null), document.querySelector("#react-root"));
