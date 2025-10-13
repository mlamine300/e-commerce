import Image from "next/image";
import { SelectedProduct } from "../../../../types";
import { HiOutlineTrash } from "react-icons/hi2";
import { PriceTag } from "@/components/ui/PriceTag";

const ProductRow = ({
  product,
  deleteProduct,
}: {
  product: SelectedProduct;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  deleteProduct: any;
}) => {
  return (
    <div className="w-full lg:w-[600px] h-40 flex items-center gap-8">
      <Image
        src={product.images[product.chosenColor]}
        alt={product.name}
        width={200}
        height={200}
        className="object-cover w-36 h-36 bg-text-muted/20"
      />
      <div className="w-full  h-full flex flex-col gap-1 py-2">
        <h4 className="font-semibold text-lg">{product.name} </h4>
        <p className="text-text-muted text-sm">{`Quantity: ${1}`}</p>
        <p className="text-text-muted text-sm">{`Size: ${product.chosenSize}`}</p>
        <p className="text-text-muted text-sm">{`Color: ${product.chosenColor}`}</p>
        <PriceTag price={product.price.current} className="mt-auto mb-0" />
      </div>
      <div className="h-full  flex justify-center items-center">
        <HiOutlineTrash
          onClick={() => deleteProduct(product.id)}
          className="w-7 h-7 p-1 text-red-700 rounded-full bg-red-300/50 cursor-pointer hover:bg-red-300"
        />
      </div>
    </div>
  );
};

export default ProductRow;
