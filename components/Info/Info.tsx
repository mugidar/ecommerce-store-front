"use client"
import { Product } from "@/types";
import React from "react";
import Currency from "../ui/currency";
import Button from "../ui/button";
import { ShoppingCartIcon } from "lucide-react";
import useCart from "@/hooks/user-cart";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  const { addItem } = useCart();
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data.price} />
        </p>
      </div>
      <hr className="my-5" />
      <div className="flex items-center gap-x-4">
        <h3 className="font-semibold text-black">Size:</h3>
        <div>
          {data.size.name} ({data.size.value})
        </div>
      </div>{" "}
      <div className="flex items-center gap-x-4">
        <h3 className="font-semibold text-black">Color:</h3>
        <div>
          <span
            className="block rounded-full aspect-square w-5"
            style={{ backgroundColor: data.color.value }}
          ></span>
        </div>
      </div>
      <Button
        onClick={() => addItem(data)}
        className="flex items-center gap-x-2 mt-5"
      >
        Add to cart <ShoppingCartIcon />
      </Button>
    </div>
  );
};

export default Info;
