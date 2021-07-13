import { useState } from "react";
import styles from "./App.module.css";

import AddUserForm from "./components/AddUserForm";
import OutputBox from "./components/OutputBox";
import Error from "./components/Error";

const App = () => {
  let data = [
    {
      username: "loki",
      age: 26,
    },
    {
      username: "kishan",
      age: 24,
    },
  ];
  // data = [];

  //states
  const [user, updateUser] = useState(data);
  const [error, updateError] = useState("");

  const userDataHandler = (enteredValue) => {
    if (enteredValue.age < 0) {
      updateError("Please enter a valid age (age > 0)");
    } else if (
      enteredValue.username.trim().length === "" ||
      enteredValue.age === 0
    ) {
      updateError("Please enter a valid name and age (non-empty values)");
    } else {
      updateUser((previousValues) => {
        return [...previousValues, enteredValue];
      });
    }
  };

  const errorHandler = () => {
    updateError("");
  };

  return (
    <div className={styles.app}>
      {error !== "" && (
        <Error errorMessage={error} popupClose={errorHandler}></Error>
      )}

      <AddUserForm user={userDataHandler}></AddUserForm>
      {user.length > 0 && <OutputBox userData={user}></OutputBox>}
    </div>
  );
};

export default App;
