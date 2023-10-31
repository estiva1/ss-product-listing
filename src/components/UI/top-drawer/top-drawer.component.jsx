import React from "react";
import { StyledDrawer } from "./top-drawer.styles";

const TemporaryDrawer = ({ open, onClose, children }) => {
  return (
    <StyledDrawer anchor="top" open={open} onClose={onClose}>
      {children}
    </StyledDrawer>
  );
};

export default TemporaryDrawer;
