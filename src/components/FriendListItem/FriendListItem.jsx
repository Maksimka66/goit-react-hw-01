import styles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={styles.userInfo}>{name}</p>
      <p className={isOnline ? styles.isOnline : styles.isOffline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </>
  );
};

export default FriendListItem;
