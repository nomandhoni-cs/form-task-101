import Form from "../Form/Form";

const Home = ({inputs, handleChange, formSubmit}) => {
  return (
    <>
    <Form inputs={inputs} handleChange={handleChange} formSubmit={formSubmit}/>
    </>
  );
};

export default Home;
