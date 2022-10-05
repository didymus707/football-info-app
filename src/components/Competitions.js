/* eslint-disable no-restricted-syntax */
/* eslint-disable array-callback-return */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompetitions } from "../redux/competitions/competiitonsSlice";

const Competitions = () => {
  const dispatch = useDispatch();
  const { leagues, status } = useSelector((state) => state.competitions);
  console.log("leagues", { leagues, status });
  const keys = Object.keys(leagues);
  let countries = [];
  for (const key of keys) {
    const parents = leagues[key].map((obj) => obj.area.name);
    countries = [...countries, ...parents];
  }

  const eachCountry = [...new Set(countries)]

  console.log("countries", eachCountry);

  useEffect(() => {
    dispatch(fetchCompetitions("/competitions"));
  }, []);

  return <div>Welcome to Competitions</div>;
};

export default Competitions;
