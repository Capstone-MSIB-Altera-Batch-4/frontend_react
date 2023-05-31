import React, { useState, forwardRef, useImperativeHandle } from "react";
import { CheckCircle, ExclamationCircle } from "react-bootstrap-icons";
import './Snackbar.css'

const Snackbar = forwardRef(({ action, variant }, ref) => {
  const [show, setShow] = useState(false);

  useImperativeHandle(ref, () => ({
    showSnackbar() {
      setTimeout(() => {
        setShow(true);
      }, 100);
      setTimeout(() => {
        setShow(false);
      }, 3000);
    },
  }));

  const getActionMessage = () => {
    switch (action) {
      case "add":
        return "Added";
      case "edit":
        return "Changes";
      case "delete":
        return "Deleted";
      default:
        return null;
    }
  };

  return (
    <div
      className={`d-flex gap-4 snackbar-style ${
        variant === "success" ? "success-style" : "error-style"
      }`}
      id={show ? "show" : "hide"}
    >
      {variant === "success" ? (
        <CheckCircle color="green" size={"24px"} />
      ) : (
        <ExclamationCircle color="red" size={"24px"}/>
      )}
      <p className="text-notif align-items-center py-5 my-5">
        {variant === "success"
          ? `${getActionMessage()} Successfully`
          : "Error, Data couldn't be processed"}
      </p>
    </div>
  );
});

export default Snackbar;
