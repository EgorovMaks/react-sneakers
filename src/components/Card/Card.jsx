import ButtonFavorite from "../ButtonFavorite/ButtonFavorite";
import style from "./card.module.scss";
import ButtonCart from "../ButtonCart/ButtonCart";
import Loader from "../Loader/Loader"

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
  onDelFavorite,
  onLoading,
}) {

  
  const conditionCard = () => {
    onPlusBusket({ title, price, imageUrl, id });
  };

  const conditionFavorite = () => {
    if (isFavorite() === true) {
      onDelFavorite({ id, imageUrl });
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
    <div className={style.card}>
      {onLoading ? (
        <Loader />
      ) : (
        <>
          {onPlusBusket && (
            <ButtonFavorite
              isFavorite={isFavorite}
              onPlusFavorite={conditionFavorite}
            />
          )}

          <img
            className={style.image}
            src={`https://raw.githubusercontent.com/EgorovMaks/react-sneakers/gh-pages/img/sneakers/card-sneakers-${imageUrl}.jpg`}
            alt="Кросовки"
          />
          <p className={style.cardTitle}>{title}</p>
          <div className={style.cardBottomWrap}>
            <div className={style.summWrap}>
              <span className={style.summTitle}>ЦЕНА:</span>
              <span className={style.price}>
                {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} руб.
              </span>
            </div>
            {onPlusBusket && (
              <ButtonCart
                isCard={isCard}
                onPlusBusket={conditionCard}
                buttonPlusActive={buttonPlusActive}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
