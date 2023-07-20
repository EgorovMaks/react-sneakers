import styleBtnClouse from "../../componetsScss/buttonClouse.module.scss";
import ButtonCartDel from "../SvgComponents/ButtonCartDel";
import style from './cardBasket.module.scss';



function CardBasket({
  imageUrl,
  price,
  title,
  id,
  delCartCart,
}) {
  const delCardCart = () => {
    delCartCart({ id, imageUrl });
  };

  return (
    <div className={style.cardBasket}>
      <img
        src={`./img/sneakers/card-sneakers-${imageUrl}.jpg`}
        alt="Кроссовки"
      />
      <div>
        <span className={style.cardBasketName}>{title}</span>
        <span>
          <b>{price} руб.</b>
        </span>
      </div>
      <button onClick={delCardCart} className={styleBtnClouse.buttonClouse}>
        <ButtonCartDel />
      </button>
    </div>
  );
}

export default CardBasket;
