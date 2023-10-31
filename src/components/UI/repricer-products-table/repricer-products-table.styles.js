import styled, { css } from "styled-components";
import { styled as mStyled } from "@mui/material/styles";
import { TableCell, TableContainer, Tooltip, tableCellClasses, tooltipClasses } from "@mui/material";

export const StyledTableContainer = mStyled(TableContainer)(() => ({
  "&::-webkit-scrollbar": {
    height: " 0.5em",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "transparent",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundCcolor: "transparent",
    " &:hover": {
      backgroundColor: "hsl(0, 0%, 81.2%)",
    },
  },
  "&:hover::-webkit-scrollbar-thumb": {
    backgroundColor: "hsl(0, 0%, 81.2%)",
  },
}));

export const StyledTableCell = mStyled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#F8FAFB",
    border: "none",
    borderBottom: "1px solid #000",
    color: "#4E5969",
    fontFamily: "Titillium Web",
    fontSize: "0.75rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "1rem",
    letterSpacing: "0.00375rem",
    padding: "7px 20px 7px 0px",
    "&:first-child": {
      // checkboxes padding is 9px
      paddingLeft: "11px",
      paddingRight: "3px",
    },

    "& .MuiTableSortLabel-root": {
      "&:hover": {
        color: "#4E5969",
      },
    },
    "& .MuiTableSortLabel-root.Mui-active": {
      color: "#1565D8", // delete or comment this rule to disable active head cell name highlighting
      "& .MuiTableSortLabel-icon": {
        color: "#1565D8",
      },
    },
    "& .MuiTableSortLabel-icon": {
      color: "#1565D8",
    },
  },
  [`&.${tableCellClasses.body}`]: {
    position: "relative",
    borderColor: "#EEF1F5",
    fontFamily: "Titillium Web",
    height: "70px", // minHeight is 67px
    padding: "7px 20px 7px 0px",
    "&:first-child": {
      // checkboxes padding is 9px
      paddingLeft: "11px",
      paddingRight: "3px",
    },
  },
}));

export const ItemImage = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: attr(width) / attr(height);
`;

const applyClampStyles = (props) => {
  if (props.clamp) {
    return css`
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
    `;
  }
  return "";
};

export const PrimaryText = styled.h3`
  color: #4e5969;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem;
  margin: 0;
`;

export const PrimaryTextBold = styled(PrimaryText)`
  font-weight: 700;
`;

export const PrimaryTextHighlighted = styled(PrimaryText)`
  color: #1565d8;
  ${applyClampStyles}
`;

export const SecondaryText = styled.h4`
  color: #979797;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem;
  margin: 0;
`;

export const SmallText = styled.h4`
  color: ${({ difference }) => (difference > 0 ? "#009C34" : difference < 0 ? "#CF0909" : "#4e5969")};
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0.625rem;
  margin: 0;

  ${applyClampStyles}
`;

export const SmallTextBold = styled(SmallText)`
  font-weight: 600;
`;

export const EditButton = styled.button`
  color: #00a3ff;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0.625rem;
  margin: 0;
  padding: 0;
  width: max-content;
  text-decoration: underline;
  background: none;
  border: none;
  cursor: pointer;
`;

export const LightTooltip = styled(({ className, ...props }) => <Tooltip {...props} classes={{ popper: className }} />)(
  () => ({
    [`& .${tooltipClasses.tooltip}`]: {
      fontFamily: "Titillium Web",
      backgroundColor: "#fff",
      border: "1px solid #e6e6e6",
      borderRadius: "16px",
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: "none",
      fontSize: 11,
    },
  })
);

export const QtyContainer = styled.div`
  width: 260px;
  padding: 8px;
  background: #fff;
