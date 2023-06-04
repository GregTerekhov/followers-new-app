import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useUsers } from 'hooks/useUsers';
import { selectFilteredUsers } from 'store/users/usersSelectors';
import TweetItem from 'components/TweetItem/TweetItem.jsx';
import {
  GoBackBtn,
  LoadMoreBtn,
  NoTweetsMessage,
  TweetsList,
  TweetsWrapper,
} from './Tweets.styled';

const Tweets = () => {
  const { loadMore, fetchUsers, users } = useUsers();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const filteredUsers = useSelector(selectFilteredUsers);
  const showNoTweetsMessage = filteredUsers.length === 0;

  useEffect(() => {
    fetchUsers();
    return () => {
      fetchUsers([]);
    };
  }, [fetchUsers]);

  return (
    <TweetsWrapper>
      <GoBackBtn to={backLinkLocationRef.current}>Go back</GoBackBtn>
      {showNoTweetsMessage ? (
        <NoTweetsMessage>
          Sorry, no tweets for your request.
          <br /> Try again
        </NoTweetsMessage>
      ) : (
        <TweetsList>
          {users &&
            users.map(({ user, tweets, followers, avatar }, index) => (
              <TweetItem
                key={index}
                user={user}
                tweets={tweets}
                followers={followers}
                avatar={avatar}
              />
            ))}
        </TweetsList>
      )}
      {!showNoTweetsMessage && (
        <LoadMoreBtn type="button" onClick={loadMore}>
          Load more
        </LoadMoreBtn>
      )}
    </TweetsWrapper>
  );
};

export default Tweets;
