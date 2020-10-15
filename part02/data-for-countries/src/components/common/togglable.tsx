import React, { useState } from "react";

type TogglableProps = {
  children: React.ReactNode;
  buttonLabel: string;
};

const Togglable = (props: TogglableProps) => {
  const [visible, setVisible] = useState(false);

  const hideWhenVisible = { display: visible ? "none" : "" };
  const showWhenVisible = { display: visible ? "" : "none" };

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <div style={hideWhenVisible}>
        <button onClick={toggleVisibility}>{props.buttonLabel}</button>
      </div>
      <div style={showWhenVisible} className="togglableContent">
        <button onClick={toggleVisibility}>cancel</button>
        {props.children}
      </div>
    </div>
  );
};

export default Togglable;
