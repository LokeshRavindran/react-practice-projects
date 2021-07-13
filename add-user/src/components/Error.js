import styles from "./Error.module.css";
import Button from "./UI/Button";

import ReactDOM from "react-dom";
import React from "react";

const BackDrop = (props) => {
  return <div className={styles.background}></div>;
};

const ErrorPopUp = (props) => {
  return (
    <div className={styles.error}>
      <header className={styles.header}>
        <h2>Invalid input</h2>
      </header>
      <section className={styles.section}>
        <p>{props.errorMessage}</p>
      </section>
      <footer className={styles.footer}>
        <Button
          onClick={props.popupClose}
          content="close"
          type="button"
        ></Button>
      </footer>
    </div>
  );
};

const Error = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackDrop />,
        document.getElementById("back-drop")
      )}
      {ReactDOM.createPortal(
        <ErrorPopUp
          errorMessage={props.errorMessage}
          popupClose={props.popupClose}
        />,
        document.getElementById("error-popup")
      )}
    </React.Fragment>
  );
};

export default Error;
