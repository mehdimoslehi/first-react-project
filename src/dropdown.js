import { useState } from "react";
import "./style.css";

export function Dropdown() {
  const [products, setProducts] = useState([
    "shirt1",
    "t-shirt",
    "shoos",
    "slipers",
    "jeans",
  ]);
  const [mainDivClass, setmainDivClass] = useState("hidden");
  const [searchValue, setSearchValue] = useState("");
  const [addValue, setAddValue] = useState("");
  const showHide = () => {
    setmainDivClass(mainDivClass === "hidden" ? "visible" : "hidden");
  };
  const addToList = (e) => {
    setAddValue(e.target.value);
  };
  const handelAddToList = () => {
    setProducts([...products, addValue]);
    setAddValue("");
  };
  const search = (e) => {
    setSearchValue(e.target.value);
    console.log(searchValue);
  };
  return (
    <div>
      <button className="dropdown" onClick={showHide}>
        Dropdown
      </button>
      <div className={mainDivClass}>
        <input placeholder="addToList" value={addValue} onChange={addToList} />
        <button onClick={handelAddToList}>Add</button> <br />
        <input
          className="search-input"
          type="search"
          value={searchValue}
          placeholder="search"
          onChange={search}
        />
        {products
          .filter((item) => item.toLowerCase().includes(searchValue))
          .map((value, index) => (
            <p key={index}>{value}</p>
          ))}
      </div>
    </div>
  );
}
