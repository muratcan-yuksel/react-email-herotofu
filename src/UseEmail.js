import { useState } from "react";
const axios = require("axios");

const UseEmail = (endpointUrl) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const sendEmail = async (data) => {
    try {
      const resp = await axios.post(endpointUrl, data);
      console.log(resp.data);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };

  //   const sendEmail = (data) => {
  //     setLoading(true);
  //     setSubmitted(false);
  //     setError(undefined);

  //     fetch(endpointUrl, {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     })
  //       .then((response) => {
  //         // Endpoint thinks that it's likely a spam/bot request, you need to change "spam protection mode" to "never" in HeroTofu forms
  //         if (response.status === 422) {
  //           throw new Error("Are you robot?");
  //         }

  //         if (response.status !== 200) {
  //           throw new Error(`${response.statusText} (${response.status})`);
  //         }

  //         return response.json();
  //       })
  //       .then(() => {
  //         setSubmitted(true);
  //         setLoading(false);
  //       })
  //       .catch((err) => {
  //         setError(err.toString());
  //         setLoading(false);
  //       });
  //   };

  return {
    submitted,
    loading,
    error,
    sendEmail,
  };
};

export default UseEmail;
