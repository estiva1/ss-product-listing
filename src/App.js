import { Fragment } from "react";
import { GlobalStyle } from "./global.styles";
import ProductListing from "./pages/product-listing/product-listing.component";

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <ProductListing />
    </Fragment>
  );
}

export default App;
