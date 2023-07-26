import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import axios from "axios";
import Drawer from "./components/Drawer/Drawer";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";
import { HashRouter } from "react-router-dom/cjs/react-router-dom.min";

function App(props) {
  const [getItems, setGetItems] = useState([]);
  const [getCart, setGetCart] = useState([]);
  const [getFavorite, setGetFavorite] = useState([]);
  const [cartOn, setCartOn] = useState(false);
  const [buttonPlusActive, setButtonPlusActive] = useState(false);
  const [priceCart, setPriceCart] = useState(0);
  const [onLoading, setOnLoading] = useState(true);

  useEffect(() => {
    async function fethData() {
      const itemsResponse = await axios.get(
        "https://cd918def291fc86a.mokky.dev/items"
      );
      const itemsCart = await axios.get(
        "https://cd918def291fc86a.mokky.dev/carts"
      );
      const itemsFavorite = await axios.get(
        "https://cd918def291fc86a.mokky.dev/favorite"
      );
      setOnLoading(false);
      setGetItems(itemsResponse.data);
      setGetCart(itemsCart.data);
      setGetFavorite(itemsFavorite.data);
      const summ = itemsCart.data.reduce((i, el) => el.price + i, 0);
      setPriceCart(summ);
    }
    fethData();
  }, []);

  const onPlusBasket = async (obj) => {
    try {
      if (getCart.find((el) => el.imageUrl === obj.imageUrl)) {
      } else {
        const { data } = await axios.post(
          "https://cd918def291fc86a.mokky.dev/carts",
          obj
        );
        setGetCart((prev) => [...prev, data]);
        // price();
      }
    } catch (error) {
      alert(`Не удалось добавить в корзину`);
    }
    summ();
  };

  const summ = async () => {
    const { data } = await axios.get(
      "https://cd918def291fc86a.mokky.dev/carts"
    );
    setPriceCart(data.reduce((i, el) => el.price + i, 0));
  };

  const cardDel = async (obj) => {
    try {
      await axios.delete(`https://cd918def291fc86a.mokky.dev/carts/${obj.id}`);
      // price();
      setGetCart((prev) => {
        return prev.filter((i) => {
          return obj.imageUrl !== i.imageUrl;
        });
      });
    } catch (error) {
      alert(`Не удалось удалить из корзины`);
    }
    summ();
  };

  const onPlusFavorite = async (obj) => {
    try {
      if (getFavorite.find((el) => el.imageUrl === obj.imageUrl)) {
        console.log(getFavorite);
        console.log(obj);
      } else {
        const { data } = await axios.post(
          "https://cd918def291fc86a.mokky.dev/favorite",
          obj
        );
        setGetFavorite((prev) => [...prev, data]);
      }
    } catch (error) {
      alert(`Не удалось добавить в избранное`);
    }
  };

  const onDelFavorite = async (obj) => {
    obj.id = getFavorite
      .filter((e) => e.imageUrl === obj.imageUrl)
      .map((e) => e.id);
    try {
      await axios.delete(
        `https://cd918def291fc86a.mokky.dev/favorite/${obj.id}`
      );
      setGetFavorite((prev) => {
        return prev.filter((i) => {
          return obj.imageUrl !== i.imageUrl;
        });
      });
    } catch (error) {
      alert(`Не удалось удалить из избранного`);
    }
  };

  const onClickBasket = () => {
    setCartOn(!cartOn);
    setTimeout(() => {
      document.querySelector("body").classList.toggle("ovf");
    }, 300);
  };

  return (
    <div className="wrap">
      <Header priceCart={priceCart} onClickBasket={onClickBasket}></Header>
      <Drawer
        setPriceCart={setPriceCart}
        summ={summ}
        priceCart={priceCart}
        cartOn={cartOn}
        setCartOn={setCartOn}
        getCart={getCart}
        cardDel={cardDel}
        setGetCart={setGetCart}
      />
      <HashRouter>
        <Route path="/" exact>
          <Home
            onDelFavorite={onDelFavorite}
            onPlusFavorite={onPlusFavorite}
            getFavorite={getFavorite}
            getItems={getItems}
            getCart={getCart}
            onPlusBasket={onPlusBasket}
            setButtonPlusActive={setButtonPlusActive}
            buttonPlusActive={buttonPlusActive}
            onLoading={onLoading}
          />
        </Route>

        <Route path="/favorites">
          <Favorites
            onDelFavorite={onDelFavorite}
            setGetFavorite={setGetFavorite}
            getFavorite={getFavorite}
            getCart={getCart}
            onPlusBasket={onPlusBasket}
          />
        </Route>
        <Route path="/orders">
          <Orders
            onDelFavorite={onDelFavorite}
            onPlusFavorite={onPlusFavorite}
            getFavorite={getFavorite}
            getItems={getItems}
            getCart={getCart}
            onPlusBasket={onPlusBasket}
            setButtonPlusActive={setButtonPlusActive}
            buttonPlusActive={buttonPlusActive}
            onLoading={onLoading}
          />
        </Route>
      </HashRouter>
    </div>
  );
}

export default App;
