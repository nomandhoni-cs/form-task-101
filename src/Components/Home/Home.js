import Form from "../Form/Form";

const Home = ({ inputs, handleChange, handleFormSubmit, isFormSubmitted, successMessage }) => {
  return (
    <>
      <Form
        inputs={inputs}
        handleChange={handleChange}
        handleFormSubmit={handleFormSubmit}
        isFormSubmitted={isFormSubmitted}
        successMessage={successMessage}
      />
    </>
  );
};

export default Home;
