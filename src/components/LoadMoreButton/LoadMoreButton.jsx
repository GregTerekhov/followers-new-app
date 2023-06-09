import { useUsers } from 'hooks/useUsers';
import { useEffect, useState } from 'react';
import { LoadMoreBtn } from 'styles/button.styled';
import { LoadingMoreIcon } from './loadMoreButton.styled';

const LoadMoreButton = () => {
  const { fetchUsers } = useUsers();
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchUsers(page);
  }, [fetchUsers, page]);

  return (
    <LoadMoreBtn type="button" onClick={() => setPage(page => page + 1)}>
      Load more
      <LoadingMoreIcon />
    </LoadMoreBtn>
  );
};

export default LoadMoreButton;
