
import { Settings2, Anchor, Zap } from 'lucide-react';
import img1 from './images/img1.jpg'
import img2 from './images/img2.png'
import img3 from './images/img3.jpg'
import img4 from './images/img4.png'
import img5 from './images/img5.jpg'
import img6 from './images/img6.jpg'
import ProductCard from './productCard';

const products = [
  {
    name: "Велосипед - 26",
    priceWeek: "180 000 sym.",
    priceMonth: "400 000 sym.",
    oldPriceMonth: "450 000 sym.",
    image: img1,
    features: [
      { icon: <Settings2 size={14}/>, label: "9 skorostey" },
      { icon: <Anchor size={14}/>, label: "Udobnoe sidenie" },
      { icon: <Zap size={14}/>, label: "Mexanik tormoz" }
    ]
  },
  {
    name: "Велосипед - 26A",
    priceWeek: "200 000 сум.",
    priceMonth: "450 000 сум.",
    oldPriceMonth: "500 000 сум.",
    image: img2,
    features: [
      { icon: <Zap size={14}/>, label: "40km/chas" },
      { icon: <Zap size={14}/>, label: "do 6 chasov" },
      { icon: <Zap size={14}/>, label: "Gidravl. tormoz" }
    ]
  },
  {
    name: "Велосипед - 29",
    priceWeek: "700 000 sym.",
    priceMonth: "1 200 000 sym.",
    oldPriceMonth: "1 400 000 sym.",
    image: img3,
    features: [
      { icon: <Zap size={14}/>, label: "40km/chas" },
      { icon: <Zap size={14}/>, label: "do 6 chasov" },
      { icon: <Zap size={14}/>, label: "Gidravl. tormoz" }
    ]
  },
  {
    name: "Электровелосипед - 18",
    priceWeek: "700 000 sym.",
    priceMonth: "1 200 000 sym.",
    oldPriceMonth: "1 400 000 sym.",
    image: img4,
    features: [
      { icon: <Zap size={14}/>, label: "40km/chas" },
      { icon: <Zap size={14}/>, label: "do 6 chasov" },
      { icon: <Zap size={14}/>, label: "Gidravl. tormoz" }
    ]
  },
  {
    name: "Электровелосипед - 16",
    priceWeek: "700 000 sym.",
    priceMonth: "1 200 000 sym.",
    oldPriceMonth: "1 400 000 sym.",
    image: img5,
    features: [
      { icon: <Zap size={14}/>, label: "40km/chas" },
      { icon: <Zap size={14}/>, label: "do 6 chasov" },
      { icon: <Zap size={14}/>, label: "Gidravl. tormoz" }
    ]
  },
  {
    name: "Запасная батарея - 60V",
    priceWeek: "700 000 sym.",
    priceMonth: "1 200 000 sym.",
    oldPriceMonth: "1 400 000 sym.",
    image: img6,
    features: [
      { icon: <Zap size={14}/>, label: "40km/chas" },
      { icon: <Zap size={14}/>, label: "do 6 chasov" },
      { icon: <Zap size={14}/>, label: "Gidravl. tormoz" }
    ]
  }
];

const ProductList = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {products.map((p, index) => (
      <ProductCard key={index} {...p} />
    ))}
  </div>
);

export default ProductList;