import React from "react";

import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

import CustomizedProgressBar from "../UI/progress-bar/progress-bar.component";

import {
  PrimaryText,
  StyledButton,
  StyledTableCell,
  StyledTableContainer,
  StyledTableRow,
} from "./table-for-uploaded-file.styles";

const TableForUploadedFile = ({ fileName, fileStatus }) => {
  return (
    <StyledTableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell width="40%" align="left">
              File Name
            </StyledTableCell>
            <StyledTableCell width="30%" align="left">
              File Status
            </StyledTableCell>
            <StyledTableCell width="30%" align="left">
              Output
            </StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <StyledTableRow>
            <StyledTableCell width="40%" align="left">
              <PrimaryText>{fileName}</PrimaryText>
            </StyledTableCell>
            <StyledTableCell width="30%" align="left">
              <CustomizedProgressBar status={fileStatus} />
            </StyledTableCell>
            <StyledTableCell width="30%" align="left">
              <StyledButton
                variant="contained"
                startIcon={<FileDownloadOutlinedIcon />}
                disabled={fileStatus !== "success"}
              >
                Download
              </StyledButton>
            </StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default TableForUploadedFile;
