import React from "react";
import axios from "axios";
import { connect } from "react-redux";

import Device from "./device";
import { ReactComponent as EmptyStateImage } from "../images/undraw_synchronize_ccxk.svg";

const ADD_DEVICE = "ADD_DEVICE";

const addDevice = device => {
  return {
    type: ADD_DEVICE,
    payload: device,
  };
};

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
          this.props.addDevice(data.data);
        });
    }, 0);
  }
  render() {
    return (
      <>
        {Boolean(this.props.devices.length > 0) ? (
          this.props.devices.map(device => (
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

const mapStateToProps = state => {
  return {
    devices: state.devices,
  };
};

export default connect(
  mapStateToProps,
  { addDevice }
)(Devices);
