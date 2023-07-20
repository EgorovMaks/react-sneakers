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
}) {
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
    return getItems
      .filter((i) => i.title.toLowerCase().includes(searchValue.toLowerCase()))
      .map((obj) => (
        <Card
          onDelFavorite={onDelFavoriteCondition}
          onPlusFavorite={onPlusFavoriteCondition}
          getFavorite={getFavorite}
          buttonPlusActive={buttonPlusActive}
          setButtonPlusActive={setButtonPlusActive}
          getCart={getCart}
          getItems={getItems}
          onPlusBusket={onPlusBusketCondition}
          {...obj}
        />
      ));
  };

  return (
    <section className={style.content}>
      <SearhBox
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <div className={style.sneakers}>{buildCards()}</div>
    </section>
  );
}

export default Content;
