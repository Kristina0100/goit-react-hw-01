import styles from "./FriendListItem.module.css"

const FriendListItem = (props) => {
  const { avatar, name, isOnline } = props;
    return (
        <div>
  <img src={avatar} alt="Avatar" width="48" />
  <p className={styles.name}>{name}</p>
  <p className={`${styles.status} ${isOnline ? styles.online : styles.offline}`}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
</div>
  )
}

export default FriendListItem