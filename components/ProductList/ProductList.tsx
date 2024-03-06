import { Product } from "@/types";
import React from "react";
import NoResults from "../ui/no-results";
import ProductCard from "../ui/product-card";

interface ProductListProps {
  title: string;
  items: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ title, items }) => {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      {!items.length && <NoResults />}
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => (
          <ProductCard data={item} key={item.id}/>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
