import React, {useState, useEffect} from "./_snowpack/pkg/react.js";
function Frontend() {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log("test");
    setData([1, 2, 3]);
  }, []);
  return /* @__PURE__ */ React.createElement("div", null, "TEST");
}
export default Frontend;
