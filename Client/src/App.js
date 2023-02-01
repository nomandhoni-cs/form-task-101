import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import SharedLayout from "./Components/SharedLayout/SharedLayout";
import Users from "./Components/Users/Users";

function App() {
  const [inputs, setInputs] = React.useState({
    name: "",
    email: "",
    sector: "",
    isAgreed: false,
  });
  const handleChange = (event) => {
    // handle change for all inputs and add sector name to inputs
    const { name, value, checked } = event.target;
    if (name === "isAgreed") {
      setInputs((prev) => ({ ...prev, [name]: checked }));
    } else {
      setInputs((prev) => ({ ...prev, [name]: value }));
    }

    console.log(inputs);
  };
  const formSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted", inputs);
    const afterSubmit = {
      name: "",
      email: "",
      sector: "",
      isAgreed: false,
    };
    setInputs(afterSubmit);
    alert("Form Submitted Successfully");
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route
              index
              element={
                <Home
                  inputs={inputs}
                  handleChange={handleChange}
                  formSubmit={formSubmit}
                />
              }
            />
            <Route path="/users" element={<Users />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
