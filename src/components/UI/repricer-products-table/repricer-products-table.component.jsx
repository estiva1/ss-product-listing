import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";

import { visuallyHidden } from "@mui/utils";
import { alpha } from "@mui/material/styles";

import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import Table from "@mui/material/Table";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Checkbox from "@mui/material/Checkbox";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import TableSortLabel from "@mui/material/TableSortLabel";
import TablePagination from "@mui/material/TablePagination";

import IconButtonStretched, {
  BUTTON_TYPE_CLASSES,
  Ripple,
} from "../buttons/icon-button-stretched/icon-button-stretched.component";
import RegularSwitch from "../switches/regular-switch/regular-switch.component";
import HintThumbnail from "../thumbnails/hint-thumbnail/hint-thumbnail.component";
import ProductEditUnit from "../../product-edit-unit/product-edit-unit.component";
import MulticolorThumbnail from "../thumbnails/multicolor-thumbnail/multicolor-thumbnail.component";

import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import NorthRoundedIcon from "@mui/icons-material/NorthRounded";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";

import testProductImage from "../../../assets/test-image.png";
import settingsWhiteIcon from "../../../assets/settings-white-icon.svg";

import {
  EditButton,
  ItemImage,
  ItemImageContainer,
  LightTooltip,
  PrimaryText,
  PrimaryTextBold,
  PrimaryTextHighlighted,
  QtyContainer,
  SecondaryText,
  SmallText,
  SmallTextBold,
  StyledTableCell,
  StyledTableContainer,
  Trophy,
} from "./repricer-products-table.styles";

const generateHighlightedText = (text, filterValue) => {
  const lowerText = text.toLowerCase();
  const lowerFilterValue = filterValue.toLowerCase();

  if (!lowerText.includes(lowerFilterValue)) {
    return text;
  }

  const startIndex = lowerText.indexOf(lowerFilterValue);
  const endIndex = startIndex + lowerFilterValue.length;

  return (
    <>
      {text.substring(0, startIndex)}
      <span style={{ backgroundColor: "#1565D8", color: "#fff" }}>{text.substring(startIndex, endIndex)}</span>
      {text.substring(endIndex)}
    </>
  );
};

const getOrdinalSuffix = (number) => {
  const positionNumber = Number(number);

  if (positionNumber >= 11) {
    return "Out of Top 10";
  }

  const suffixes = ["st", "nd", "rd"];
  const suffix = suffixes[positionNumber - 1] || "th";

  if (positionNumber === 1) {
    return (
      <Stack direction="column" gap="2px">
        <Stack direction="row" alignItems="center" gap="4px">
          <Trophy />
          <PrimaryText>{`${positionNumber}${suffix}`}</PrimaryText>
        </Stack>
        <SmallText>(Buybox Winner)</SmallText>
      </Stack>
    );
  }
  return `${positionNumber}${suffix}`;
};

const getMarginDifference = (number) => {
  if (number === undefined || number === null) return;

  const marginDifference = number.toFixed(2);

  return (
    <Stack direction="row" spacing="4px" alignItems="flex-end">
      <SmallText style={{ color: "#979797" }}>
        {`Margin\n${marginDifference > 0 ? "increased" : marginDifference < 0 ? "decreased" : "not changed"}:`}
      </SmallText>
      <Stack direction="row" alignItems="center">
        <SmallTextBold $difference={marginDifference}>{marginDifference}%</SmallTextBold>
        {marginDifference > 0 ? (
          <NorthRoundedIcon
            sx={{
              fontSize: "0.625rem",
            }}
            color="success"
          />
        ) : marginDifference < 0 ? (
          <NorthRoundedIcon
            color="error"
            sx={{
              transform: "rotate(180deg)",
              fontSize: "0.625rem",
            }}
          />
        ) : null}
      </Stack>
    </Stack>
  );
};

