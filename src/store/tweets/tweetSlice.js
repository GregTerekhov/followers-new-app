import { createSlice } from '@reduxjs/toolkit';

const tweetSlice = createSlice({
  name: 'tweet',
  initialState: {
    followers: 0,
    isFollowing: false,
  },
  reducers: {
    follow: state => {
      state.followers += state.isFollowing ? -1 : 1;
      state.isFollowing = !state.isFollowing;
    },
  },
});

export const { follow } = tweetSlice.actions;
export default tweetSlice.reducer;
