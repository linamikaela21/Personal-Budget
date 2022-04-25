import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Operations } from '../Components/Operations';

export const RouterWeb = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Operations />} />
    </Routes>
  );
};
