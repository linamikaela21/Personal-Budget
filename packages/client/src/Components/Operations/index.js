import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { ViewOperations } from './ViewOperations';
import { getOperations } from '../../Redux/actions/operationsActions';

export const Operations = () => {
  const dispatch = useDispatch()
  const operations = useSelector((state) => state.operations);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getOperations())
  }, [dispatch])
  
  return (
    <div data-testid="test-id-products">
      <ViewOperations
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        operations={operations}
      />
    </div>
  );
};
