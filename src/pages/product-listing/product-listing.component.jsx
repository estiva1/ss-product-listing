import React, { useDeferredValue, useState } from "react";
import BigSwitch from "../../components/UI/switches/big-switch/big-switch.component";
import DeletableChip from "../../components/UI/deletable-chip/deletable-chip.component";
import RepricerProductsTable from "../../components/UI/repricer-products-table/repricer-products-table.component";
import { repricerProductsTableData } from "../../constants";
import { Container, HeaderText, HeaderWrapper, Options, StyledPopover } from "./product-listing.styles";
import { Badge, IconButton, Stack } from "@mui/material";
import Dropdown from "../../components/UI/dropdowns/simple-dropdown/dropdown.component";
import IconButtonStretched, {
  BUTTON_TYPE_CLASSES,
  Ripple,
} from "../../components/UI/buttons/icon-button-stretched/icon-button-stretched.component";
import filterIcon from "../../assets/filter-icon.svg";
import resetIcon from "../../assets/reset.svg";
import CustomizedSearchField from "../../components/UI/searchfield/searchfield.component";
import { AnimatePresence, motion } from "framer-motion";
import PriceSection from "../../components/price-section/price-section.component";
import ProfitOverlay from "../../components/profit-overlay/profit-overlay.component";
import DraggableContainer from "../../components/UI/draggable-scroll-container/draggable-scroll-container.component";
import { ReactComponent as ButtonIconOne } from "../../assets/button-icon-1.svg";
import { ReactComponent as ButtonIconTwo } from "../../assets/button-icon-2.svg";
import CreateNewStrategy from "../../components/create-new-strategy/create-new-strategy.component";
import FastStrategy from "../../components/fast-strategy/fast-strategy.component";

