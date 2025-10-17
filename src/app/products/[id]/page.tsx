"use client";
import React, { useState } from "react";
import { products } from "../../../components/home/ProductList";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { PriceTag } from "@/components/ui/PriceTag";
import { Button } from "@/components/ui/button";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import klarna from "../../../../public/klarna.png";
import cards from "../../../../public/cards.png";
import stripe from "../../../../public/stripe.png";
import Link from "next/link";
const Page = () => {
  const path = usePathname();
  const id = path.split("/").at(path.split("/").length - 1);

  const product = products.filter((p) => p.id === Number(id)).at(0);

  const [selectedSize, setSelectedSize] = useState<string>(
    product?.sizes.at(0) || ""
  );
  const [selectedColor, setSelectedColor] = useState<string>(
    product?.colors.at(0) || ""
  );

  const image = product?.images[selectedColor] || "";
  const [quantity, setQuantity] = useState(1);
  if (!product) return;
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <Image
        src={image}
        alt={product?.name || ""}
        width={300}
        height={600}
        className="w-full max-w-svw lg:w-5/12"
      />
      <div className="flex flex-col flex-grow gap-4">
        <h3 className="text-xl font-semibold">{product.name} </h3>
        <p className="text-xs text-text-muted">{product.description} </p>
        <PriceTag price={product.price.current} textSize="xl" />
        <div className="flex flex-col gap-1">
          <p className="text-text-muted text-xs">Size</p>
          <div className="flex gap-1">
            {product.sizes.map((size, index) => (
              <button
                onClick={() => setSelectedSize(size)}
                key={index}
                className={` border-[1px] w-7 h-7 flex justify-center items-center ${
                  size === selectedSize
                    ? "bg-text-primary text-text-inverse border-text-inverse outline-1  "
                    : ""
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-text-muted text-xs">Color</p>
          <div className="flex gap-1">
            {product.colors.map((color, index) => (
              <button
                onClick={() => setSelectedColor(color)}
                key={index}
                style={{ backgroundColor: color, outlineColor: color }}
                className={` border-1 w-7 h-7 flex justify-center items-center ${
                  color === selectedColor
                    ? " border-2 border-text-inverse outline-2  "
                    : ""
                }`}
              ></button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-text-muted text-xs">Quantity</p>
          <div className="flex gap-1 items-center">
            <button
              disabled={quantity < 2}
              onClick={() => setQuantity((q) => q - 1)}
              className={`text-xl border-[1px] w-7 h-7 flex justify-center items-center 
                 
                `}
            >
              -
            </button>
            <p className="font-semibold text-sm mx-2">{quantity}</p>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className={`text-xl  border-[1px] w-7 h-7 flex justify-center items-center hover: 
                 
                `}
            >
              +
            </button>
          </div>
        </div>
        <Button variant={"black"}>+Add to Cart</Button>
        <Button variant={"outline"}>
          <HiOutlineShoppingCart />
          Buy this Item
        </Button>
        <div className="flex gap-2 px-2">
          <Image
            src={klarna}
            alt="klarna"
            width={50}
            height={10}
            className=" rounded"
          />
          <Image
            src={cards}
            alt="visa card"
            width={50}
            height={10}
            className=" rounded"
          />
          <Image
            src={stripe}
            alt="stripe"
            width={50}
            height={10}
            className=" rounded"
          />
        </div>
        <p className="text-text-muted text-xs">
          By clicking Pay Now, you agree to our
          <Link className="underline cursor-pointer" href={"/term"}>
            {" "}
            Terms & Conditions{" "}
          </Link>
          and{" "}
          <Link className="underline cursor-pointer" href={"/policy"}>
            {" "}
            Privacy Policy.{" "}
          </Link>{" "}
          You autorize us to charge your selected payment method for the total
          amount shown. All sales are subject to our return and{" "}
          <Link className="underline cursor-pointer" href={"/refund"}>
            {" "}
            Refund Policies .{" "}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Page;
