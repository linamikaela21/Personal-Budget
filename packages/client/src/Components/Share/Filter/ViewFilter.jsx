import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";

export const ViewFilters = ({ filteringType }) => {
  return (
    <div className="d-flex flex-row" data-testid="test-id-view-filters">
      <DropdownButton
        key="type"
        id="type"
        variant={"Primary".toLowerCase()}
        title="Type"
        className="p-2"
        size="lg"
        onSelect={filteringType}
      >
        <Dropdown.Item eventKey="all" className="text-center fw-bolder fs-4 p-1">
          All
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="income" className="text-center fw-bolder fs-4 p-1">
          Income
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item
          eventKey="outflow"
          className="text-center fw-bolder fs-4 p-1"
        >
          Outflow
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
};
