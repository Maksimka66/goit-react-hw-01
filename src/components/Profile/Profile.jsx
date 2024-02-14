import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div>
      <div>
        <img src={image} alt="User avatar" />
        <p className={styles.firstParagraph}>{name}</p>
        <p className={styles.userInfo}>@{tag}</p>
        <p className={styles.userInfo}>{location}</p>
      </div>

      <ul className={styles.userList}>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
