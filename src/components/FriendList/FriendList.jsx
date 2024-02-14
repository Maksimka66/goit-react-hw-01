import FriendListItem from "../FriendListItem/FriendListItem";
import styles from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.userList}>
      {friends.map((friend) => (
        <div key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </div>
      ))}
    </ul>
  );
};

export default FriendList;
