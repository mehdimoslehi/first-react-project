export function Header({ imgSrc }) {
  return (
    <div className="header">
      <img src={imgSrc} />
      <div>
         <input
        type="search"
        placeholder="type something"
        />
        <button>search</button>
      </div>
     
    </div>
  );
}
