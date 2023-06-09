import PropTypes from 'prop-types';
import { TweetItem } from 'components';
import { ListWrapper } from './tweetsList.styled';

const TweetsList = ({ filteredUsers }) => {
  return (
    <ListWrapper>
      {filteredUsers &&
        filteredUsers.map(({ id, user, tweets, followers, avatar }, index) => (
          <TweetItem
            key={index}
            id={id}
            user={user}
            tweets={tweets}
            followers={followers}
            avatar={avatar}
          />
        ))}
    </ListWrapper>
  );
};

export default TweetsList;

TweetsList.propTypes = {
  filteredUsers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
      tweets: PropTypes.number.isRequired,
      followers: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
