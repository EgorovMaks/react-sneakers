import React, { useState } from "react";
import style from "./content.module.scss";
import SearhBox from "../SearchBox/SearhBox";
import Card from "../Card/Card";

function Content({
  getItems,
  onPlusBasket,
  getCart,
  setButtonPlusActive,
  buttonPlusActive,
  getFavorite,
  onPlusFavorite,
  onDelFavorite,
  onLoading,
}) {
  const fakeItems = [
    { key: 1 },
    { key: 2 },
    { key: 3 },
    { key: 4 },
    { key: 5 },
    { key: 6 },
    { key: 7 },
    { key: 8 },
  ];
  const [searchValue, setSearchValue] = useState("");

  const onPlusBusketCondition = (obj) => {
    onPlusBasket(obj);
  };
  const onPlusFavoriteCondition = (obj) => {
    onPlusFavorite(obj);
  };

  const onDelFavoriteCondition = (obj) => {
    onDelFavorite(obj);
  };

  const buildCards = () => {
    return (
      onLoading
        ? fakeItems
        : getItems.filter((i) =>
            i.title.toLowerCase().includes(searchValue.toLowerCase())
          )
    ).map((obj) => (
      <Card
        onDelFavorite={onDelFavoriteCondition}
        onPlusFavorite={onPlusFavoriteCondition}
        getFavorite={getFavorite}
        buttonPlusActive={buttonPlusActive}
        setButtonPlusActive={setButtonPlusActive}
        getCart={getCart}
        getItems={getItems}
        onPlusBusket={onPlusBusketCondition}
        onLoading={onLoading}
        {...obj}
      />
    ));
  };

  return (
    <section className={style.content}>
      <SearhBox searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className={style.sneakers}>{buildCards()}</div>
    </section>
  );
}

export default Content;
