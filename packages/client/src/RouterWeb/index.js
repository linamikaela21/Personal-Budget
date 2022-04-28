import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login } from '../Pages/Login';
import { Home } from '../Pages/Home';

export const RouterWeb = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
    </Routes>
  );
};
