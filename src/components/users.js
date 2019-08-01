import React from "react";
import axios from "axios";

import User from "./user";
import { ReactComponent as EmptyStateImage } from "../images/undraw_synchronize_ccxk.svg";

class Users extends React.Component {
  state = { users: [] };
  componentDidMount() {
    setTimeout(() => {
      axios
        .get("https://api.myjson.com/bins/f2plp")
        .then(response => {
          return response.data;
        })
        .then(data => {
          this.setState({ users: data.data });
        });
    }, 0);
  }
  render() {
    return (
      <>
        {Boolean(this.state.users.length > 0) ? (
          this.state.users.map(user => (
            <User key={user.id} attributes={user.attributes} type={user.type} />
          ))
        ) : (
          <div className="max-w-md rounded overflow-hidden shadow-lg mx-auto mt-4">
            <div className="px-6 py-4">
              <div className="w-1-2 h-1-2 rounded-full" />
              <EmptyStateImage width="100%" height="250px" />
            </div>
          </div>
        )}
      </>
    );
  }
}
export default Users;
