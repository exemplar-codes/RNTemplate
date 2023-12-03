import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
  data: {name: 'Sanjar'},
};

const miscSlice = createSlice({
  name: 'misc',
  initialState,
  reducers: {
    setMiscData(state, action) {
      state.data = action.payload;
    },
    resetMisc(state) {
      state = initialState;
    },
  },
});

export const sampleApiCall = createAsyncThunk(
  'misc/sampleApiCall',
  async (_, {dispatch}) => {
    dispatch(setLoading(true));
    try {
      const resp = await fetch('https://api.github.com/users/sanjarcode');
      const data = await resp.json();
      dispatch(setData(data));
    } catch (error) {
      dispatch(setError(error));
    } finally {
      dispatch(setLoading(false));
    }
  },
);

export const {setMiscData, resetMisc} = miscSlice.actions;
export default miscSlice.reducer;
