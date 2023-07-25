import style from "./header.module.scss";
import Cart from "../SvgComponents/Cart";
import Heart from "../SvgComponents/Heart.jsx";
import User from "../SvgComponents/User.jsx";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Header({ onClickBasket,  priceCart, }) {
  return (
    <header>
      <Link to="/">
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
      </Link>
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
          <Link to="./favorites">
            <Heart />
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <User />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
