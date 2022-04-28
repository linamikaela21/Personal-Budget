import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login } from '../Components/Login';
import { Operations } from '../Components/Operations';

export const RouterWeb = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Operations />} />
      <Route exact path="/login" element={<Login />} />
    </Routes>
  );
};
