"use client";
import { Product } from "@/types";
import Image from "next/image";
import React from "react";
import IconButton from "../ui/icon-button";
import { X } from "lucide-react";
import useCart from "@/hooks/user-cart";

interface CartItemProps {
  data: Product;
}
const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const cart = useCart();
  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={data.images ? data.images[0].url : ""}
          alt=""
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-[-100%] top-0">
          <IconButton onClick={() => cart.removeItem(data.id)} icon={<X />} />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className="text-llg font-semibold text-black">{data.name}</p>
          </div>
          <div className="flex text-sm items-center">
            <p className="text-gray-500">{data.color.name}</p>
            <p className="text-gray-500 ml-4 border-l border-gray-200 pl-4">
              {data.size.name}{" "}
              <b className="text-black">({data.size.value}) </b>
            </p>
            <em className="font-bold ml-5 text-3xl">{data.price}$</em>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
