import React from "react";
import Card from "../Card/Card";
import style from "./favorite.module.scss";

function Favorite({
  getFavorite,
  setGetFavorite,
  getCart,
  onPlusBasket,
  onDelFavorite,
}) {
  const onPlusBusketCondition = (obj) => {
    onPlusBasket(obj);
  };
  const onDelFavoriteCondition = (obj) => {
    onDelFavorite(obj);
  };
  const buildCardsFavorite = () => {
    return getFavorite.map((obj) => (
      <Card
        key={obj.imageUrl}
        onDelFavorite={onDelFavoriteCondition}
        getFavorite={getFavorite}
        getCart={getCart}
        onPlusBusket={onPlusBusketCondition}
        {...obj}
      />
    ));
  };

  return (
    <section className={style.favoriteWrap}>
      <h2 className={style.favoriteTitle}>Мои закладки</h2>
      <div className={style.favorite}>{buildCardsFavorite()}</div>
    </section>
  );
}
export default Favorite;
