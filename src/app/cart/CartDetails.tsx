import { Button } from "@/components/ui/button";
import { PriceTag } from "@/components/ui/PriceTag";
import React from "react";

const CartDetails = ({
  total,
  next,
  step,
}: {
  total: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  next: any;
  step: number;
}) => {
  const discount = total * -0.1;
  const shippingFee = 10;
  const totaltopay = total + discount + shippingFee;
  return (
    <div className="w-96 rounded-lg shadow-lg p-10 flex flex-col self-end xl:self-start">
      <h4 className="text-lg font-semibold my-4">Cart Details</h4>
      <div className="w-full flex flex-col gap-3 ">
        <div className="flex justify-between">
          <p className="text-sm text-text-muted">Subtotal</p>
          <PriceTag textSize="sm" price={total} />
        </div>
        <div className="flex justify-between">
          <p className="text-sm text-text-muted">{"Discount (10%)"}</p>
          <PriceTag
            textClassName="text-red-700"
            textSize="sm"
            price={discount}
          />
        </div>
        <div className="flex justify-between">
          <p className="text-sm text-text-muted">Shipping Fee</p>
          <PriceTag textSize="sm" price={shippingFee} />
        </div>
        <div className="bg-text-muted/50 h-px" />

        <div className="flex justify-between">
          <p className="text-lg font-semibold">Total</p>
          <PriceTag price={totaltopay} />
        </div>
      </div>
      {step == 0 && (
        <Button
          onClick={next}
          className="mt-2 bg-text-primary hover:bg-text-primary/50"
        >
          Continue
        </Button>
      )}
    </div>
  );
};

export default CartDetails;
