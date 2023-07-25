import style from "./empty.module.scss";
import styleBtn from "../../componetsScss/greenButton.module.scss";

const Empty = ({ imageUrl, title, btnClick, alt, text }) => {
  return (
    <div className={style.empty}>
      <div className={style.imageWrap}>
        <img className={style.image} src={imageUrl} alt={alt} />
      </div>
      <p className={style.title}>{title}</p>
      <p className={style.text}>{text}</p>
      <button
        className={`${styleBtn.greenButton} ${style.btn}`}
        onClick={btnClick}
      >
        {" "}
        Вернуться назад
      </button>
    </div>
  );
};

export default Empty;
