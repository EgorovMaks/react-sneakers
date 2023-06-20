import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";
import Content from "./components/Content/Content";
import React from "react";
function App() {
  const [basketOpen, setBasketOpen] = React.useState(false);
  const [cardBasket, setCardBasket] = React.useState([]);
  const bodyOvf = () =>{
    setBasketOpen(false);
    document.querySelector("body").classList.remove("ovf");
  }
  const bodyOvfOff = () => {
    setBasketOpen(true);
    document.querySelector("body").classList.add("ovf");
  }
  const onPlusBasket = (obj) =>{
    setCardBasket(prev=> [...prev, obj])
  }
  return (
    <div className="wrap">
      <Header onClickBasket={bodyOvfOff} />
      <Drawer cardBasket={cardBasket} basketOpen = {basketOpen} basketClouse={bodyOvf}/>
      <Content 
      onPlus={onPlusBasket}
      />
    </div>
  );
}

export default App;
