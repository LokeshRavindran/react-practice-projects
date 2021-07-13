import styles from "./AddUserForm.module.css";

import Button from "./UI/Button";
import React, { useState } from "react";

const AddUserForm = (props) => {
  const [enteredUsername, updateUsername] = useState("");
  const [enteredAge, updateAge] = useState("");
  const usernameHandler = (e) => {
    updateUsername(e.target.value);
  };

  const ageHandler = (e) => {
    updateAge(e.target.value);
  };

  const formSubmitHandler = (e) => {
    const userData = {
      username: enteredUsername,
      age: +enteredAge,
    };
    props.user(userData);
    updateUsername("");
    updateAge("");
    e.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={formSubmitHandler}>
      <div className={styles["form-elements"]}>
        <label>Username</label>
        <input
          type="text"
          onChange={usernameHandler}
          value={enteredUsername}
        ></input>
      </div>
      <div className={styles["form-elements"]}>
        <label>Age (Years)</label>
        <input type="number" onChange={ageHandler} value={enteredAge}></input>
      </div>
      <div className={styles["form-elements"]}>
        <Button type="submit" content="Add User"></Button>
      </div>
    </form>
  );
};

export default AddUserForm;
