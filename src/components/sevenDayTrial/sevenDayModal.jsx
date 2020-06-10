import React from "react";
import ReactDOM from "react-dom";

const TrialModal = (props) => {
  const [display, setDisplay] = React.useState(true);
  const open = () => {
    setDisplay(true);
  };

  const close = () => {
    setDisplay(false);
  };

  if (display) {
    return ReactDOM.createPortal(
      <div className={"modal-wrapper"}>
        <div onClick={close} className={"modal-backdrop"} />
        <div className={"modal-box"}>{props.children}</div>
      </div>,
      document.getElementById("modal-root")
    );
  }
  return null;
};

export default TrialModal;
