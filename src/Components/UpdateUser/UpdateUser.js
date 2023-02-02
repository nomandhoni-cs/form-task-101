import React, { useEffect } from "react";
import Form from "../Form/Form";
import { useParams } from "react-router-dom";
import axios from "axios";

const UpdateUser = ({
  inputs,
  handleChange,
  successMessage,
  isFormSubmitted,
  setInputs,
}) => {
    const { id } = useParams();
    useEffect(() => {
        axios
            .get(`https://form-backend.vercel.app/user/${id}`)
            .then((res) => {
                console.log(res.data);
                setInputs(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id, setInputs]);

  // Edit user
  // handleEditUserSubmit function
  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
        .put(`https://form-backend.vercel.app/user/${id}`, inputs)
        .then((res) => {
            console.log("Form Submitted", res.data);
            const afterSubmit = {
                name: "",
                email: "",
                sector: "",
                isAgreed: true,
                isFormSubmitted: !inputs.isFormSubmitted,
            };
            setInputs(afterSubmit);
        })
        .catch((err) => {
            console.log(err);
        });
    };

  return (
    <>
      <Form
        inputs={inputs}
        handleChange={handleChange}
        handleFormSubmit={handleFormSubmit}
        isFormSubmitted={inputs.isFormSubmitted}
        successMessage={successMessage}
      />
    </>
  );
};

export default UpdateUser;
