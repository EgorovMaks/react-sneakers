import React from "react";
import Card from "../Card/Card";
import style from "./favorite.module.scss";

function Favorite({ onPlusFavorites, onPlusBasket, onDelFavorite }) {
  const [favoriteButton, setFavoriteButton] = React.useState(true);

  const onPluss = (obj) => {
    onPlusBasket(obj);
  };

  return (
    <section className={style.favoriteWrap}>
      <h2 className={style.favoriteTitle}>Мои закладки</h2>
      <div className={style.favorite}>
        {onPlusFavorites.map((obj) => (
          <Card
            onDelFavorite={onDelFavorite}
            onPlus={onPluss}
            setFavoriteButton={setFavoriteButton}
            favoriteButton={favoriteButton}
            imageUrl={obj.imageUrl}
            key={obj.imageUrl}
            title={obj.title}
            id={obj.id}
            price={obj.price}
          />
        ))}
      </div>
    </section>
  );
}
export default Favorite;