`;

export const Trophy = styled.span`
  min-width: 11px;
  min-height: 12px;
  width: 11px;
  height: 12px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${() =>
    `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='11' height='12' fill='none'%3e%3cpath fill='%23FFB500' d='M6.289 9.217H3.828a.321.321 0 0 1-.226-.097.358.358 0 0 1-.022-.476.325.325 0 0 1 .216-.118c.136-.013.23-.306.273-.575.05-.379.06-.762.03-1.143a.359.359 0 0 1 .116-.287.335.335 0 0 1 .295-.074 2.47 2.47 0 0 0 1.098 0 .325.325 0 0 1 .294.072.359.359 0 0 1 .118.287c-.066 1.039.105 1.702.3 1.721a.325.325 0 0 1 .217.12.358.358 0 0 1-.022.475.321.321 0 0 1-.226.096v-.001Z'/%3e%3cpath fill='%23FF7403' d='M6.33 8.527c-.195-.02-.366-.682-.3-1.72a.358.358 0 0 0-.118-.288.335.335 0 0 0-.294-.072 2.34 2.34 0 0 1-.548.062V9.22H6.3a.321.321 0 0 0 .226-.096.358.358 0 0 0 .022-.476.325.325 0 0 0-.217-.119v-.002Z'/%3e%3cpath fill='%23FFC12E' d='M3.046 6.194a.327.327 0 0 1-.197-.067l-.926-.691a4.732 4.732 0 0 1-1.41-1.702A4.99 4.99 0 0 1 0 1.542V1.51a.365.365 0 0 1 .1-.246.332.332 0 0 1 .238-.1H2.08a.32.32 0 0 1 .233.102.355.355 0 0 1 .097.244c0 .092-.035.18-.097.245a.322.322 0 0 1-.233.102H.68c.047.598.218 1.178.5 1.7.283.52.67.97 1.137 1.318l.925.691a.336.336 0 0 1 .135.226.36.36 0 0 1-.06.258.342.342 0 0 1-.12.106.324.324 0 0 1-.152.038Z'/%3e%3cpath fill='%23FF7403' d='M7.08 6.193a.324.324 0 0 1-.152-.037.342.342 0 0 1-.175-.229.36.36 0 0 1 .041-.262.335.335 0 0 1 .09-.099l.927-.692a4.044 4.044 0 0 0 1.137-1.318 4.26 4.26 0 0 0 .501-1.7H8.03a.322.322 0 0 1-.234-.1.355.355 0 0 1-.096-.246c0-.091.034-.18.096-.244a.322.322 0 0 1 .233-.102h1.769a.319.319 0 0 1 .237.1.352.352 0 0 1 .1.246v.028a4.991 4.991 0 0 1-.514 2.194 4.73 4.73 0 0 1-1.414 1.702l-.926.693a.326.326 0 0 1-.2.066Z'/%3e%3cpath fill='%23FFE645' d='M5.053 7.208a2.69 2.69 0 0 1-1.688-.558A2.924 2.924 0 0 1 2.34 5.135a12.292 12.292 0 0 1-.586-3.386A8.729 8.729 0 0 0 1.641.678a.333.333 0 0 1-.156-.126.359.359 0 0 1-.061-.197h7.264a.36.36 0 0 1-.066.206.331.331 0 0 1-.168.124 8.297 8.297 0 0 0-.125 1.123 12.186 12.186 0 0 1-.585 3.36 2.895 2.895 0 0 1-1.02 1.493 2.665 2.665 0 0 1-1.67.547Z'/%3e%3cpath fill='%23FFC12E' d='M5.07 7.208a2.665 2.665 0 0 0 1.668-.548 2.896 2.896 0 0 0 1.019-1.492c.35-1.084.548-2.216.584-3.36.017-.377.059-.752.126-1.123a.33.33 0 0 0 .168-.124.359.359 0 0 0 .066-.206H5.07v6.853Z'/%3e%3cpath fill='%23FFC12E' d='M8.793.697H1.341a.319.319 0 0 1-.237-.1.351.351 0 0 1-.073-.38.351.351 0 0 1 .182-.188.319.319 0 0 1 .128-.025h7.452a.319.319 0 0 1 .238.1.35.35 0 0 1 .1.246.365.365 0 0 1-.1.247.332.332 0 0 1-.238.1Z'/%3e%3cpath fill='%23FF9300' d='M8.777.004H5.053v.693h3.724a.319.319 0 0 0 .237-.1.351.351 0 0 0 .074-.38.351.351 0 0 0-.183-.188.319.319 0 0 0-.128-.025Z'/%3e%3cpath fill='%23FFE645' d='M6.813 10.428h-3.53a.317.317 0 0 1-.237-.1.352.352 0 0 1-.1-.246v-.754a.838.838 0 0 1 .233-.575.759.759 0 0 1 .55-.233h2.634a.759.759 0 0 1 .551.233c.147.152.23.358.233.575v.754c0 .092-.036.18-.099.245a.325.325 0 0 1-.235.101Z'/%3e%3cpath fill='%23FFC12E' d='M6.385 8.52H5.07v1.908h1.764a.319.319 0 0 0 .237-.1.35.35 0 0 0 .1-.246v-.754a.838.838 0 0 0-.234-.575.759.759 0 0 0-.552-.233Z'/%3e%3cpath fill='%23FF3D4A' d='M7.87 11.828H2.252a.319.319 0 0 1-.238-.1.35.35 0 0 1-.1-.246v-1.386a.365.365 0 0 1 .1-.246.332.332 0 0 1 .238-.1H7.87a.319.319 0 0 1 .237.1.351.351 0 0 1 .1.246v1.386a.365.365 0 0 1-.1.247.33.33 0 0 1-.237.1Z'/%3e%3cpath fill='%23C20020' d='M7.878 9.75H5.07v2.078h2.808a.32.32 0 0 0 .237-.1.35.35 0 0 0 .1-.246v-1.383a.365.365 0 0 0-.1-.249.332.332 0 0 0-.237-.1Z'/%3e%3c/svg%3e")`};
`;
