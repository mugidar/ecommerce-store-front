import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Info from "@/components/Info/Info";
import ProductList from "@/components/ProductList/ProductList";
import Gallery from "@/components/gallery/Gallery";
import Container from "@/components/ui/container";
import React from "react";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const product = await getProduct(params.productId);
  const suggestedProducts = await getProducts({
    categoryId: product.category.id,
  });
  
  return (
    <div>
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product.images} />
            <Info data={product} />
          </div>
          <hr className="my-10" />
          <ProductList title="Related Items" items={suggestedProducts} />
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
