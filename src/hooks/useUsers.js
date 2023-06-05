import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFilter,
  selectPage,
  selectUsers,
} from 'store/users/usersSelectors';
import { fetchTweets } from 'store/users/usersOperations';
// import { incrementPage } from 'store/users/usersSlice';
import {
  selectFollowersIds,
  selectIsFollowing,
} from 'store/tweets/tweetSelectors';
import { setFilter } from 'store/users/usersSlice';

export const useUsers = () => {
  const users = useSelector(selectUsers);
  const page = useSelector(selectPage);
  const filter = useSelector(selectFilter);
  const isFollowing = useSelector(selectIsFollowing);
  const followerIds = useSelector(selectFollowersIds);
  const dispatch = useDispatch();

  const fetchUsers = useCallback(() => {
    dispatch(fetchTweets(page));
  }, [dispatch, page]);

  const loadMore = useCallback(() => {
    dispatch(fetchTweets());
  }, [dispatch]);

  const handleFilterChange = useCallback(
    selectedOption => {
      dispatch(setFilter(selectedOption));
    },
    [dispatch]
  );

  return {
    users,
    page,
    filter,
    isFollowing,
    followerIds,
    fetchUsers,
    loadMore,
    handleFilterChange,
  };
};
