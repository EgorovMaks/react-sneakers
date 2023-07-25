import React from "react";
import Order from "../components/Order/Order"

const Orders = ({
  onDelFavorite,
  getFavorite,
  getCart,
  onPlusBasket,
  onPlusFavorite,
  getItems,
  setButtonPlusActive,
  buttonPlusActive,
  onLoading
}) => {
  return (
    <Order
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

export default Orders;
