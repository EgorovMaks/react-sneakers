import HeartTrue from '../SvgComponents/HeartTrue';
import style from './buttonFavorite.module.scss';
import Heart from '../SvgComponents/Heart'

function ButtonFavorite({isFavorite, onPlusFavorite}) {
  return (
    <>
      <button onClick={onPlusFavorite} className={style.buttonFavorite}>
        {isFavorite() ? (
          <>
            <Heart />
            <HeartTrue />
          </>
        ) : (
          <>
            <Heart />
          </>
        )}
      </button>
    </>
  );
}

export default ButtonFavorite
