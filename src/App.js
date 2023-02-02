import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import SharedLayout from "./Components/SharedLayout/SharedLayout";
import Users from "./Components/Users/Users";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
function App() {
  const [inputs, setInputs] = React.useState({
    name: "",
    email: "",
    sector: "",
    isAgreed: false,
    isFormSubmitted: false,
  });
  const handleChange = (event) => {
    inputs.isFormSubmitted = false;
    // handle change for all inputs and add sector name to inputs
    const { name, value, checked } = event.target;
    if (name === "isAgreed") {
      setInputs((prev) => ({ ...prev, [name]: checked }));
    } else {
      setInputs((prev) => ({ ...prev, [name]: value }));
    }

    console.log(inputs);
  };
  const successMessage = () => {
    return (
      <Stack sx={{ width: "100%", marginTop: "1rem" }}>
        <Alert severity="success" sx={{fontSize: "1rem"}}>Submitted successfully</Alert>
      </Stack>
    );
  };
  const formSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted", inputs);
    const afterSubmit = {
      name: "",
      email: "",
      sector: "",
      isAgreed: false,
      isFormSubmitted: !inputs.isFormSubmitted,
    };
    setInputs(afterSubmit);
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
                  isFormSubmitted={inputs.isFormSubmitted}
                  successMessage={successMessage}
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
