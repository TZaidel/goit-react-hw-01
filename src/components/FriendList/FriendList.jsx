import clsx from "clsx"
import css from "./FriendList.module.css" 
function FriendList({ friends }) {
    return (
        <ul className={[css['friend-list']]}>
            {friends.map(({id, ...friend}) => (
                <li className={css.friendItem} key={id}>
                    <FriendsListItem {...friend} />
                </li>
            ))}
        </ul>
    )
}

function FriendsListItem({ avatar, name, isOnline }) {
    const activeClass = clsx(css.status, {
        [css.online]: isOnline,
        [css.offline]: !isOnline,
    })
    // if (isOnline) {
    //     activeClass.push('online')
    // } else {
    //     activeClass.push('offline')
    // }
    // console.log(activeClass.join(' '))
    return (
        <div className={css.item}>
            <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
            <p className={css.name}>{name}</p>
            <p className={activeClass}>{isOnline ? "Online" : "Offline"}</p>
        </div>
    ) 
}

export default FriendList