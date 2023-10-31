import React from "react";

import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";

import { ModalContent, StyledModal } from "./custom-modal.styles";

const CustomModal = ({ open, onClose, children, ...props }) => {
  return (
    <StyledModal
      {...props}
      open={open}
      onClose={onClose}
      closeAfterTransition
      disableScrollLock
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <ModalContent>{children}</ModalContent>
      </Fade>
    </StyledModal>
  );
};

export default CustomModal;
