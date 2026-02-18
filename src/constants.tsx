import card1 from './/images/card2Img/card1.png'
import card2 from './/images/card2Img/card2.png'
import card3 from './/images/card2Img/card3.png'
import card4 from './/images/card2Img/card4.png'
import card5 from './/images/card2Img/card5.png'
import card6 from './/images/card2Img/card6.png'
import card7 from './/images/card2Img/card7.png'
import card8 from './/images/card2Img/card8.png'
import card9 from './/images/card2Img/card9.png'

export interface Equipment {
  id: number;
  title: string;
  version: string;
  image: string; // Rasm manzili
  price1Month: string;
  price2Months: string;
  oldPrice2Months?: string;
  stats: {
    label: string;
    value: string;
    iconType: 'weight' | 'speed' | 'mass' | 'level' | 'vibro';
  }[];
}

export const equipmentData: Equipment[] = [
  {
    id: 1,
    title: "Беговая дорожка",
    version: "V1",
    image: card1,
    price1Month: "400 000 сум.",
    price2Months: "700 000 сум.",
    oldPrice2Months: "800 000 сум.",
    stats: [
      { label: "Макс вес", value: "90кг", iconType: 'weight' },
      { label: "Скорость", value: "8/16", iconType: 'speed' },
      { label: "Вибро массаж", value: "", iconType: 'vibro' },
    ]
  },
  {
    id: 2,
    title: "Беговая дорожка",
    version: "V1",
    image: card2,
    price1Month: "400 000 сум.",
    price2Months: "700 000 сум.",
    oldPrice2Months: "800 000 сум.",
    stats: [
      { label: "Макс вес", value: "90кг", iconType: 'weight' },
      { label: "Скорость", value: "8/16", iconType: 'speed' },
      { label: "Вибро массаж", value: "", iconType: 'vibro' },
    ]
  },
  {
    id: 3,
    title: "Беговая дорожка",
    version: "V1",
    image: card3 ,
    price1Month: "400 000 сум.",
    price2Months: "700 000 сум.",
    oldPrice2Months: "800 000 сум.",
    stats: [
      { label: "Макс вес", value: "90кг", iconType: 'weight' },
      { label: "Скорость", value: "8/16", iconType: 'speed' },
      { label: "Вибро массаж", value: "", iconType: 'vibro' },
    ]
  },
  {
    id: 4,
    title: "Беговая дорожка",
    version: "V1",
    image: card4,
    price1Month: "400 000 сум.",
    price2Months: "700 000 сум.",
    oldPrice2Months: "800 000 сум.",
    stats: [
      { label: "Макс вес", value: "90кг", iconType: 'weight' },
      { label: "Скорость", value: "8/16", iconType: 'speed' },
      { label: "Вибро массаж", value: "", iconType: 'vibro' },
    ]
  },
  {
    id: 5,
    title: "Беговая дорожка",
    version: "V1",
    image: card5,
    price1Month: "400 000 сум.",
    price2Months: "700 000 сум.",
    oldPrice2Months: "800 000 сум.",
    stats: [
      { label: "Макс вес", value: "90кг", iconType: 'weight' },
      { label: "Скорость", value: "8/16", iconType: 'speed' },
      { label: "Вибро массаж", value: "", iconType: 'vibro' },
    ]
  },
  {
    id: 6,
    title: "Беговая дорожка",
    version: "V1",
    image: card6,
    price1Month: "400 000 сум.",
    price2Months: "700 000 сум.",
    oldPrice2Months: "800 000 сум.",
    stats: [
      { label: "Макс вес", value: "90кг", iconType: 'weight' },
      { label: "Скорость", value: "8/16", iconType: 'speed' },
      { label: "Вибро массаж", value: "", iconType: 'vibro' },
    ]
  },
  {
    id: 7,
    title: "Беговая дорожка",
    version: "V1",
    image: card7,
    price1Month: "400 000 сум.",
    price2Months: "700 000 сум.",
    oldPrice2Months: "800 000 сум.",
    stats: [
      { label: "Макс вес", value: "90кг", iconType: 'weight' },
      { label: "Скорость", value: "8/16", iconType: 'speed' },
      { label: "Вибро массаж", value: "", iconType: 'vibro' },
    ]
  },
  {
    id: 8,
    title: "Беговая дорожка",
    version: "V1",
    image: card8,
    price1Month: "400 000 сум.",
    price2Months: "700 000 сум.",
    oldPrice2Months: "800 000 сум.",
    stats: [
      { label: "Макс вес", value: "90кг", iconType: 'weight' },
      { label: "Скорость", value: "8/16", iconType: 'speed' },
      { label: "Вибро массаж", value: "", iconType: 'vibro' },
    ]
  },
  {
    id: 9,
    title: "Беговая дорожка",
    version: "V1",
    image: card9,
    price1Month: "400 000 сум.",
    price2Months: "700 000 сум.",
    oldPrice2Months: "800 000 сум.",
    stats: [
      { label: "Макс вес", value: "90кг", iconType: 'weight' },
      { label: "Скорость", value: "8/16", iconType: 'speed' },
      { label: "Вибро массаж", value: "", iconType: 'vibro' },
    ]
  }
];