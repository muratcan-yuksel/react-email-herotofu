import axios, * as others from "axios";
import { Formik } from "formik";
import * as yup from "yup";
function App() {
  let endpointUrl =
    "https://public.herotofu.com/v1/ffa45330-5ffc-11ed-b82c-5d75eaa7ccff";

  const sendEmail = async (data) => {
    try {
      const resp = await axios.post(endpointUrl, data);
      console.log(resp.data);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };

  const sendExample = () => {
    // Can be any data, static and dynamic
    sendEmail({
      example_user: "user@example.com",
      example_data: new Date().toISOString(),
    });
  };

  return (
    <div
      className="App"
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#282c34",
        color: "white",
      }}
    >
      <h2>Contact Form</h2>
      <form
        action=""
        style={{ display: "flex", flexDirection: "column", width: "40vw" }}
      >
        <input type="text" />

        <input type="text" />
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <div style={{ margin: "1rem 0" }}>
          <button onClick={sendExample}>Send test data</button>
        </div>
      </form>
    </div>
  );
}

export default App;
