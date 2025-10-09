import Image from "next/image";

import logo from "../../../../public/logo.svg";
import Link from "next/link";
import SearchBar from "../header/SearchBar";
import {
  HiOutlineBellAlert,
  HiOutlineHome,
  HiOutlineShoppingCart,
} from "react-icons/hi2";
import { Button } from "@/components/ui/button";
const Header = () => {
  return (
    <header
      className="w-full h-14 border-b border-black/10
     mb-2 flex justify-between items-center"
    >
      <Link href={"/"} className="flex w-fit gap-2 items-center">
        <Image
          width={40}
          height={40}
          className="h-8 w-8 md:w-10 md:h-10 overflow-hidden"
          alt="buynux"
          src={logo}
        />
        <h3 className="hidden md:flex font-semibold text-lg text-text">
          NuxBuy
        </h3>
      </Link>
      <div className="flex items-center gap-3 ">
        <SearchBar />
        <HiOutlineHome className="text-xl hover:text-primary" />
        <HiOutlineBellAlert className="text-xl hover:text-primary" />
        <HiOutlineShoppingCart className="text-xl hover:text-primary" />
        <Button asChild variant={"ghost"}>
          <Link href={"/login"}>Sign in</Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
