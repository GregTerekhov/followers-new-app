export const selectUsers = state => state.users.items;
export const selectPage = state => state.users.page;
export const selectFilter = state => state.users.filter;
// export const selectFilteredUsers = state => {
//   const filter = state.filter;
//   const items = state.items;

//   if (filter === 'showAll') {
//     return items;
//   }

//   if (filter === 'Follow') {
//     return items.filter(item => !state.followersIds.includes(item.id));
//   }

//   if (filter === 'Following') {
//     return items.filter(item => state.followersIds.includes(item.id));
//   }

//   return items;
// };
