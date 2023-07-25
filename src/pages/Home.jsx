import React from "react";
import Content from "../components/Content/Content";

const Home = ({
  onDelFavorite,
  onPlusFavorite,
  getFavorite,
  getItems,
  getCart,
  onPlusBasket,
  setButtonPlusActive,
  buttonPlusActive,
  onLoading,
}) => {
  return (
    <Content
      onDelFavorite={onDelFavorite}
      onPlusFavorite={onPlusFavorite}
      getFavorite={getFavorite}
      getItems={getItems}
      getCart={getCart}
      onPlusBasket={onPlusBasket}
      setButtonPlusActive={setButtonPlusActive}
      buttonPlusActive={buttonPlusActive}
      onLoading={onLoading}
    />
  );
};

export default Home;
