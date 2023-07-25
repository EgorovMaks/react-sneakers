import  styleBtn from'../../componetsScss/greenButton.module.scss'
import style from './drawerSumm.module.scss'

function DrawerSumm({ placeAnOrder, priceCart }) {
  return (
    <div className={style.drawerSumm}>
      <div className={style.drawerSummWrap}>
        <span className={style.summTitle}>Итого:</span>
        <span className={style.summBorder}></span>
        <span className={style.summPrice}>
          {priceCart.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} руб.
        </span>
      </div>
      <div className={style.drawerSummWrap}>
        <span className={style.summTitle}>Налог 5%</span>
        <span className={style.summBorder}></span>
        <span className={style.summPrice}>
          {Math.round((priceCart / 100) * 5)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
          руб.
        </span>
      </div>
      <button onClick={placeAnOrder} className={styleBtn.greenButton}>
        Оформить заказ
      </button>
    </div>
  );
}

export default DrawerSumm