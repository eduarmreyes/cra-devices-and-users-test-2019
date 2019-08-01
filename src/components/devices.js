import React from "react";
import axios from "axios";

import Device from "./device";
import { ReactComponent as EmptyStateImage } from "../images/undraw_synchronize_ccxk.svg";

class Devices extends React.Component {
  state = { devices: [] };
  componentDidMount() {
    setTimeout(() => {
      axios
        .get("https://api.myjson.com/bins/1crmq5")
        .then(response => {
          return response.data;
        })
        .then(data => {
          this.setState({ devices: data.data });
        });
    }, 0);
  }
  render() {
    return (
      <>
        {Boolean(this.state.devices.length > 0) ? (
          this.state.devices.map(device => (
            <Device key={device.id} attributes={device.attributes} />
          ))
        ) : (
          <div className="max-w-md rounded overflow-hidden shadow-lg mx-auto mt-4">
            <div className="px-6 py-4 m-auto">
              <div className="w-1-2 h-1-2 rounded-full" />
              <EmptyStateImage width="100%" height="250px" />
            </div>
          </div>
        )}
      </>
    );
  }
}
export default Devices;
