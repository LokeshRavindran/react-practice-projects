import styles from "./OutputBox.module.css";
import UserCard from "./UserCard";

const OutputBox = (props) => {
  const users = props.userData.map((user, index) => (
    <UserCard key={index} name={user.username} age={user.age}></UserCard>
  ));
  return <ul className={styles["output-box"]}>{users}</ul>;
};

export default OutputBox;
