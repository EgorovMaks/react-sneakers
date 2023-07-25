import style from "./header.module.scss";
import Cart from "../SvgComponents/Cart";
import Heart from '../SvgComponents/Heart.jsx'
import User from "../SvgComponents/User.jsx";

function Header({ onClickBasket, onFavoriteClick, priceCart, orderOn }) {
  return (
    <header>
      <div className={style.headerLeft}>
        <img
          className={style.logo}
          width={40}
          height={40}
          src="./img/logo.png"
          alt="Logo"
        />
        <div>
          <h3>React sneakers</h3>
          <p>Магазин лучших крocсовок</p>
        </div>
      </div>
      <ul className={style.headerRight}>
        <li className={style.headerBasket}>
          <button onClick={onClickBasket}>
            <Cart />
            <span>{`${priceCart
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, " ")} руб.`}</span>
          </button>
        </li>
        <li>
          <button onClick={onFavoriteClick}>
            <Heart />
          </button>
        </li>
        <li>
          <button onClick={orderOn}>
            <User />
          </button>
        </li>
      </ul>
    </header>
  );
}

export default Header;
