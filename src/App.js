import './App.css';
import mqtt from "mqtt";
import React, { useState } from 'react';
import Button from "./entity/button/Button";
import CGC from "./entity/CssGridContainer.module.css";
import styleHeader from "./entity/Header.module.css";

const App = props => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [captors, setCaptors] = useState([]);

  const changeUrl = (urlEvent, client) => {
    const captors = [];
    mqtt.connect(urlEvent);
    client.on("connect", function () {
      client.subscribe("value/#", function (err) {
        if (err !== null) {
          console.log(err);
        }
      });
    });

    client.on("message", function (topic, message) {
      const id = topic.substring(6);

      const obj = JSON.parse(message.toString());

      let captor = captors.find(element => element.id === id);

      if (captor === undefined) {
        captor = { id, ...obj, values: [] };
        delete captor.value;
        console.log(captors)
        setCaptors(captors.push(captor));
        console.log(captors)
        console.log("end")
      } else {
        const index = captors.indexOf(captor);
        if (index > -1) {
          setCaptors(captors[index] = {});
          captor.values.unshift(obj.value);
          captor.values = captor.values.slice(0, 10);
          setCaptors(captors[index] = captor);
          console.log(captors);
        }
      }
      setUrl(urlEvent);
      setCaptors(captors);
    });
  }

  const urlListener = event => {
    let urlEvent = event.target.value;
    setUrl(urlEvent);
    setError("");
    setCaptors(captors);
    try {
      const client = mqtt.connect(urlEvent);
      changeUrl(urlEvent, client);
    } catch (error) {
      setError("url incorrect");
    }
  }
  return (
    <>
      <div className={CGC.container}>
        <div className={CGC.header}>
          <h2><label htmlFor="first-name">URL du Brocker</label></h2>
          <input
            type="text" id="server"
            className={styleHeader.input}
            placeholder="Enter your server URI here"
            onChange={urlListener}
            value={url}>
          </input>
          <p>{error}</p>
        </div>
        <Button captors={captors} />
      </div>
    </>
  );
}

export default App;
