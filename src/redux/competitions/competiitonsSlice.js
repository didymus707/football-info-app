/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable quotes */
/* eslint-disable max-len */
/* eslint-disable arrow-parens */
/* eslint-disable brace-style */
/* eslint-disable no-debugger */
/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import client from "../../service/client";

const codes = [
  "ENG",
  "ESP",
  "ITA",
  "DEU",
  "FRA",
  "NLD",
  "PRT",
  "CL",
  "SAM",
  "BRA",
  "INT",
];
const finArr = {
  ENG: [],
  ESP: [],
  ITA: [],
  DEU: [],
  NLD: [],
  PRT: [],
  EUR: [],
  BRA: [],
  SAM: [],
};

export const fetchCompetitions = createAsyncThunk(
  "competition/fetchCompetitions",
  async (url) => {
    const response = await client(url);
    return response;
  }
);

const initialState = {
  leagues: [],
  status: "idle",
  error: null,
};

const competitionsSlice = createSlice({
  name: "competitions",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCompetitions.fulfilled, (state, action) => {
      const areas = action.payload.competitions.filter(
        (competition) => competition.plan === "TIER_ONE"
      );
      const arrange = areas.filter(
        (comp) =>
          codes.includes(comp.area.countryCode) || codes.includes(comp.code)
      );
      const prefSort = arrange.reduce((acc, cur) => {
        if (acc[cur.area.countryCode]) {
          acc = {
            ...acc,
            [cur.area.countryCode]: [...acc[cur.area.countryCode], cur],
          };
          acc[cur.area.countryCode].sort((a, b) => b.id - a.id);
        }
        return acc;
      }, finArr);
      state.leagues = prefSort;
    });
  },
});

export default competitionsSlice.reducer;
