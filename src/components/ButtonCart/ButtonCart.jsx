import CartOff from '../SvgComponents/CartOff'
import CartOn from '../SvgComponents/CartOn';
import './buttonCart.scss'

function ButtonCart({ onPlusBusket, buttonPlusActive, isCard }) {


  return (
    <>
      <button
        onClick={onPlusBusket}
        className={isCard() ? `buttonCartActive buttonCart` : buttonPlusActive ? `buttonCartActive buttonCart` : `buttonCart`}
      >
        <CartOff />
        <CartOn />
      </button>
    </>
  );
}

export default ButtonCart
