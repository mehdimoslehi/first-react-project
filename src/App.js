import "./style.css";
import { Header } from "./header";
import { Card } from "./Card";
import { Footer } from "./footer";
import { Dropdown } from "./dropdown";

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
      <Dropdown/>
    </div>
  );
}

// import "./style.css";

// import { Card } from "./Card";

// import Footer from "./footer";

// import Header from "./header";

// export default function App() {
//   const list = [
//     {
//       title: "Mehdi",
//       image: "https://static.farakav.com/files/pictures/thumb/01640581.jpg",
//     },
//     {
//       title: "Ramin",
//       image: "https://static2.farakav.com/files/pictures/01638771.jpg",
//     },

//     {
//       title: "Rana",
//       image: "https://static.farakav.com/files/pictures/thumb/01634267.jpg",
//     },
//   ];

//   return (
//     <div>
//       <Header imageSrc="https://static.farakav.com/v3content/assets/img/identity/varzesh3-logo.png" />
//       <div className="container">
//         {list.map((item, index) => {
//           return <Card key={index} title={item.title} imageSrc={item.image} />;
//         })}
//       </div>
//       <Footer
//         companyName="powerd by rechat"
//         logoSrc="https://static.farakav.com/v3content/assets/img/identity/varzesh3-logo.png"
//       />
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <div className="container">
//       <Card
//         title="Mehdi"
//         imageSrc="https://static.farakav.com/files/pictures/thumb/01640581.jpg"
//       />
//       <Card
//         title="Ramin"
//         imageSrc="https://static2.farakav.com/files/pictures/01638771.jpg"
//       />
//       <Card
//         title="Fatemeh"
//         imageSrc="https://static.farakav.com/files/pictures/thumb/01634267.jpg"
//       />
//     </div>
//   );
// }
