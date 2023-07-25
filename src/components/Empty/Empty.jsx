import style from "./empty.module.scss";
import styleBtn from "../../componetsScss/greenButton.module.scss";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Empty = ({ imageUrl, title, btnClick, alt, text }) => {
  return (
    <div className={style.empty}>
      <div className={style.imageWrap}>
        <img className={style.image} src={imageUrl} alt={alt} />
      </div>
      <p className={style.title}>{title}</p>
      <p className={style.text}>{text}</p>

      {btnClick ? (
        <button
          className={`${styleBtn.greenButton} ${style.btn}`}
          onClick={btnClick}
        >
          {" "}
          Вернуться назад
        </button>
      ) : (
        <Link
          to="/react-sneakers/"
          className={`${styleBtn.greenButton} ${style.btn}`}
        >
          Вернуться назад
        </Link>
      )}
    </div>
  );
};

export default Empty;
