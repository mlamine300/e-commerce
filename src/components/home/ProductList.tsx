import React from "react";
import ProductCard from "../ProductCard";
import { Product } from "../../../../types";
const products = [
  {
    id: 1,
    name: "Adidas CoreFit T-Shirt",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 39.9,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "green", "purple"],
    images: {
      gray: "/products/1g.png",
      green: "/products/1gr.png",
      purple: "/products/1p.png",
    },
  },
  {
    id: 2,
    name: "Puma Ultra Warm Zip",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 59.9,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "green"],
    images: {
      gray: "/products/2g.png",
      green: "/products/2gr.png",
    },
  },
  {
    id: 3,
    name: "Nike Breeze Hoodie",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 64.9,
    sizes: ["s", "m", "l", "xl"],
    colors: ["black", "blue", "gray"],
    images: {
      black: "/products/3b.png",
      blue: "/products/3bl.png",
      gray: "/products/3gr.png",
    },
  },
  {
    id: 4,
    name: "Reebok Pulse Tank",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 34.9,
    sizes: ["s", "m", "l"],
    colors: ["pink", "white"],
    images: {
      pink: "/products/4p.png",
      white: "/products/4w.png",
    },
  },
  {
    id: 5,
    name: "Under Armour Velocity Jacket",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 89.9,
    sizes: ["m", "l", "xl", "xxl"],
    colors: ["blue", "orange", "red"],
    images: {
      blue: "/products/5bl.png",
      orange: "/products/5o.png",
      red: "/products/5r.png",
    },
  },
  {
    id: 6,
    name: "Columbia Active Tee",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 44.9,
    sizes: ["s", "m", "l"],
    colors: ["green", "white"],
    images: {
      green: "/products/6g.png",
      white: "/products/6w.png",
    },
  },
  {
    id: 7,
    name: "North Face Trail Fleece",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 74.9,
    sizes: ["m", "l", "xl"],
    colors: ["green", "purple"],
    images: {
      green: "/products/7g.png",
      purple: "/products/7p.png",
    },
  },
  {
    id: 8,
    name: "New Balance Thermal Hoodie",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 79.9,
    sizes: ["s", "m", "l", "xl"],
    colors: ["black", "gray"],
    images: {
      black: "/products/8b.png",
      gray: "/products/8gr.png",
    },
  },
] as Product[];

const ProductList = () => {
  return (
    <div className="grid gap-2 justify-items-center grid-col-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
