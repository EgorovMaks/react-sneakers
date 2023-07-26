import style from "./header.module.scss";
import Cart from "../SvgComponents/Cart";
import Heart from "../SvgComponents/Heart.jsx";
import User from "../SvgComponents/User.jsx";
import { Link, NavLink } from "react-router-dom/cjs/react-router-dom.min";

function Header({ onClickBasket, priceCart }) {
  return (
    <header>
      <Link to="/react-sneakers/#/">
        <div className={style.headerLeft}>
          <img
            className={style.logo}
            width={40}
            height={40}
            src="https://raw.githubusercontent.com/EgorovMaks/react-sneakers/master/public/img/logo.png"
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
          <NavLink
            to="/react-sneakers/#/favorites"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <Heart />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/react-sneakers/#/orders"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <User />
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
