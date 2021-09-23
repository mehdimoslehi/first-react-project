import { useState } from "react";
import "./style.css";

export function Dropdown() {
  const [products, setProducts] = useState([
    { name: "shirt1", desc: "blue" },
    { name: "t-shirt1", desc: "red" },
    { name: "shoos", desc: "white" },
    { name: "slipers", desc: "black" },
    { name: "jeans", desc: "pink" },
  ]);
  const [mainDivClass, setmainDivClass] = useState("hidden");
  const [searchValue, setSearchValue] = useState("");
  const [addValue, setAddValue] = useState("");
  const [descValue, setDescValue] = useState("");

  const showHide = () => {
    setmainDivClass(mainDivClass === "hidden" ? "visible" : "hidden");
  };
  const addToList = (e) => {
    setAddValue(e.target.value);
  };
  const handelAddToList = () => {
    setProducts([...products,{name: addValue,desc: descValue}]);
    setAddValue("");
    setDescValue("");
  };
  const search = (e) => {
    setSearchValue(e.target.value);
    console.log(searchValue);
  };

  const addDesc = (e) => setDescValue(e.target.value);

  return (
    <div>
      <button className="dropdown" onClick={showHide}>
        Dropdown
      </button>
      <div className={mainDivClass}>
        <input placeholder="addToList" value={addValue} onChange={addToList} />
        <button onClick={handelAddToList}>Add</button> <br />
        <textarea
          className="text-area"
          placeholder="desciption"
          value={descValue}
          onChange={addDesc}
        ></textarea>{" "}
        <br />
        <input
          className="search-input"
          type="search"
          value={searchValue}
          placeholder="search"
          onChange={search}
        />
        {products
          .filter((item) => (item.name.toLowerCase().includes(searchValue)||item.desc.toLowerCase().includes(searchValue)))
          .map((item, index) => (
            <p key={index}>{item.name}, { item.desc}</p>
          ))}
      </div>
    </div>
  );
}
