import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ViewOperations } from "./ViewOperations";
import { getOperations } from "../../Redux/actions/operationsActions";
import { Header } from "../Header";

export const Operations = () => {
  const dispatch = useDispatch();
  const operations = useSelector((state) => state.operations);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalShow, setModalShow] = useState(false);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    dispatch(getOperations());
  }, [dispatch]);

  return (
    <div data-testid="test-id-products">
      <Header
        modalShow={modalShow}
        setModalShow={setModalShow}
        update={update}
        setUpdate={setUpdate}
      />
      <ViewOperations
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        operations={operations}
        modalShow={modalShow}
        setModalShow={setModalShow}
        update={update}
        setUpdate={setUpdate}
      />
    </div>
  );
};
