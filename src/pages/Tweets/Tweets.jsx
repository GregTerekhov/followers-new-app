import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useUsers } from 'hooks/useUsers';
import { TweetItem } from 'components';
import { NoTweetsMessage, TweetsList, TweetsWrapper } from './Tweets.styled';
import { GoBackBtn, LoadMoreBtn } from 'styles/Button.styled';

const Tweets = () => {
  const { fetchUsers, users, clear, isLoading, filter, followerIds } =
    useUsers();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

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

  const filteredUsers = filterUsers();
  const showNoTweetsMessage = filteredUsers.length === 0 && !isLoading;

  useEffect(() => {
    return () => {
      clear();
    };
  }, [clear]);

  useEffect(() => {
    fetchUsers(page);
  }, [fetchUsers, page]);

  return (
    <>
      <Helmet>
        <title>Your tweetbook</title>
      </Helmet>
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
    </>
  );
};

export default Tweets;
