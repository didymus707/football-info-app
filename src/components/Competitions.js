import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCompetitions } from '../redux/competitions/competiitonsSlice';

const Areas = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCompetitions('/competitions'));
  }, []);

  return (
    <div>
      Welcome to React
    </div>
  );
};

export default Areas;
