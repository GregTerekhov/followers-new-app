import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useUsers } from 'hooks/useUsers';
import TweetItem from 'components/TweetItem/TweetItem.jsx';
import { NoTweetsMessage, TweetsList, TweetsWrapper } from './Tweets.styled';
import { GoBackBtn, LoadMoreBtn } from 'styles/Button.styled';

const Tweets = () => {
  const { fetchUsers, users, clear, followerIds, filter } = useUsers();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const showNoTweetsMessage = users.length === 0;

  const [page, setPage] = useState(1);

  const filterUsers = () => {
    switch (filter.value) {
      case 'followings':
        return users.filter(user => followerIds.includes(user.id));
      case 'follow':
        return users.filter(user => !followerIds.includes(user.id));
      default:
        return users;
    }
  };

  useEffect(() => {
    return () => {
      clear();
    };
  }, [clear]);

  useEffect(() => {
    fetchUsers(page);
  }, [fetchUsers, clear, page]);

  const filteredUsers = filterUsers();

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
          {filteredUsers &&
            filteredUsers.map(
              ({ id, user, tweets, followers, avatar }, index) => (
                <TweetItem
                  key={index}
                  id={id}
                  user={user}
                  tweets={tweets}
                  followers={followers}
                  avatar={avatar}
                />
              )
            )}
        </TweetsList>
      )}
      {!showNoTweetsMessage && (
        <LoadMoreBtn type="button" onClick={() => setPage(page => page + 1)}>
          Load more
        </LoadMoreBtn>
      )}
    </TweetsWrapper>
  );
};

export default Tweets;
