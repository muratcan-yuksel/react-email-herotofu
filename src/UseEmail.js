// Your imports...
// import UseEmail from "./UseEmail";
import axios, * as others from "axios";
// Example component
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
    <div className="App">
      <header className="App-header">
        <div style={{ margin: "1rem 0", fontSize: "2rem" }}>
          {/* {submitted && "Done, email was sent!"}
          {error ? `Unexpected error: ${error}` : null}
          {loading && "Email is being sent now..."} */}
        </div>
        <div style={{ margin: "1rem 0" }}>
          <button onClick={sendExample}>Send test data</button>
        </div>
      </header>
    </div>
  );
}

export default App;
