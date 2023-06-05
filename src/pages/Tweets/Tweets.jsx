import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useUsers } from 'hooks/useUsers';
import TweetItem from 'components/TweetItem/TweetItem.jsx';
import {
  GoBackBtn,
  LoadMoreBtn,
  NoTweetsMessage,
  TweetsList,
  TweetsWrapper,
} from './Tweets.styled';

const Tweets = () => {
  const { loadMore, fetchUsers, users, page } = useUsers();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const showNoTweetsMessage = users.length === 0;

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers, page]);

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
            users.map(({ id, user, tweets, followers, avatar }, index) => (
              <TweetItem
                key={index}
                id={id}
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
