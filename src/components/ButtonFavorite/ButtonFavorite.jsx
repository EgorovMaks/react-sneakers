import HeartTrue from '../SvgComponents/HeartTrue';
import style from './buttonFavorite.scss';
import Heart from '../SvgComponents/Heart'

function ButtonFavorite({isFavorite, onPlusFavorite}) {
  return (
    <>
      <button onClick={onPlusFavorite} className="buttonFavorite">
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
