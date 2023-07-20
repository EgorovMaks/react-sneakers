import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import axios from "axios";
import Drawer from "./components/Drawer/Drawer";
import Favorite from "./components/Favorite/Favorite";

function App(props) {
  const [getItems, setGetItems] = useState([]);
  const [getCart, setGetCart] = useState([]);
  const [getFavorite, setGetFavorite] = useState([]);
  const [cartOn, setCartOn] = useState(false);
  const [buttonPlusActive, setButtonPlusActive] = useState(false);
  const [favoriteOn, setFavoriteOn] = useState(false);
  const [priceCart, setPriceCart] = useState(0);

  useEffect(() => {
    axios.get("https://19bd238effe8a2ff.mokky.ru/items").then((res) => {
      setGetItems(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get("https://19bd238effe8a2ff.mokky.ru/carts").then((res) => {
      setGetCart(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get("https://19bd238effe8a2ff.mokky.ru/favorite").then((res) => {
      setGetFavorite(res.data);
    });
  }, []);

  const onPlusBasket = async (obj) => {
    try {
      if (getCart.find((el) => el.imageUrl.includes(obj.imageUrl) === true)) {
      } else {
        await axios.post("https://19bd238effe8a2ff.mokky.ru/carts", obj);
        setGetCart((prev) => [...prev, obj]);
      }
    } catch (error) {
      alert(`Не удалось добавить в корзину`)
    }
  };

  const cardDel = async (obj) => {
    try {
      await axios.delete(`https://19bd238effe8a2ff.mokky.ru/carts/${obj.id}`);

      setGetCart((prev) => {
        return prev.filter((i) => {
          return obj.imageUrl !== i.imageUrl;
        });
      });
    } catch (error) {
      alert(`Не удалось удалить из корзины`)
    }
  };

  const onPlusFavorite = async (obj) => {
    try {
      if (
        getFavorite.find((el) => el.imageUrl.includes(obj.imageUrl) === true)
      ) {
      } else {
        await axios.post("https://19bd238effe8a2ff.mokky.ru/favorite", obj);
        setGetFavorite((prev) => [...prev, obj]);
      }
    } catch (error) {
      alert(`Не удалось добавить в избранное`)
    }
  };

  const onDelFavorite = async (obj) => {
    try {
      await axios.delete(
        `https://19bd238effe8a2ff.mokky.ru/favorite/${obj.id}`
      );

      setGetFavorite((prev) => {
        return prev.filter((i) => {
          return obj.imageUrl !== i.imageUrl;
        });
      });
    } catch (error) {
      alert(`Не удалось удалить из избранного`)
    }
  };

  const onClickBasket = () => {
    setCartOn(!cartOn);
    document.querySelector("body").classList.toggle("ovf");
  };

  const onFavoriteClick = () => {
    setFavoriteOn(!favoriteOn);
  };

  const price = () => {
    setPriceCart();
  };

  return (
    <div className="wrap">
      <Header
        priceCart={priceCart}
        onClickBasket={onClickBasket}
        onFavoriteClick={onFavoriteClick}
      ></Header>
      {cartOn && (
        <Drawer
          cartOn={cartOn}
          setCartOn={setCartOn}
          getCart={getCart}
          cardDel={cardDel}
        />
      )}
      {favoriteOn ? (
        <Favorite
          onDelFavorite={onDelFavorite}
          setGetFavorite={setGetFavorite}
          getFavorite={getFavorite}
          getCart={getCart}
          onPlusBasket={onPlusBasket}
        />
      ) : (
        <Content
          onDelFavorite={onDelFavorite}
          onPlusFavorite={onPlusFavorite}
          getFavorite={getFavorite}
          getItems={getItems}
          getCart={getCart}
          onPlusBasket={onPlusBasket}
          setButtonPlusActive={setButtonPlusActive}
          buttonPlusActive={buttonPlusActive}
        />
      )}
    </div>
  );
}

export default App;
