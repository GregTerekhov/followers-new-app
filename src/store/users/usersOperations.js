import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6479a034a455e257fa6371cc.mockapi.io';

export const fetchTweets = createAsyncThunk(
  'users/fetchTweets',
  async (page, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/users', {
        params: {
          page: page,
          limit: 12,
        },
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateFollowers = createAsyncThunk(
  'users/updateFollowers',
  async ({ usersId, users }, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(`/users/${usersId}`, users);
      console.log(data.followers);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
