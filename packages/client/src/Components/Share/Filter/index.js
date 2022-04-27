import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { filterProductsByType } from "../../../Redux/actions/operationsActions";
import { ViewFilters } from "./ViewFilter";

export const Filter = ({ setCurrentPage }) => {
  const dispatch = useDispatch();

  const [filterType, setFilterType] = useState("");

  const filteringType = (e) => {
    setFilterType(e);
    setCurrentPage(1);
  };

  useEffect(() => {
    dispatch(filterProductsByType(filterType));
  }, [dispatch, filterType]);

  return (
    <div>
      <ViewFilters filteringType={filteringType} />
    </div>
  );
};
