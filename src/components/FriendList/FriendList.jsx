import FriendListItem from '../FriendListItem/FriendListItem'
import styles from "./FriendList.module.css"

const FriendList = ({friends}) => {
  return (
    <ul className={styles.friendsList}>
		  {friends.map(friend => {
		return 	(<li key={friend.id} className={styles.friendItem}>
			<FriendListItem
				name={friend.name}
				avatar={friend.avatar}
				isOnline={friend.isOnline}
	 />
	</li>)
	})}	
</ul>
  )
}

export default FriendList