import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import client from '../../service/client';

export const fetchCompetitions = createAsyncThunk('competition/fetchCompetitions', async (url) => {
  const response = await client(url);
  return response;
});

const competitionsAdapter = createEntityAdapter({
  selectId: (competition) => competition.id,
});

const initialState = competitionsAdapter.getInitialState({
  status: 'idle',
  error: null,
});

const competitionsSlice = createSlice({
  name: 'competitions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompetitions.fulfilled, (state, action) => {
        const areas = action.payload.competitions.filter(
          (competition) => competition.plan === 'TIER_ONE',
        );
        competitionsAdapter.setAll(state, areas);
      });
  },
});

export default competitionsSlice.reducer;

export const {
  selectAll: selectAllCompetitions,
  selectById: selectCompetitionById,
  selectIds: selectCompetitionIds,
  // Pass in a selector that returns the competitions slice of state
} = competitionsAdapter.getSelectors((state) => state.competitions);
