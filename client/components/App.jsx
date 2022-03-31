import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import chirpcard from "./components/chirpcard.jsx.js.js";

const App = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [chirps, setChirps] = useState([
    {
      id: uuidv4(),
      username: "Nick",
      message: "hahhahahhahahhahha",
      created: moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
    },
    {
      id: uuidv4(),
      username: "Garrett",
      message: "i bite onion",
      created: moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
    },
    {
      id: uuidv4(),
      username: "Parker",
      message: "Black Air Force Energy",
      created: moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
    },
  ]);

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);
  const handleChirpSubmit = (e) => {
    e.preventDefault();

    const newChirp = {
      id: uuidv4(),
      username: username,
      message: message,
      created: moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
    };

    setChirps([...chirps, newChirp]);
  };

  return (
    <>
      <div className="container text-body text-center">
        <div className="row">
          <div className="col-12 p-0">
            <nav>
              <img
                className="banner"
                src="./assets/banner.jpg"
                alt="logo"
              />
              <h1> Vikings Chirpr</h1>
            </nav>
          </div>
        </div>
        <div className="row">
          <form action="">
            <div className="form-group mb-2">
              <input
                type="text"
                className="form-control mb-1"
                placeholder="Username"
                aria-label="Username"
                value={username}
                onChange={handleUsernameChange}
              />
              <textarea
                className="form-control mb-2"
                              aria-label="With textarea"
                              placeholder="(500 characters max)"
                value={message}
                onChange={handleMessageChange}
                cols="30"
                rows="10"
              ></textarea>
              <button className="btn btn-dark" onClick={handleChirpSubmit}>
                Chirp It!
              </button>
            </div>
          </form>
          <div className=" chirps mb-4">
            {chirps.map((chirp) => (
              <chirpcard
                key={chirp.id}
                username={chirp.username}
                message={chirp.message}
                created={chirp.created}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;