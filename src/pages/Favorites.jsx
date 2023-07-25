import React from "react";
import Favorite from "../components/Favorite/Favorite";
import "../componetsScss/addBasket.module.scss"

const Favorites = ({
  onDelFavorite,
  getFavorite,
  getCart,
  onPlusBasket,
  setFavoriteOn,
  setGetFavorite,
}) => {
  return (
    <Favorite
      setFavoriteOn={setFavoriteOn}
      onDelFavorite={onDelFavorite}
      setGetFavorite={setGetFavorite}
      getFavorite={getFavorite}
      getCart={getCart}
      onPlusBasket={onPlusBasket}
    />
  );
};

export default Favorites;
