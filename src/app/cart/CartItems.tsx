"use client";
import React, { useState } from "react";
import ProductRow from "./ProductRow";
import Link from "next/link";
import { SelectedProduct } from "../../../../types";

const CartItems = ({
  products,
  deleteProduct,
}: {
  products: SelectedProduct[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  deleteProduct: any;
}) => {
  return (
    <div className="rounded-lg shadow-lg gap-4 p-5 flex flex-col ">
      <p className="text-sm font-semibold p-5">Cart Items</p>
      {products.length > 0 ? (
        products.map((product, index) => (
          <ProductRow
            key={index}
            product={product}
            deleteProduct={deleteProduct}
          />
        ))
      ) : (
        <Link className="font-semibold text-lg py-48 mx-auto" href={"/"}>
          There is no Product to buy comeBack to HomePage.
        </Link>
      )}
    </div>
  );
};

export default CartItems;
