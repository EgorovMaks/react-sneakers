import React, { useState } from "react";
import style from "./order.module.scss";
import styleBtn from "../../componetsScss/greenButton.module.scss";
import Card from "../Card/Card";
import axios from "axios";

function Order({
  getItems,
  getCart,
  setButtonPlusActive,
  buttonPlusActive,
  getFavorite,
}) {
  const [orderItems, setOrderItems] = useState([]);
  const [onInput, setOnInput] = useState("");
  const [onTitle, setOnTitle] = useState(0);

  const searchBtn = async () => {
    try {
      const { data } = await axios.get(
        `https://19bd238effe8a2ff.mokky.ru/porter?id=${onInput}`
      );
      setOrderItems(data[0].items.getCart);
      setOnTitle(onInput);
    } catch (error) {
      setOnTitle(0);
      alert(
        `Нет заказа с таким номером. Пожалуйста проверьте номер своего заказа еще раз`
      );
    }
    setOnInput("");
  };

  const setOnInputValue = (e) => {
    setOnInput(e.target.value);
  };

  const buildCards = () => {
    return orderItems.map((obj) => (
      <Card
        getFavorite={getFavorite}
        buttonPlusActive={buttonPlusActive}
        setButtonPlusActive={setButtonPlusActive}
        getCart={getCart}
        getItems={getItems}
        key={obj.imageUrl}
        {...obj}
      />
    ));
  };

  const onKeyDown = (e) => {
    const keyCode = e.keyCode || e.which;
    if (keyCode === 13) {
      searchBtn();
    }
  };

  return (
    <section className={style.content}>
      {onTitle === 0 ? (
        <h2 className={style.title}>Просмотр заказов</h2>
      ) : (
        <h2 className={style.title}>{`Ваш заказ # ${onTitle}`}</h2>
      )}
      <div className={`${style.wrapSearch}`}>
        <span className={style.text}>Введите номер своего своего заказа #</span>
        <div className={`${style.searchBox}`}>
          <input
            onKeyDown={onKeyDown}
            value={onInput}
            onChange={setOnInputValue}
            type="number"
            placeholder="сюда"
          />
        </div>
        <button
          style={{
            paddingTop: 12,
            paddingBottom: 12,
            borderRadius: 10,
            width: 150,
          }}
          className={styleBtn.greenButton}
          onClick={searchBtn}
        >
          найти
        </button>
      </div>
      <div className={style.sneakers}>{buildCards()}</div>
    </section>
  );
}

export default Order;
