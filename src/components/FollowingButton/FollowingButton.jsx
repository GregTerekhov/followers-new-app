import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { follow, unfollow } from 'store/tweets/tweetSlice';
import { updateFollowers } from 'store/users/usersOperations';
import { useUsers } from 'hooks/useUsers';
import { FollowingBtn } from 'styles/button.styled';

const FollowingButton = ({ id, followers }) => {
  const { followerIds } = useUsers();
  const dispatch = useDispatch();

  const followedUser = id => followerIds.indexOf(id) !== -1;
  const following = followedUser(id);

  const handleFollowClick = () => {
    const toggleFollowing = following ? followers - 1 : followers + 1;
    const updatedFollower = { id, followers: toggleFollowing };

    dispatch(updateFollowers(updatedFollower));

    if (!following) {
      dispatch(follow(id));
    } else {
      dispatch(unfollow(id));
    }
  };
  return (
    <FollowingBtn
      type="submit"
      following={following}
      onClick={handleFollowClick}
      style={{ backgroundColor: following ? '#5cd3a8' : '#ebd8ff' }}
    >
      {following ? 'Following' : 'Follow'}
    </FollowingBtn>
  );
};

export default FollowingButton;

FollowingButton.propTypes = {
  id: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
};