const QtyInfo = () => {
  const daysInStock = 67;
  const estDaysOfInv = 86;

  return (
    <QtyContainer>
      <Stack direction="row" width="100%" alignItems="center" justifyContent="space-between">
        <Stack direction="column" spacing="4px" alignItems="flex-start">
          <SecondaryText>Days In Stock</SecondaryText>
          <PrimaryTextBold>{daysInStock}</PrimaryTextBold>
        </Stack>

        <Stack direction="column" spacing="4px" alignItems="flex-start">
          <SecondaryText>Estimated Days of Inventory</SecondaryText>
          <PrimaryTextBold>{estDaysOfInv}</PrimaryTextBold>
        </Stack>
      </Stack>
    </QtyContainer>
  );
};

const headCells = [
  {
    id: "product",
    label: "Product",
  },
  {
    id: "position",
    label: "Position",
  },
  {
    id: "status",
    label: "Status",
  },
  {
    id: "inventoryAge",
    label: "Inventory Age",
  },
  {
    id: "suggestion",
    label: "Suggestion",
  },
  {
    id: "unitPrice",
    label: "Unit Price",
  },
  {
    id: "avgSalesRank",
    label: "Avg. Sales Rank",
  },
  {
    id: "qty",
    label: "Qty.",
  },
  {
    id: "price",
    label: "Price",
  },
  {
    id: "profit",
    label: "Profit",
  },
  {
    id: "repricingMethod",
    label: "Repricing Method",
  },
  {
    id: "repricing",
    label: "Repricing",
  },
  {
    id: "strategy",
    label: "Strategy",
  },
];

