import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFilteredUsers,
  selectPage,
  selectUsers,
} from 'store/users/usersSelectors';
import { fetchTweets, updateFollowers } from 'store/users/usersOperations';
import { incrementPage } from 'store/users/usersSlice';

export const useUsers = () => {
  const users = useSelector(selectUsers);
  const page = useSelector(selectPage);
  const filteredUsers = useSelector(selectFilteredUsers);
  const dispatch = useDispatch();

  const fetchUsers = useCallback(
    () => dispatch(fetchTweets(page)),
    [dispatch, page]
  );

  const loadMore = useCallback(() => {
    dispatch(incrementPage());
  }, [dispatch]);

  const followUser = useCallback(
    id => {
      dispatch(updateFollowers(id));
    },
    [dispatch]
  );

  return {
    users,
    filteredUsers,
    fetchUsers,
    loadMore,
    followUser,
  };
};
