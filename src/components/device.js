import React from "react";

import Toggle from "./toggle";

const Device = (
  props,
  { onToggle = (...args) => console.log("onToggle", ...args) }
) => (
  <div className="max-w-md rounded overflow-hidden shadow-lg mx-auto mt-4">
    <div className="flex px-6 py-4">
      <div className="w-1-3">
        <div className="bg-grey-light h-24 w-24 rounded-full flex items-center justify-center mr-3" />
      </div>
      <div className="w-full">
        <div className="w-1-2 h-1-2 rounded-full" />
        <div className="font-bold text-xl mb-1">{props.attributes.name}</div>
        <div className="font-thin text-grey-darker text-sm mb-4">
          {props.attributes.model_number}
        </div>
        <Toggle onToggle={onToggle} on={props.attributes.state === "locked"}>
          <div className="flex items-center justify-between">
            <Toggle.Button />
            <Toggle.On>
              <div className="text-green">Locked</div>
            </Toggle.On>
            <Toggle.Off>
              <div className="text-red">Unlocked</div>
            </Toggle.Off>
          </div>
        </Toggle>
      </div>
    </div>
  </div>
);
export default Device;
