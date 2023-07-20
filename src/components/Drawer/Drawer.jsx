import DrawerSumm from "../DrawerSumm/DrawerSumm";
import CardBasket from "../CardBasket/CardBasket";
import "./drawer.scss";

import React from "react";

function Drawer({ cartOn, setCartOn, getCart, cardDel }) {
  const delCartCart = (obj) => {
    cardDel(obj);
  };

  const buildCardsCart = () => {
    return getCart.map((obj) => (
      <CardBasket
        delCartCart={delCartCart}
        id={obj.id}
        key={obj.imageUrl}
        imageUrl={obj.imageUrl}
        title={obj.title}
        price={obj.price}
      />
    ));
  };

  const clouseCart = () => {
    document.querySelector("body").classList.toggle("ovf");
    setCartOn(!cartOn);
  };

  return (
    <section className="drawer drawerActive">
      <div className="drawerCart">
        <div className="drawerTitle">
          <p className="title">Корзина</p>
          <button className="cartClouse" onClick={clouseCart}></button>
        </div>

        {getCart.length > 0 ? (
          <>
            <div className="drawerCardWrap">{buildCardsCart()}</div>
            <DrawerSumm />
          </>
        ) : (
          <>
          <h2>Ваша корзина пуста</h2>
          <div></div>
          </>
        )}
      </div>
    </section>
  );
}

export default Drawer;
