import React, { useState } from "react";
import BigSwitch from "../../components/UI/switches/big-switch/big-switch.component";
import DeletableChip from "../../components/UI/deletable-chip/deletable-chip.component";
import RepricerProductsTable from "../../components/UI/repricer-products-table/repricer-products-table.component";
import { repricerProductsTableData } from "../../constants";
import { Container, HeaderText, HeaderWrapper, Options, StyledPopover } from "./product-listing.styles";
import { IconButton, Stack } from "@mui/material";
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

const MotionWrapper = ({ key, children }) => {
  return (
    <motion.div
      key={key}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

const ProductListing = () => {
  const [isStatusOn, setIsStatusOn] = useState(false);
  const [isRepriceFilterOn, setIsRepriceFilterOn] = useState(false);
  const [isBuyBoxWinnerOn, setIsBuyBoxWinnerOn] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const [listing, setListing] = useState(null);
  const [addFilterBy, setAddFilterBy] = useState(null);
  const [selectStrategy, setSelectStrategy] = useState(null);
  const [fulfilmentBy, setFulfilmentBy] = useState(null);
  const [costPrice, setCostPrice] = useState(null);

  const [isPriceSectionOpen, setIsPriceSectionOpen] = useState(false);
  const [isProfitOverlayOpen, setIsProfitOverlayOpen] = useState(false);
  const [isCreateNewStrategyOpen, setIsCreateNewStrategyOpen] = useState(false);

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
  const fullfilmentByData = ["FBA", "FBM"];
  const costPriceData = ["Missing", "Present"];

  const isListingEmpty = listing === null;
  const isAddFilterBy = addFilterBy === null;
  const isSelectStrategy = selectStrategy === null;
  const isFulfilmentBy = fulfilmentBy === null;
  const isCostPrice = costPrice === null;

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
        <CustomizedSearchField style={{ width: "250px" }} placeholder="I am searching for Title, ASIN, SKU..." />
        <IconButtonStretched
          type="button"
          aria-describedby={id}
          buttonType={BUTTON_TYPE_CLASSES.whiteOutlined}
          buttonText="Filters"
          buttonImage={filterIcon}
          onClick={handleOpenFiltersMenu}
          noAnimations
        >
          <Ripple color="#1565D8" />
        </IconButtonStretched>

        {(!isListingEmpty || !isAddFilterBy || !isSelectStrategy || !isFulfilmentBy || !isCostPrice) && (
          <DraggableContainer>
            <AnimatePresence mode="wait">
              {!isListingEmpty && (
                <MotionWrapper key={0}>
                  <DeletableChip
                    filterType="Listing"
                    value={listing}
                    onDelete={handleListingClear}
                    clearInput={handleListingClear}
                  />
                </MotionWrapper>
              )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
              {!isAddFilterBy && (
                <MotionWrapper key={1}>
                  <DeletableChip
                    filterType="Filtered by"
                    value={addFilterBy}
                    onDelete={handleAddFilterByClear}
                    clearInput={handleAddFilterByClear}
                  />
                </MotionWrapper>
              )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
              {!isSelectStrategy && (
                <MotionWrapper key={2}>
                  <DeletableChip
                    filterType="Selected Strategy"
                    value={selectStrategy}
                    onDelete={handleSelectStrategyClear}
                    clearInput={handleSelectStrategyClear}
                  />
                </MotionWrapper>
              )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
              {!isFulfilmentBy && (
                <MotionWrapper key={3}>
                  <DeletableChip
                    filterType="Fulfilment by"
                    value={fulfilmentBy}
                    onDelete={handleFulfilmentByClear}
                    clearInput={handleFulfilmentByClear}
                  />
                </MotionWrapper>
              )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
              {!isCostPrice && (
                <MotionWrapper key={4}>
                  <DeletableChip
                    filterType="Cost Price"
                    value={costPrice}
                    onDelete={handleCostPriceClear}
                    clearInput={handleCostPriceClear}
                  />
                </MotionWrapper>
              )}
            </AnimatePresence>
          </DraggableContainer>
        )}
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
          <Dropdown data={chooseListingData} placeholder="Choose Listing" setSelectedValue={setListing} />
          <Dropdown data={addFilterByData} placeholder="Add Filter by" setSelectedValue={setAddFilterBy} />
          <Dropdown data={selectStrategyData} placeholder="Select Strategy" setSelectedValue={setSelectStrategy} />
          <Dropdown data={fullfilmentByData} placeholder="Fulfilment by" setSelectedValue={setFulfilmentBy} />
          <Dropdown data={costPriceData} placeholder="Cost Price" setSelectedValue={setCostPrice} />
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

      <RepricerProductsTable data={repricerProductsTableData} />
      <PriceSection open={isPriceSectionOpen} onClose={handlePriceSectionClose} />
      <ProfitOverlay open={isProfitOverlayOpen} onClose={handleProfitOverlayClose} />
      <CreateNewStrategy open={isCreateNewStrategyOpen} onClose={handleCreateNewStrategyClose} />
    </Container>
  );
};

export default ProductListing;
