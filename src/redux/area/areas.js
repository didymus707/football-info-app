import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import client from '../../service/client';

export const fetchCompetitions = createAsyncThunk('competition/fetchCompetitions', async (url) => {
  const response = await client(url);
  console.log(response);
  return response;
});

const areasAdapter = createEntityAdapter({
  selectId: (area) => area.id,
});

const initialState = areasAdapter.getInitialState();

const areasSlice = createSlice({
  name: 'areas',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchareas.fulfilled, (state, action) => {
        areasAdapter.setAll(state, action.payload.areas);
      });
  },
});

export default areasSlice.reducer;

export const {
  selectAll: selectAllAreas,
  selectById: selectAreaById,
  selectIds: selectAreaIds,
  // Pass in a selector that returns the areas slice of state
} = areasAdapter.getSelectors((state) => state.areas);
