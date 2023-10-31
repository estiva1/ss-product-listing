import React, { useEffect, useState } from "react";

import { Table, TableBody, TableHead, TableRow } from "@mui/material";

import {
  PrimaryText,
  StyledTableCell,
  StyledTableContainer,
  StyledTableRow,
} from "./price-section-updated-table.styles";

const PriceSectionUpdatedTable = ({ data }) => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setTableData(data);
  }, [data]);

  return (
    <StyledTableContainer>
      <Table sx={{ minWidth: 600 }} stickyHeader aria-label="price section updated table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Current</StyledTableCell>
            <StyledTableCell align="left">Change</StyledTableCell>
            <StyledTableCell align="left">New</StyledTableCell>
            <StyledTableCell align="left">Date</StyledTableCell>
            <StyledTableCell align="left">Price Change type</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {tableData.map((rowData, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell align="left">
                <PrimaryText>${rowData.current.toFixed(2)}</PrimaryText>
              </StyledTableCell>
              <StyledTableCell align="left">
                <PrimaryText>${rowData.change.toFixed(2)}</PrimaryText>
              </StyledTableCell>
              <StyledTableCell align="left">
                <PrimaryText>${rowData.new.toFixed(2)}</PrimaryText>
              </StyledTableCell>
              <StyledTableCell align="left">
                <PrimaryText>{rowData.date}</PrimaryText>
              </StyledTableCell>
              <StyledTableCell align="left">
                <PrimaryText>{rowData.priceChangeType}</PrimaryText>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default PriceSectionUpdatedTable;
