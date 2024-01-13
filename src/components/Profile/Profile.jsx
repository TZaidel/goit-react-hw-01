import css from "./Profile.module.css";
function Profile({ name, image, stats, location, tag }) {
    return (
        <div className={css.profile}>
            <div className={css.description}>
                <img
                  src={image}
                  alt="User avatar"
                  className={css.avatar}
                />
                <p className={css.name}>{name}</p>
                <p className={css.tag}>@{tag}</p>
                <p className={css.location}>{location}</p>
            </div>

            <ul className={css.stats}>
                <li className={css['stats-item']}>
                  <span>Followers</span>
                  <span className={css.value}>{stats.followers}</span>
                </li>
                <li className={css['stats-item']}>
                  <span>Views</span>
                  <span className={css.value}>{stats.views}</span>
                </li>
                <li className={css['stats-item']}>
                  <span>Likes</span>
                  <span className={css.value}>{stats.likes}</span>
                </li>
            </ul>
            <div>
            </div>
        </div>

    )
}

export default Profile