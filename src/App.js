import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import SharedLayout from "./Components/SharedLayout/SharedLayout";
import Users from "./Components/Users/Users";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import axios from "axios";
import UpdateUser from "./Components/UpdateUser/UpdateUser";
function App() {
  // Users state
  const [users, setUsers] = React.useState([]);
  // Form inputs state
  const [inputs, setInputs] = React.useState({
    name: "",
    email: "",
    sector: "",
    isAgreed: false,
    isFormSubmitted: false,
  });
  // Handle change for all inputs
  const handleChange = (event) => {
    inputs.isFormSubmitted = false;
    // handle change for all inputs and add sector name to inputs
    const { name, value, checked } = event.target;
    if (name === "isAgreed") {
      setInputs((prev) => ({ ...prev, [name]: checked }));
    } else {
      setInputs((prev) => ({ ...prev, [name]: value }));
    }
    // console.log(inputs);
  };
  // Success message after form submit
  const successMessage = () => {
    return (
      <Stack sx={{ width: "100%", marginTop: "1rem" }}>
        <Alert severity="success" sx={{ fontSize: "1rem" }}>
          Submitted successfully
        </Alert>
      </Stack>
    );
  };
  // Form submit handler
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Validate Full Name and email with regex and compare in one line and give alert
    const nameRegex = /^[a-zA-Z ]{2,30}$/;
    const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if (!nameRegex.test(inputs.name) || !emailRegex.test(inputs.email)) {
      alert("Please fill the form correctly");
    } else {
      // Axios post request
      axios
        .post("https://form-backend.vercel.app/users", inputs)
        .then((res) => {
          console.log("Form Submitted", res.data);
          const afterSubmit = {
            name: "",
            email: "",
            sector: "",
            isAgreed: false,
            isFormSubmitted: !inputs.isFormSubmitted,
          };
          setInputs(afterSubmit);
        })
        .catch((err) => {
          console.log(err);
        });
    }
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
                  handleFormSubmit={handleFormSubmit}
                  isFormSubmitted={inputs.isFormSubmitted}
                  successMessage={successMessage}
                />
              }
            />
            <Route
              path="/users"
              element={<Users users={users} setUsers={setUsers} />}
            />
            <Route
              path="/user/:id"
              element={
                <UpdateUser
                  inputs={inputs}
                  handleChange={handleChange}
                  isFormSubmitted={inputs.isFormSubmitted}
                  successMessage={successMessage}
                  setInputs={setInputs}
                />
              }
            />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
