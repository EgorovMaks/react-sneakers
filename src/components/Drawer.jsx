function Drawer() {
  return (
    <section className="drawer">
      <div className="drawer-box">
        <div className="titleBox">
          <h2>Корзина</h2>
          <button className="buttonClouse">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z"
                fill="#D3D3D3"
              />
            </svg>
          </button>
        </div>
        <div className="cards-box">
          <div className="cardBasket">
            <img src="./img/sneakers/card-sniakers-1.jpg" alt="Кроссовки" />
            <div>
              <span className="cardBasketName">
                Мужские Кроссовки Nike Air Max 270
              </span>
              <span className="cardBasketSumm">
                <b>12 999 руб.</b>
              </span>
            </div>
            <button className="buttonClouse">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z"
                  fill="#D3D3D3"
                />
              </svg>
            </button>
          </div>
          <div className="cardBasket">
            <img src="./img/sneakers/card-sniakers-2.jpg" alt="Кроссовки" />
            <div>
              <span className="cardBasketName">
                Мужские Кроссовки Nike Air Max 270
              </span>
              <span className="cardBasketSumm">
                <b>12 999 руб.</b>
              </span>
            </div>
            <button className="buttonClouse">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z"
                  fill="#D3D3D3"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="wrapBottom">
          <div className="summWrap">
            <span>Итого:</span>
            <span className="border"></span>
            <b>21 498 руб.</b>
          </div>
          <div className="summWrap">
            <span>Налог 5%:</span>
            <span className="border"></span>
            <b>1074 руб.</b>
          </div>
          <button className="GreenButton">
            Оформить зкаказ
            <span>
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 7H14.7143"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.71436 1L14.7144 7L8.71436 13"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Drawer