const EnhancedTableHead = (props) => {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <StyledTableCell padding="checkbox">
          <Checkbox
            name="head-checkbox"
            color="primary"
            size="small"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all products",
            }}
          />
        </StyledTableCell>

        {headCells.map((headCell) => (
          <StyledTableCell align="left" key={headCell.id} sortDirection={orderBy === headCell.id ? order : false}>
            {["repricing", "strategy"].includes(headCell.id) ? (
              // Render the column header without the TableSortLabel for the "repricing" and "strategy" columns
              <span>{headCell.label}</span>
            ) : (
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={["repricing", "strategy"].includes(headCell.id) ? null : createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc" ? "sorted descending" : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>
            )}
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

//can be removed
const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography sx={{ flex: "1 1 100%" }} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography sx={{ flex: "1 1 100%" }} variant="h6" id="tableTitle" component="div">
          Products
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

//can be removed too
EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const RepricerProductsTable = ({ data, itemFilter, onChangeStrategyButtonClick }) => {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("position");
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [isProductEditUnitOpen, setIsProductEditUnitOpen] = useState(false);

  const matchingData = data.filter((item) => {
    const lowercasedItemFilter = itemFilter.toLowerCase();
    return (
      item.product.toLowerCase().includes(lowercasedItemFilter) ||
      item.sku.toLowerCase().includes(lowercasedItemFilter) ||
      item.asin.toLowerCase().includes(lowercasedItemFilter)
    );
  });

  // Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
  // stableSort() brings sort stability to non-modern browsers (notably IE11). If you
  // only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
  // with exampleArray.slice().sort(exampleComparator)
  const stableSort = (array, comparator) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const getComparator = (order, orderBy) => (a, b) => {
    // comparator for inventory age column
    if (orderBy === "inventoryAge") {
      const aLowerBound = parseInt(a.inventoryAge.split("-")[0]);
      const bLowerBound = parseInt(b.inventoryAge.split("-")[0]);

      if (aLowerBound < bLowerBound) {
        return order === "asc" ? -1 : 1;
      }
      if (aLowerBound > bLowerBound) {
        return order === "asc" ? 1 : -1;
      }

      const aUpperBound = parseInt(a.inventoryAge.split("-")[1]);
      const bUpperBound = parseInt(b.inventoryAge.split("-")[1]);

      if (aUpperBound < bUpperBound) {
        return order === "asc" ? -1 : 1;
      }
      if (aUpperBound > bUpperBound) {
        return order === "asc" ? 1 : -1;
      }
      return 0;

      // comparator for other columns
    } else {
      if (b[orderBy] < a[orderBy]) {
        return order === "desc" ? -1 : 1;
      }
      if (b[orderBy] > a[orderBy]) {
        return order === "desc" ? 1 : -1;
      }
      return 0;
    }
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = matchingData.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - matchingData.length) : 0;

  const visibleRows = useMemo(
    () =>
      stableSort(matchingData, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [matchingData, order, orderBy, page, rowsPerPage]
  );

  const handleEditClick = () => {
    // Event handling logic here
    alert("Edit clicked");
  };
  const handleProductEditUnitOpen = () => {
    setIsProductEditUnitOpen(true);
  };
  const handleProductEditUnitClose = () => {
    setIsProductEditUnitOpen(false);
  };

  return (
    <Box sx={{ width: "100%" }}>
      {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
      <StyledTableContainer>
        <Table sx={{ minWidth: 1100 }} aria-labelledby="repricer-products-table">
          <EnhancedTableHead
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={matchingData.length}
          />
          <TableBody>
            {visibleRows.map((row, index) => {
              const isItemSelected = isSelected(row.id);
              const labelId = `enhanced-table-checkbox-${index}`;

              return (
                <TableRow
                  hover
                  //role="checkbox"
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={row.id}
                  selected={isItemSelected}
                  //sx={{ cursor: "pointer" }}
                >
                  <StyledTableCell padding="checkbox">
                    <Checkbox
                      name="row-checkbox"
                      onClick={(event) => handleClick(event, row.id)}
                      color="primary"
                      size="small"
                      checked={isItemSelected}
                      inputProps={{
                        "aria-labelledby": labelId,
                      }}
                    />
                  </StyledTableCell>
                  <StyledTableCell id={labelId} scope="row" padding="none">
                    <Stack direction="row" spacing="8px" alignItems="center">
                      <ItemImageContainer>
                        <ItemImage src={testProductImage} loading="lazy" />
                      </ItemImageContainer>
                      <Stack direction="column" gap="6px" width="100px">
                        <Tooltip title={row.product} placement="top">
                          <PrimaryTextHighlighted $clamp>
                            {generateHighlightedText(row.product, itemFilter)}
                          </PrimaryTextHighlighted>
                        </Tooltip>

                        <Stack direction="column" gap="4px">
                          <Stack direction="row">
                            <SmallTextBold style={{ color: "#979797" }}>SKU:&nbsp;</SmallTextBold>
                            <Tooltip title={row.sku} placement="top">
                              <SmallTextBold $clamp>{generateHighlightedText(row.sku, itemFilter)}</SmallTextBold>
                            </Tooltip>
                          </Stack>

                          <Stack direction="row">
                            <SmallTextBold style={{ color: "#979797" }}>ASIN:&nbsp;</SmallTextBold>
                            <Tooltip title={row.asin} placement="top">
                              <SmallTextBold $clamp>{generateHighlightedText(row.asin, itemFilter)}</SmallTextBold>
                            </Tooltip>
                          </Stack>
                        </Stack>
                      </Stack>
                    </Stack>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Stack direction="column" gap="4px">
                      {getOrdinalSuffix(row.position)}
                      {getMarginDifference(row.marginDifference)}
                    </Stack>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Stack direction="column" gap="4px">
                      <MulticolorThumbnail status={row.status} $enlarged />
                      <SmallTextBold style={{ color: "#979797" }}>New Product</SmallTextBold>
                    </Stack>
                  </StyledTableCell>
                  <StyledTableCell>
                    <PrimaryText>{row.inventoryAge}</PrimaryText>
                  </StyledTableCell>
                  <StyledTableCell>
                    <PrimaryText>{row.suggestion}</PrimaryText>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Stack direction="column" gap="4px">
                      <PrimaryText>${row.unitPrice.toFixed(2)}</PrimaryText>
                      <EditButton onClick={handleProductEditUnitOpen}>Edit</EditButton>
                    </Stack>
                  </StyledTableCell>
                  <StyledTableCell>
                    <PrimaryText>{row.avgSalesRank.toFixed(2)}</PrimaryText>
                  </StyledTableCell>
                  <StyledTableCell>
                    <LightTooltip title={<QtyInfo />} placement="top" enterDelay={500} leaveDelay={200}>
                      <PrimaryText style={{ cursor: "help" }}>{row.quantity}</PrimaryText>
                    </LightTooltip>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Stack direction="column" gap="4px">
                      <PrimaryText>${row.price.toFixed(2)}</PrimaryText>
                      <SmallText style={{ display: "inline-flex", whiteSpace: "nowrap" }}>
                        Buy Box&nbsp;
                        <span>
                          <SmallTextBold>${row.price.toFixed(2)}</SmallTextBold>
                        </span>
                      </SmallText>
                    </Stack>
                  </StyledTableCell>
                  <StyledTableCell>
                    <HintThumbnail value={`$${row.profit.toFixed(2)}`} hintText="Some hint text" />
                    <PrimaryText></PrimaryText>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Stack direction="row" gap="8px" alignItems="center">
                      {row.repricingMethod === "Custom" ? (
                        <PrimaryTextHighlighted>{row.repricingMethod}</PrimaryTextHighlighted>
                      ) : (
                        <PrimaryText>{row.repricingMethod}</PrimaryText>
                      )}
                      <Stack direction="column" gap="4px">
                        <SmallText style={{ color: "#FF9900", display: "inline-flex", whiteSpace: "nowrap" }}>
                          Min&nbsp;
                          <span>
                            <SmallTextBold style={{ color: "#FF9900" }}>{row.repricingMin}</SmallTextBold>
                          </span>
                        </SmallText>
                        <SmallText style={{ color: "#009C34", display: "inline-flex", whiteSpace: "nowrap" }}>
                          Max&nbsp;
                          <span>
                            <SmallTextBold style={{ color: "#009C34" }}>{row.repricingMax}</SmallTextBold>
                          </span>
                        </SmallText>
                      </Stack>
                      <IconButton aria-label="edit">
                        <DriveFileRenameOutlineIcon sx={{ color: "#1565D8" }} />
                      </IconButton>
                    </Stack>
                  </StyledTableCell>
                  <StyledTableCell>
                    <RegularSwitch checked={row.repricing} />
                  </StyledTableCell>
                  <StyledTableCell>
                    <Stack direction="column" gap="10px" alignItems="center">
                      <IconButtonStretched
                        type="button"
                        buttonType={BUTTON_TYPE_CLASSES.blueFilled}
                        buttonText="Change Strategy"
                        buttonImage={settingsWhiteIcon}
                        onClick={onChangeStrategyButtonClick}
                      >
                        <Ripple />
                      </IconButtonStretched>

                      <SmallText style={{ display: "inline-flex", whiteSpace: "nowrap", color: "#0057D3" }}>
                        Current:&nbsp;
                        <span>
                          <SmallTextBold style={{ color: "#0057D3", fontWeight: 700 }}>{row.strategy}</SmallTextBold>
                        </span>
                      </SmallText>
                    </Stack>
                  </StyledTableCell>
                </TableRow>
              );
            })}
            {emptyRows > 0 && (
              <TableRow
                style={{
                  height: 70 * emptyRows,
                }}
              >
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </StyledTableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={matchingData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

      <ProductEditUnit open={isProductEditUnitOpen} onClose={handleProductEditUnitClose} />
    </Box>
  );
};

export default RepricerProductsTable;
