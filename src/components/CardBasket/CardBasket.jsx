import styleBtnClouse from "../../componetsScss/buttonClouse.module.scss";
import style from './cardBasket.module.scss';



function CardBasket({title, imageUrl, price, delInfo, id}) {

  const cardDelBusket = () =>{
    delInfo({imageUrl, price, title, id})
    
  }



  return (
    <div className={style.cardBasket}>
      <img
        src={`./img/sneakers/card-sniakers-${imageUrl}.jpg`}
        alt="Кроссовки"
      />
      <div>
        <span className={style.cardBasketName}>{title}</span>
        <span>
          <b>{price} руб.</b>
        </span>
      </div>
      <button onClick={cardDelBusket} className={styleBtnClouse.buttonClouse}>
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
  );
}

export default CardBasket;
