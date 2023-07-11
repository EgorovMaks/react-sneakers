import React from "react";
import Card from "../Card/Card"
import "./favorite.scss"

function Favorite({ onPlusFavorites, onPlusBasket, onDelFavorite }) {
  const [favoriteButton, setFavoriteButton] = React.useState(true);

  const onPluss = (obj) => {
    onPlusBasket(obj)
  };



  return (
    <section className="favorite">
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
    </section>
  );
}
export default Favorite