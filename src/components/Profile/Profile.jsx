import styles from "./Profile.module.css"

const Profile = (props) => {
    const { name, tag, location, image, stats } = props;
  
  return (
   <div className={styles.profileCard}>
      <div className={styles.cardWrap}>
        <div className={styles.circle}>
          <img
      src={image}
      alt="User avatar"
        /></div>
    <p className={styles.nameText}>{name}</p>
    <p className={styles.cardText}>{`@${tag}`}</p>
    <p className={styles.cardLock}>{location}</p>
      </div>
      
      <div className={styles.statsWrap}>
     <ul className={styles.statsList}>
    <li className={styles.statItem}>
      <span className={styles.statName}>Followers </span>
      <span className={styles.statVal}>{stats.followers}</span>
    </li>
    <li className={styles.statItem}>
      <span className={styles.statName}>Views </span>
      <span className={styles.statVal}>{stats.views}</span>
    </li>
    <li className={styles.statItem}>
      <span className={styles.statName}>Likes </span>
      <span className={styles.statVal}>{stats.likes}</span>
    </li>
  </ul></div>
</div>
  )
}

export default Profile;