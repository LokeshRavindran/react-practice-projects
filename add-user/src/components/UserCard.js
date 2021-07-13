import styles from "./UserCard.module.css";

const userCard = (props) => {
  return (
    <li className={styles.card}>
      {props.name} ({props.age} years old)
    </li>
  );
};

export default userCard;
