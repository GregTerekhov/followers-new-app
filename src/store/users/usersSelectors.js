export const selectUsers = state => state.users.items;
export const selectPage = state => state.users.page;
export const selectFilteredUsers = state => {
  const filter = state.users.filter;
  const items = state.users.items;

  if (filter === 'showAll') {
    return items;
  }

  if (filter === 'follow') {
    return items.filter(item => item.followers > 0);
  }

  if (filter === 'followings') {
    return items.filter(item => item.followers < 0);
  }
  return items;
};
