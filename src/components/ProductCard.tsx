"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Product } from "../../../types";

import { SelectList } from "./ui/SelectList";
import ColorOptions from "./ColorOptions";
import { PriceTag } from "./ui/PriceTag";
import { Button } from "./ui/button";
import { HiOutlineShoppingCart } from "react-icons/hi2";
const ProductCard = ({ product }: { product: Product }) => {
  const [color, setColor] = useState<string>(product.colors.at(0) || "");
  const [size, setSize] = useState(product.sizes.at(0) || "m");
  const image = product.images[color] || product.images[0];
  const handleAddToCart = () => {
    alert(product.name);
  };
  return (
    <div className="flex flex-col  bg-muted shadow-lg rounded-sm w-80  lg:w-60 items-center overflow-hidden">
      <Image
        width={180}
        height={320}
        alt={product.name}
        src={image}
        className="w-full"
      />
      <div className="flex flex-col gap-2 p-2 bg-white w-80 lg:w-60">
        <h4 className="text-text-primary text-sm font-semibold">
          {product.name}{" "}
        </h4>
        <p className="text-text-muted text-[10px] text-wrap h-12 truncate">
          {product.description}
        </p>
        <div className="flex gap-2 items-center">
          <div className="flex flex-col gap-1 ">
            <p className="text-[10px] ml-1 text-text-muted">Size </p>
            <SelectList
              list={product.sizes}
              value={size}
              onValueChange={setSize}
              className="w-16"
              size="sm"
            />
          </div>

          <div className="flex flex-col gap-1 ">
            <p className="text-[10px] ml-1 text-text-muted">Color </p>
            <ColorOptions
              color={color}
              colorList={product.colors}
              setColor={setColor}
            />
          </div>
        </div>
        <div className="flex justify-between">
          <PriceTag price={product.price} />
          <Button
            onClick={() => handleAddToCart()}
            size={"sm"}
            className="text-xs cursor-pointer"
            variant={"outline"}
          >
            <HiOutlineShoppingCart />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
