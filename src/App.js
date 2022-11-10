import axios, * as others from "axios";
import { useState } from "react";
function App() {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(message);
  };

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
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleMail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
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

      <form style={{ display: "flex", flexDirection: "column", width: "40vw" }}>
        <input
          onChange={handleName}
          style={{ marginBottom: "10px" }}
          type="text"
        />

        <input
          onChange={handleMail}
          style={{ marginBottom: "10px" }}
          type="text"
        />
        <textarea
          onChange={handleMessage}
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <div style={{ margin: "1rem 0" }}>
          <button onClick={handleFormSubmit}>Send email</button>
        </div>
      </form>
    </div>
  );
}

export default App;
