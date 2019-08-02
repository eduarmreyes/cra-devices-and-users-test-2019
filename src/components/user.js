import React from "react";

function formatDate(date, timezone) {
  const _date = new Date(date);
  const options = {
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZone: timezone,
  };
  return new Intl.DateTimeFormat("en-US", options).format(_date);
}

const User = props => (
  <div className="max-w-md rounded-sm overflow-hidden shadow-lg mx-auto mt-4">
    <div className="flex items-center px-6 py-4">
      <div className="w-1-3">
        <div className="bg-grey-light h-24 w-24 rounded-full flex items-center justify-center mr-3" />
      </div>
      <div className="w-full">
        <div className="font-bold text-xl mb-1">{props.attributes.name}</div>
        <div className="font-thin text-grey-darker text-sm mb-1">
          {props.attributes.email}
        </div>
        {Boolean(props.attributes.starts_at) &&
        Boolean(props.attributes.ends_at) ? (
          <div className="font-bold text-grey-darker text-sm mb-3">
            {formatDate(
              props.attributes.starts_at,
              props.attributes.device_time_zone
            )}{" "}
            -{" "}
            {formatDate(
              props.attributes.ends_at,
              props.attributes.device_time_zone
            )}
          </div>
        ) : null}
        <div className="text-right">
          <span className="font-bold rounded-lg bg-green-lighter text-green-darkest px-3 py-1">
            {props.attributes.status.toLocaleUpperCase()}
          </span>
        </div>
      </div>
    </div>
  </div>
);
export default User;