const MotionWrapper = ({ children }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

const ProductListing = () => {
  const [itemFilter, setItemFilter] = useState("");
  const deferredItemFilter = useDeferredValue(itemFilter);

  const [anchorEl, setAnchorEl] = useState(null);
  const [isStatusOn, setIsStatusOn] = useState(false);
  const [isBuyBoxWinnerOn, setIsBuyBoxWinnerOn] = useState(false);
  const [isRepriceFilterOn, setIsRepriceFilterOn] = useState(false);

  const [listing, setListing] = useState(null);
  const [costPrice, setCostPrice] = useState(null);
  const [addFilterBy, setAddFilterBy] = useState(null);
  const [fulfilmentBy, setFulfilmentBy] = useState(null);
  const [selectStrategy, setSelectStrategy] = useState(null);

  const [isPriceSectionOpen, setIsPriceSectionOpen] = useState(false);
  const [isProfitOverlayOpen, setIsProfitOverlayOpen] = useState(false);
  const [isCreateNewStrategyOpen, setIsCreateNewStrategyOpen] = useState(false);
  const [isFastStrategyAdjustmentOpen, setIsFastStrategyAdjustmentOpen] = useState(false);

  const handleItemFilterChange = (event) => {
    setItemFilter(event.target.value);
    console.log("Deferred Item Filter:", deferredItemFilter);
  };

  const handleStatusToggle = () => {
    setIsStatusOn(!isStatusOn);
  };
  const handleRepriceFilterToggle = () => {
    setIsRepriceFilterOn(!isRepriceFilterOn);
  };
  const handleBuyBoxWinnerToggle = () => {
    setIsBuyBoxWinnerOn(!isBuyBoxWinnerOn);
  };

  const handleOpenFiltersMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseFiltersMenu = () => {
    setAnchorEl(null);
  };
  const handlePriceSectionOpen = () => {
    setIsPriceSectionOpen(true);
  };
  const handlePriceSectionClose = () => {
    setIsPriceSectionOpen(false);
  };
  const handleProfitOverlayOpen = () => {
    setIsProfitOverlayOpen(true);
  };
  const handleProfitOverlayClose = () => {
    setIsProfitOverlayOpen(false);
  };
  const handleCreateNewStrategyOpen = () => {
    setIsCreateNewStrategyOpen(true);
  };
  const handleCreateNewStrategyClose = () => {
    setIsCreateNewStrategyOpen(false);
  };
  const handleFastStrategyAdjustmentOpen = () => {
    setIsFastStrategyAdjustmentOpen(true);
  };
  const handleFastStrategyAdjustmentClose = () => {
    setIsFastStrategyAdjustmentOpen(false);
  };

  const handleResetFilters = () => {
    setListing(null);
    setAddFilterBy(null);
    setSelectStrategy(null);
    setFulfilmentBy(null);
    setCostPrice(null);
  };
  const handleListingClear = () => {
    setListing(null);
  };
  const handleAddFilterByClear = () => {
    setAddFilterBy(null);
  };
  const handleSelectStrategyClear = () => {
    setSelectStrategy(null);
  };
  const handleFulfilmentByClear = () => {
    setFulfilmentBy(null);
  };
  const handleCostPriceClear = () => {
    setCostPrice(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "popover-with-filters" : undefined;

  const chooseListingData = [
    "Active Listing",
    "Inactive Listing",
    "Deactivated Listing",
    "Deleted Listing",
    "Out of Stock",
  ];
  const addFilterByData = ["Deactivated", "Deleted", "Live", "Out of Stock", "Unmanaged", "Unpublished"];
  const selectStrategyData = [
    "ML (Aggressive) Manual",
    "ML Profit Manual Pricing",
    "Manual Min/Max",
    "ML Profit Margin 5%-40%",
    "Clone ML II 5%-40%",
    "Not Attached",
  ];
  const fulfilmentByData = ["FBA", "FBM"];
  const costPriceData = ["Missing", "Present"];

  function isDropdownNotEmpty(dropdown) {
    return dropdown !== null && dropdown !== undefined;
  }

  const isListingEmpty = listing === null;
  const isAddFilterBy = addFilterBy === null;
  const isSelectStrategy = selectStrategy === null;
  const isFulfilmentBy = fulfilmentBy === null;
  const isCostPrice = costPrice === null;

  const chips = [
    isListingEmpty ? null : (
      <MotionWrapper key={0}>
        <DeletableChip
          filterType="Listing"
          value={listing}
          onDelete={handleListingClear}
          clearInput={handleListingClear}
        />
      </MotionWrapper>
    ),
    isAddFilterBy ? null : (
      <MotionWrapper key={1}>
        <DeletableChip
          filterType="Filtered by"
          value={addFilterBy}
          onDelete={handleAddFilterByClear}
          clearInput={handleAddFilterByClear}
        />
      </MotionWrapper>
    ),
    isSelectStrategy ? null : (
      <MotionWrapper key={2}>
        <DeletableChip
          filterType="Selected Strategy"
          value={selectStrategy}
          onDelete={handleSelectStrategyClear}
          clearInput={handleSelectStrategyClear}
        />
      </MotionWrapper>
    ),
    isFulfilmentBy ? null : (
      <MotionWrapper key={3}>
        <DeletableChip
          filterType="Fulfilment by"
          value={fulfilmentBy}
          onDelete={handleFulfilmentByClear}
          clearInput={handleFulfilmentByClear}
        />
      </MotionWrapper>
    ),
    isCostPrice ? null : (
      <MotionWrapper key={4}>
        <DeletableChip
          filterType="Cost Price"
          value={costPrice}
          onDelete={handleCostPriceClear}
          clearInput={handleCostPriceClear}
        />
      </MotionWrapper>
    ),
  ];

  const nonEmptyDropdowns = chips.filter(isDropdownNotEmpty);
  const numberOfNonEmptyDropdowns = nonEmptyDropdowns.length;

  return (
    <Container>
      <HeaderWrapper>
        <HeaderText>Repricer/Products</HeaderText>
        <Options>
          <Stack direction="row" gap="10px" alignItems="center">
            <BigSwitch switchText="Status" isOn={isStatusOn} handleToggle={handleStatusToggle} />
            <BigSwitch switchText="Reprice Filter" isOn={isRepriceFilterOn} handleToggle={handleRepriceFilterToggle} />
            <BigSwitch switchText="Buy Box Winner" isOn={isBuyBoxWinnerOn} handleToggle={handleBuyBoxWinnerToggle} />
          </Stack>
          <Stack direction="row" gap="10px" alignItems="center">
            <IconButton sx={{ p: 0 }} disableRipple disableTouchRipple onClick={handleCreateNewStrategyOpen}>
              <ButtonIconOne />
            </IconButton>
            <IconButton sx={{ p: 0 }} disableRipple disableTouchRipple>
              <ButtonIconTwo />
            </IconButton>
          </Stack>
        </Options>
      </HeaderWrapper>

      <Stack direction="row" gap="10px" alignItems="center">
        <CustomizedSearchField
          style={{ width: "250px" }}
          placeholder="I am searching for Title, ASIN, SKU..."
          value={itemFilter}
          onChange={handleItemFilterChange}
        />
        <Badge badgeContent={numberOfNonEmptyDropdowns} color="primary">
          <IconButtonStretched
            type="button"
            //aria-describedby={id}
            buttonType={BUTTON_TYPE_CLASSES.whiteOutlined}
            buttonText="Filters"
            buttonImage={filterIcon}
            onClick={handleOpenFiltersMenu}
            noAnimations
            style={{ direction: "rtl" }}
          >
            <Ripple color="#1565D8" />
          </IconButtonStretched>
        </Badge>

        <DraggableContainer>{nonEmptyDropdowns}</DraggableContainer>
      </Stack>

      <StyledPopover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleCloseFiltersMenu}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        style={{ marginTop: "10px" }}
      >
        <Stack direction="column" gap="16px" width="200px">
          <Dropdown
            data={chooseListingData}
            value={listing}
            placeholder="Choose Listing"
            setSelectedValue={setListing}
          />
          <Dropdown
            data={addFilterByData}
            value={addFilterBy}
            placeholder="Add Filter by"
            setSelectedValue={setAddFilterBy}
          />
          <Dropdown
            data={selectStrategyData}
            value={selectStrategy}
            placeholder="Select Strategy"
            setSelectedValue={setSelectStrategy}
          />
          <Dropdown
            data={fulfilmentByData}
            value={fulfilmentBy}
            placeholder="Fulfilment by"
            setSelectedValue={setFulfilmentBy}
          />
          <Dropdown data={costPriceData} value={costPrice} placeholder="Cost Price" setSelectedValue={setCostPrice} />
          <IconButtonStretched
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.blueFilled}
            buttonText="Reset Filters"
            buttonImage={resetIcon}
            style={{ width: "100%" }}
            onClick={handleResetFilters}
          >
            <Ripple />
          </IconButtonStretched>
        </Stack>
      </StyledPopover>

      <RepricerProductsTable
        data={repricerProductsTableData}
        itemFilter={deferredItemFilter}
        onChangeStrategyButtonClick={handleFastStrategyAdjustmentOpen}
      />
      <PriceSection open={isPriceSectionOpen} onClose={handlePriceSectionClose} />
      <ProfitOverlay open={isProfitOverlayOpen} onClose={handleProfitOverlayClose} />
      <CreateNewStrategy open={isCreateNewStrategyOpen} onClose={handleCreateNewStrategyClose} />
      <FastStrategy open={isFastStrategyAdjustmentOpen} onClose={handleFastStrategyAdjustmentClose} />
    </Container>
  );
};

export default ProductListing;
