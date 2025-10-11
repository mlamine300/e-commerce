import Image from "next/image";
import featured from "../../public/featured.png";
import ProductList from "@/components/home/ProductList";

export default function Home() {
  return (
    <div className="">
      <div className="relative aspect-[3/1] mb-12">
        <Image src={featured} fill alt="cover" className="" />
      </div>
      <ProductList />
    </div>
  );
}
