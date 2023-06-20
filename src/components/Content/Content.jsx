import React from "react";
import Card from "../Card/Card";
import style from "./content.module.scss";



function Content(props) {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch("https://6491516f2f2c7ee6c2c8015d.mockapi.io/items")
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      setItems(json);
    });
  }, []);

  const btnPlus = (obj) =>{
    props.onPlus(obj)
  };

  const inp = (e) => {
    document.querySelector("#contenInput").focus();
  };
  return (
    <section className={style.content}>
      <div className={style.sneakersTop}>
        <h1>Все кросcовки</h1>
        <div className={style.searchBox} onClick={inp}>
          <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z"
              stroke="#E4E4E4"
              strokeWidth={2}
              strokeLinecap="round"
            />
          </svg>
          <input id="contenInput" placeholder="Поиск..." type="text" />
        </div>
      </div>
      <div className={style.sneakers}>
        {items.map((obj) => (
          <Card
            title={obj.title}
            price={obj.price}
            imageUrl={obj.imageUrl}
            key={obj.key}
            onPlus={btnPlus}
          />
        ))}
      </div>
    </section>
  );
}

export default Content;
