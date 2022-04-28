import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ViewOperations } from "./ViewOperations";
import { getOperations } from "../../Redux/actions/operationsActions";

export const Operations = ({
  modalShow,
  currentPage,
  setCurrentPage,
  setModalShow,
}) => {
  const dispatch = useDispatch();
  const operations = useSelector((state) => state.operations);
  const token = localStorage.getItem("token");
  const userEmail = useSelector((state) => state.user.email);
  const operationFiltered = useSelector((state) => state.operationFiltered);

  useEffect(() => {
    if (token) {
      dispatch(getOperations(userEmail));
    }
  }, [dispatch, token, userEmail]);

  return (
    <div data-testid="test-id-products">
      <ViewOperations
        operationFiltered={operationFiltered}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        operations={operations}
        modalShow={modalShow}
        setModalShow={setModalShow}
      />
    </div>
  );
};
