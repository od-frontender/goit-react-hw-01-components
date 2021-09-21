import PropTypes from 'prop-types';

export default function FriendList({ children }) {
  return <ul>{children}</ul>;
}
FriendList.propTypes = {
  children: PropTypes.node.isRequired,
};
