export function Card({ imgSrc , product }) {
  return (
    <div className="card">
      <img src={imgSrc} />
      <p>{product}</p>
    </div>
  );
}
