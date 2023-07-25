import React from "react";
import Card from "../Card/Card";
import style from "./favorite.module.scss";
import Empty from "../Empty/Empty";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Favorite({
  getFavorite,
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
        key={obj.imageUrl + 100}
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
      <div
        className={
          getFavorite.length > 0
            ? `${style.favorite}`
            : `${style.favorite} ${style.favoriteCenter}`
        }
      >
        {getFavorite.length > 0 ? (
          buildCardsFavorite()
        ) : (
          <Empty
            title="Закладок нет :("
            text="Вы ничего не добавляли в закладки"
            
            imageUrl={`./img/empty/favorite-image-empty.png`}
            alt={`Ничего нет`}
          />
        )}
      </div>
    </section>
  );
}
export default Favorite;
