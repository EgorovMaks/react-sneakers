import ButtonFavorite from "../ButtonFavorite/ButtonFavorite";
import "./card.scss";
import ButtonCart from "../ButtonCart/ButtonCart";

function Card({
  imageUrl,
  title,
  price,
  onPlusBusket,
  id,
  getCart,
  buttonPlusActive,
  getFavorite,
  onPlusFavorite,
  onDelFavorite
}) {
  const conditionCard = () => {
    onPlusBusket({ title, price, imageUrl, id });
  };

  const conditionFavorite = () => {
    if (isFavorite() === true) {
      onDelFavorite({id, imageUrl})
    } else {
      onPlusFavorite({ title, price, imageUrl, id });
    }
  };

  const isCard = () => {
    if (getCart.find((i) => i.imageUrl === imageUrl)) {
      return true;
    }
  };

  const isFavorite = () => {
    if (getFavorite.find((i) => i.imageUrl === imageUrl)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="card">
      <ButtonFavorite
        isFavorite={isFavorite}
        onPlusFavorite={conditionFavorite}
      />
      <img
        className="image"
        src={`./img/sneakers/card-sneakers-${imageUrl}.jpg`}
        alt="Кросовки"
      />
      <p className="cardTitle">{title}</p>
      <div className="cardBottomWrap">
        <div className="summWrap">
          <span className="summTitle">ЦЕНА:</span>
          <span className="price">{price} руб.</span>
        </div>
        <ButtonCart
          isCard={isCard}
          onPlusBusket={conditionCard}
          buttonPlusActive={buttonPlusActive}
        />
      </div>
    </div>
  );
}

export default Card;
