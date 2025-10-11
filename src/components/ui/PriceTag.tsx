import * as React from "react";

import { Badge } from "@/components/ui/badge";
import { twMerge } from "tailwind-merge";

interface PriceTagProps {
  price: number;
  currency?: string; // default: USD
  originalPrice?: number; // for showing discount
  className?: string;
}

export const PriceTag: React.FC<PriceTagProps> = ({
  price,
  currency = "$",
  originalPrice,
  className,
}) => {
  const isDiscounted = originalPrice && originalPrice > price;
  const discountPercent = isDiscounted
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <div className={twMerge("flex items-baseline gap-2", className)}>
      {/* Current Price */}
      <span className="text-lg font-semibold text-text-primary">
        {currency}
        {price.toFixed(2)}
      </span>

      {/* Original Price (if discounted) */}
      {isDiscounted && (
        <>
          <span className="text-muted-foreground line-through text-sm">
            {currency}
            {originalPrice?.toFixed(2)}
          </span>
          <Badge variant="secondary" className="text-xs font-medium">
            -{discountPercent}%
          </Badge>
        </>
      )}
    </div>
  );
};
