import React from "react";
import Card from "../Card/Card";
import style from './content.module.scss';

const arr = [
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 12900,
    imageUrl: "./img/sneakers/card-sniakers-1.jpg",
    key: 1,
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    price: 15600,
    imageUrl: "./img/sneakers/card-sniakers-2.jpg",
    key: 2,
  },
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 8499,
    imageUrl: "./img/sneakers/card-sniakers-3.jpg",
    key: 3,
  },
  {
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: 8999,
    imageUrl: "./img/sneakers/card-sniakers-4.jpg",
    key: 4,
  },
];

function Content(props) {
  const [isAdd, setIsAdd] = React.useState(false);


  const btnClickPlus = () => {
    setIsAdd(true);
  };


  console.log(isAdd)




  const btnClickFavorite = () => {
    console.log(321)
  };
  const inp =(e) => {
    document.querySelector("#contenInput").focus();
  } 
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
        {arr.map((obj) => (
          <Card
            title={obj.title}
            price={obj.price}
            imageUrl={obj.imageUrl}
            key={obj.key}
            onClickPlus={btnClickPlus}
            onClickFavorite={btnClickFavorite}
            isAdd={isAdd}
          />
        ))}
      </div>
    </section>
  );
};

export default Content
