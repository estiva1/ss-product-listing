import React from "react";
import { StyledDrawer } from "./top-drawer.styles";

const TemporaryDrawer = ({ open, onClose, hideBottomBorder, children }) => {
  return (
    <StyledDrawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        scroll: "body",
      }}
      hideBottomBorder={hideBottomBorder}
    >
      {children}
    </StyledDrawer>
  );
};

export default TemporaryDrawer;
