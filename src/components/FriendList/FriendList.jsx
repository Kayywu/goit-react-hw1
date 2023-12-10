import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import css from './FriendList.module.css';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
    return (
        <>
    <ul className={css["friend-list"]}>
        {friends.map((friend) => (
           <FriendListItem key={friend.id} {...friend} />
        ))}
    </ul>
        </>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        })
    )
};