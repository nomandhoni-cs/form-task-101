import Form from "../Form/Form";

const Home = ({ inputs, handleChange, formSubmit, isFormSubmitted, successMessage }) => {
  return (
    <>
      <Form
        inputs={inputs}
        handleChange={handleChange}
        formSubmit={formSubmit}
        isFormSubmitted={isFormSubmitted}
        successMessage={successMessage}
      />
    </>
  );
};

export default Home;
