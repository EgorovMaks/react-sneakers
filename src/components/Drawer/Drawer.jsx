import DrawerSumm from "../DrawerSumm/DrawerSumm";
import CardBasket from "../CardBasket/CardBasket";
import style from "./drawer.module.scss";
import axios from "axios";

import React, { useState } from "react";
import Empty from "../Empty/Empty";

function Drawer({
  cartOn,
  setCartOn,
  getCart,
  cardDel,
  setGetCart,
  priceCart,
  summ,
  setPriceCart,
}) {
  const [isPlaceAnOrder, setIsPlaceAnOrder] = useState(false);

  const [orderId, setOrderId] = useState(null);

  const delCartCart = (obj) => {
    cardDel(obj);
  };

  const placeAnOrder = async () => {
    setIsPlaceAnOrder(true);
    const { data } = await axios.post(
      `https://cd918def291fc86a.mokky.dev/porter`,
      { items: { getCart } }
    );
    setOrderId(data.id);
    getCart.map(
      async (i) =>
        await axios.delete(`https://cd918def291fc86a.mokky.dev/carts/${i.id}`)
    );
    setPriceCart("0");
    setGetCart([]);
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
    <section
      className={
        cartOn ? `${style.drawer} ${style.drawerActive}` : `${style.drawer} `
      }
    >
      <div onClick={clouseCart} className={style.block}></div>
      <div className={style.drawerCart}>
        <div className={style.drawerTitle}>
          <p className={style.title}>Корзина</p>
          <button className={style.cartClouse} onClick={clouseCart}></button>
        </div>

        {getCart.length > 0 ? (
          <>
            <div className={style.drawerCardWrap}>{buildCardsCart()}</div>
            <DrawerSumm placeAnOrder={placeAnOrder} priceCart={priceCart} />
          </>
        ) : (
          <>
            {isPlaceAnOrder ? (
              <Empty
                title={`Заказ оформлен!`}
                text={`Ваш заказ #${orderId} скоро будет передан курьерской доставке`}
                imageUrl={`https://raw.githubusercontent.com/EgorovMaks/react-sneakers/gh-pages/img/empty/cart-image-empty.png`}
                btnClick={() => {
                  setCartOn(false);
                  document.querySelector("body").classList.toggle("ovf");
                }}
                alt={`Заказ оформлен`}
              />
            ) : (
              <Empty
                title="Корзина пустая"
                text="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
                btnClick={() => {
                  setCartOn(false);
                  document.querySelector("body").classList.toggle("ovf");
                }}
                imageUrl={`./img/empty/cart-image-empty.png`}
                alt={`Корзина пуста`}
              />
            )}
            <div></div>
          </>
        )}
      </div>
    </section>
  );
}

export default Drawer;
