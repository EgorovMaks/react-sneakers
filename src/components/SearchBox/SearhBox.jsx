import Search from "../SvgComponents/Search";
import style from "./SearhBox.module.scss";

function SearhBox({ getFilterItems, searchValue, setSearchValue }) {
  const onChangeSeatchInp = (event) => {
    setSearchValue(event.target.value);
  };

  const inputClear = () => {
    setSearchValue("");
  };

  return (
    <div className={style.sneakersTop}>
      <h1>
        {searchValue ? `Поиск по запросу "${searchValue}"` : `Все кросcовки`}
      </h1>
      <div className={style.searchBox}>
        <Search />
        <input
          value={searchValue}
          onChange={onChangeSeatchInp}
          id="contenInput"
          placeholder="Поиск..."
          type="text"
        />
        {searchValue ? (
          <img onClick={inputClear} src="./img/plus.svg" alt="img" />
        ) : null}
      </div>
    </div>
  );
}

export default SearhBox;
