import './App.css';
import mqtt from "mqtt";
import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { url: "", error: "", captors: [] };
  }

  render() {
    return (
      <div>
        <div>
          <div>
            <h2><label htmlFor="first-name">URL du Brocker</label></h2>
          </div>
          <div>
            <input
              type="text" id="server"
              placeholder="Enter your server URI here"
              onChange={this.urlListener.bind(this)}
              value={this.state.url}>
            </input>
          </div>
          <p>{this.state.error}</p>
        </div>
      </div>
    );
  }

  urlListener(event) {
    console.log(event);
    let url = event.target.value;
    this.setState({ url: url, error: "", captors: this.state.captors });
    try {
      const client = mqtt.connect(url);
      this.setUrl(url, client);
      console.log(this.state.captors);
    } catch (error) {
      this.setState({ url: url, error: "url incorrect", captors: this.state.sensors });
    }
  }



  setUrl(url, client) {
    const captors = [];
    let getThis = () => {
      return this;
    };
    mqtt.connect(url);

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
      if (typeof captor === "undefined") {
        captor = { id, ...obj, values: [] };
        delete captor.value;
        captors.push(captor);
      }

      captor.values.unshift(obj.value);
      captor.values = captor.values.slice(0, 10);

      getThis().setState({ url: getThis().state.url, alert: getThis().state.alert, captors: captors });
      console.log(captors);
    });
  }
}

export default App;
