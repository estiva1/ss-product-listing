import React from "react";
import { MyStrategyInfoContainer, RegularText, RegularTextHighlighted, SkuNumber } from "./my-strategy-info.styles";

const MyStrategyInfo = ({ numberOfSkus }) => {
  return (
    <MyStrategyInfoContainer>
      <RegularText>
        This strategy is assigned to&nbsp;
        <SkuNumber>{`${numberOfSkus} ${numberOfSkus > 1 ? "SKU's" : "SKU"}. `}</SkuNumber>
        All will be effected.
      </RegularText>
      <RegularText>
        Or you can add as a&nbsp;<RegularTextHighlighted>New Strategy</RegularTextHighlighted>
      </RegularText>
    </MyStrategyInfoContainer>
  );
};

export default MyStrategyInfo;
