import PropTypes from 'prop-types';

export default function FriendListItem(props) {
  const { avatar, name, isOnline } = props;
  return (
    <li>
      <span>{isOnline}</span>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </li>
  );
}
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};
