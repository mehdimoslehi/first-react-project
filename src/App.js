import "./style.css";
import { Header } from "./header";
import { Card } from "./Card";
import { Footer } from "./footer";

const products = [
  { imgSrc: "https://picsum.photos/100/100", product: "shirt1" },
  { imgSrc: "https://picsum.photos/100/100", product: "t-shirt" },
  { imgSrc: "https://picsum.photos/100/100", product: "shoos" },
  { imgSrc: "https://picsum.photos/100/100", product: "slipers" },
  { imgSrc: "https://picsum.photos/100/100", product: "jeans" },
];
export default function App() {
  return (
    <div>
      <Header imgSrc="https://picsum.photos/100/25" />
      <div className="container">
        {products.map((item, i) => (
          <Card key={i} imgSrc={item.imgSrc} product={item.product} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
