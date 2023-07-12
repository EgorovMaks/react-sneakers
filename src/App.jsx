import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";
import Content from "./components/Content/Content";
import React from "react";
import axios from "axios";
import Favorite from "./components/Favorite/Favorite";

function App(props) {
  const [basketOpen, setBasketOpen] = React.useState(false);
  const [cardBasket, setCardBasket] = React.useState([]);
  const [onFavorite, setOnFavorite] = React.useState(false);
  const [onPlusFavorite, setOnPlusFavorite] = React.useState([]);
  const bodyOvf = () => {
    setBasketOpen(false);
    document.querySelector("body").classList.remove("ovf");
  };

  React.useEffect(() => {
    axios.get("https://19bd238effe8a2ff.mokky.ru/carts").then((res) => {
      setCardBasket(res.data);
    });
  }, []);

  React.useEffect(() => {
    axios.get("https://19bd238effe8a2ff.mokky.ru/favorite").then((res) => {
      setOnPlusFavorite(res.data);
    });
  }, []);

  const onPlusBasket = (obj) => {
    if (cardBasket.find((el) => el.imageUrl.includes(obj.imageUrl) === true)) {
    } else {
      axios.post("https://19bd238effe8a2ff.mokky.ru/carts", obj);
      setCardBasket((prev) => [...prev, obj]);
    }
  };

  const bodyOvfOff = () => {
    setBasketOpen(true);
    document.querySelector("body").classList.add("ovf");
  };

  const delPlus = () => {};

  const cardDel = (obj) => {
    delPlus(obj);
    setTimeout(() => {
      axios.delete(`https://19bd238effe8a2ff.mokky.ru/carts/${obj.id}`);
    }, 1000);
    setCardBasket((prev) => {
      return prev.filter((i) => {
        return obj.imageUrl !== i.imageUrl;
      });
    });
  };

  const onFavoriteClick = () => {
    setOnFavorite(!onFavorite);
  };

  const onPlusFavorites = (obj) => {
    if (
      onPlusFavorite.find((el) => el.imageUrl.includes(obj.imageUrl) === true)
    ) {
    } else {
      axios.post("https://19bd238effe8a2ff.mokky.ru/favorite", obj);
      setOnPlusFavorite((prev) => [...prev, obj]);
    }
  };

  const onDelFavorite = (obj) => {
    delPlus(obj);
    setTimeout(() => {
      axios.delete(`https://19bd238effe8a2ff.mokky.ru/favorite/${obj.id}`);
    }, 1000);
    setOnPlusFavorite((prev) => {
      return prev.filter((i) => {
        return obj.imageUrl !== i.imageUrl;
      });
    });
  };

  

  return (
    <div className="wrap">
      <Header onClickBasket={bodyOvfOff} onFavoriteClick={onFavoriteClick} />
      <Drawer
        delPlus={delPlus}
        cardDel={cardDel}
        cardBasket={cardBasket}
        basketOpen={basketOpen}
        basketClouse={bodyOvf}
      />
      {onFavorite ? null : (
        <Content filterBuscet={cardBasket} onPlus={onPlusBasket} onPlusFavorite={onPlusFavorites} />
      )}

      {onFavorite ? (
        <Favorite
          onDelFavorite={onDelFavorite}
          onPlusBasket={onPlusBasket}
          onPlusFavorites={onPlusFavorite}
        />
      ) : null}
    </div>
  );
}

export default App;
