import React from "react";
import { StyledThumbnail, ThumbnailText } from "./multicolor-thumbnail.styles";

const MulticolorThumbnail = ({ status = "N/A", enlarged }) => {
  const COLORS = {
    pending: "#FFCB00",
    error: "#CF0909",
    active: "#009C34",
  };
  const BACKGROUNDS = {
    pending: "#FFCB000D",
    error: "#CF09090D",
    active: "#009C340D",
  };

  const color = COLORS[status] || "#c4c4c4";
  const background = BACKGROUNDS[status] || "#c4c4c40d";
  return (
    <StyledThumbnail enlarged={enlarged} borderColor={color} backgroundColor={background}>
      <ThumbnailText enlarged={enlarged} color={color}>
        {status}
      </ThumbnailText>
    </StyledThumbnail>
  );
};

export default MulticolorThumbnail;
