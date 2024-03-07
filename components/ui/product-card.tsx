"use client";
import { Product } from "@/types";
import Image from "next/image";
import React, { MouseEventHandler } from "react";
import IconButton from "./icon-button";
import { Expand, ShoppingCartIcon } from "lucide-react";
import Currency from "./currency";
import { useRouter } from "next/navigation";
import PreviewModal from "../PreviewModal/PreviewModal";
import usePreviewModal from "@/hooks/use-preview";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();
  const previewModal = usePreviewModal();
  const handleClick = () => {
    router.push(`/product/${data.id}`);
  };
  const onPreview: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    previewModal.onOpen(data);
  };
  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
    >
      <div className="aspect-square  rounded-xl bg-gray-200 relative">
        <Image
          alt={data?.name}
          src={data?.images[0]?.url}
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="absolute flex flex-col gap-3 opacity-0 top-5 right-5 group-hover:opacity-100 transition">
          <IconButton onClick={(e) => onPreview(e)} icon={<Expand />} />
          <IconButton onClick={() => {}} icon={<ShoppingCartIcon />} />
        </div>
      </div>

      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category.name}</p>
      </div>
      <div>
        <Currency value={data.price} />
      </div>
    </div>
  );
};

export default ProductCard;
