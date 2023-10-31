import React from "react";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";

import { ChipLabel, ChipValue, StyledChip } from "./deletable-chip.styles";

const ChipText = ({ value = "N/A", filterType = "N/A" }) => {
  return (
    <ChipLabel>
      {filterType}:&nbsp;<ChipValue>{value}</ChipValue>
    </ChipLabel>
  );
};

const DeletableChip = ({ value, filterType, onDelete, clearInput }) => {
  const handleClick = () => {
    console.info("You clicked the Chip");
  };

  const handleDelete = () => {
    onDelete();
    clearInput();
  };

  return (
    <StyledChip
      label={<ChipText value={value} filterType={filterType} />}
      variant="outlined"
      onClick={handleClick}
      onDelete={handleDelete}
      deleteIcon={<HighlightOffOutlinedIcon />}
    />
  );
};

export default DeletableChip;
