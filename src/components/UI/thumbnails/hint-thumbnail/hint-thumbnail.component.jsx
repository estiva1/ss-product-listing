import React from "react";
import { Tooltip } from "@mui/material";
import { HintIcon, StyledThumbnail, ThumbnailText } from "./hint-thumbnail.styles";

const HintThumbnail = ({ value = "N/A", hintText = "Nothing to show" }) => {
  return (
    <StyledThumbnail>
      <ThumbnailText>{value}</ThumbnailText>
      <Tooltip title={hintText} placement="top" followCursor>
        <HintIcon />
      </Tooltip>
    </StyledThumbnail>
  );
};

export default HintThumbnail;
