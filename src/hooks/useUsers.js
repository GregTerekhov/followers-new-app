import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter, selectUsers } from 'store/users/usersSelectors';
import { fetchTweets } from 'store/users/usersOperations';
import { clearUsers, incrementPage, setFilter } from 'store/users/usersSlice';
import {
  selectFollowersIds,
  selectIsFollowing,
} from 'store/tweets/tweetSelectors';

export const useUsers = () => {
  const users = useSelector(selectUsers);
  const filter = useSelector(selectFilter);
  const isFollowing = useSelector(selectIsFollowing);
  const followerIds = useSelector(selectFollowersIds);
  const dispatch = useDispatch();

  const clear = useCallback(() => {
    dispatch(clearUsers());
  }, [dispatch]);

  const fetchUsers = useCallback(
    page => {
      dispatch(fetchTweets(page));
    },
    [dispatch]
  );

  const loadMore = useCallback(() => {
    dispatch(incrementPage());
  }, [dispatch]);

  const handleFilterChange = useCallback(
    selectedOption => {
      dispatch(setFilter(selectedOption));
    },
    [dispatch]
  );

  return {
    users,
    filter,
    isFollowing,
    followerIds,
    clear,
    fetchUsers,
    loadMore,
    handleFilterChange,
  };
};
