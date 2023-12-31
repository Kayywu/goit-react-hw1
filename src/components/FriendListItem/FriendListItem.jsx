import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ id, avatar, name, isOnline }) => {
    const statusOnline = isOnline? css.online : css.offline;
    

    return (
        <>
        <li className={css.item}>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
        <span className={`${css.status} ${statusOnline} ${css.dot}`} ></span>
      </li>
      </>
    );
   
    
};

FriendListItem.propTypes = {
    id: PropTypes.number,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  };