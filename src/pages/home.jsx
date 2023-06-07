import React, { useState } from "react";

function Home() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the message to the API endpoint
    fetch("http://127.0.0.1:8000/api/chat/", {
      method: "POST",
      body: JSON.stringify({ message }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        console.log(data);

        // Refresh the page
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="text-center">
      <h1>Welcome to our Chatbot!!</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="message1">Type your message</label>
          <input
            type="text"
            className="form-control"
            id="message1"
            aria-describedby="emailHelp"
            placeholder="Enter your message"
            value={message}
            onChange={handleMessageChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            Type your message in the above text; this is private.
          </small>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Home;
