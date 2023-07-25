import CartOff from "../SvgComponents/CartOff";
import CartOn from "../SvgComponents/CartOn";
import style from "./buttonCart.module.scss";

function ButtonCart({ onPlusBusket, buttonPlusActive, isCard }) {
  return (
    <>
      <button
        onClick={onPlusBusket}
        className={
          isCard()
            ? `${style.buttonCartActive} ${style.buttonCart}`
            : buttonPlusActive
            ? `${style.buttonCartActive} ${style.buttonCart}`
            : `${style.buttonCart}`
        }
      >
        <CartOff />
        <CartOn />
      </button>
    </>
  );
}

export default ButtonCart;
