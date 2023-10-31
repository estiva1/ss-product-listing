import React, { useState } from "react";
import { Divider, Stack } from "@mui/material";

import GlowingBox from "../UI/glowing-box/glowing-box.component";
import Button, { BUTTON_TYPE_CLASSES, Ripple } from "../UI/buttons/regular-button/regular-button.component";

import { ReactComponent as FolderIcon } from "../../assets/folder-icon.svg";
import TableForUploadedFile from "../table-for-uploaded-file/table-for-uploaded-file.component";

import {
  CloudUploaded,
  CloudUploading,
  PrimaryText,
  StyledUploadContainer,
  TooltipBottom,
  TooltipTop,
} from "./file-uploader.styles";

const FileUploader = () => {
  const fileName = "CSV_Data_2023_5_22 14.csv";

  const [status, setStatus] = useState("not selected");

  const handleFileUploading = () => {
    setStatus("uploading");
    setTimeout(() => {
      setStatus("uploaded");
    }, 2000);
  };
  return (
    <>
      <GlowingBox label="Upload File for Manual Price">
        <StyledUploadContainer>
          {(() => {
            switch (status) {
              case "not selected":
                return (
                  <>
                    <Stack spacing="4px" alignItems="center" marginBottom="16px">
                      <FolderIcon />
                      <TooltipTop>
                        Drag file here to upload, or click to browse. Only CSV files are supported
                      </TooltipTop>
                    </Stack>
                    <Stack spacing="16px" justifyContent="center" margin="auto" maxWidth="fit-content">
                      <Divider sx={{ width: "100%" }}>OR</Divider>
                      <Button
                        type="button"
                        buttonType={BUTTON_TYPE_CLASSES.white}
                        padding="8px 24px"
                        onClick={handleFileUploading}
                      >
                        Upload File (click me)
                        <Ripple color="#1565D8" />
                      </Button>
                      <TooltipBottom>You can skip uploading file here and set Manual Price Later</TooltipBottom>
                    </Stack>
                  </>
                );
              case "uploading":
                return (
                  <Stack spacing="16px" alignItems="center">
                    <PrimaryText>Your File is Uploading</PrimaryText>
                    <CloudUploading />
                    <TooltipTop>It won't take more than two minutes</TooltipTop>
                  </Stack>
                );
              case "uploaded":
                return (
                  <Stack spacing="16px" alignItems="center">
                    <PrimaryText style={{ color: "#009C34" }}>Your File Successfully Uploaded!</PrimaryText>
                    <CloudUploaded />
                    <TooltipTop>{fileName}</TooltipTop>
                  </Stack>
                );

              default:
                return null;
            }
          })()}
        </StyledUploadContainer>
      </GlowingBox>

      {status === "uploaded" ? (
        <TableForUploadedFile style={{ marginTop: "16px" }} fileName={fileName} fileStatus="success" />
      ) : null}
    </>
  );
};

export default FileUploader;
