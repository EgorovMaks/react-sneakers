import '../../componetsScss/greenButton.scss'
import './drawerSumm.scss'

function DrawerSumm() {
  return (
    <div className="drawerSumm">
      <div className="drawerSummWrap">
        <span className="summTitle">Итого:</span>
        <span className="summBorder"></span>
        <span className="summPrice">21 498 руб.</span>
      </div>
      <div className="drawerSummWrap">
        <span className="summTitle">Налог 5%</span>
        <span className="summBorder"></span>
        <span className="summPrice">1074 руб.</span>
      </div>
      <button className="greenButton" >Оформить заказ</button>
    </div>
  );
}

export default DrawerSumm