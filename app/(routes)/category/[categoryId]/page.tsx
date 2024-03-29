import getBillboard from "@/actions/get-billboard";
import getCategory from "@/actions/get-category";
import getColors from "@/actions/get-colors";
import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";
import Billboard from "@/components/Biillboard/Billboard";
import Info from "@/components/Info/Info";
import ProductList from "@/components/ProductList/ProductList";
import Gallery from "@/components/gallery/Gallery";
import Container from "@/components/ui/container";
import React from "react";
import Filter from "./components/filter";
import ProductCard from "@/components/ui/product-card";
import MobileFilters from "@/components/MobileFilters/MobileFilters";
import NoResults from "@/components/ui/no-results";

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}
export const revalidate = 0;
const CategoryPage: React.FC<CategoryPageProps> = async ({
  params,
  searchParams,
}) => {
  const category = await getCategory(params.categoryId);
  const products = await getProducts({
    categoryId: category.id,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  });
  const billboard = await getBillboard(category.billboard.id);
  const sizes = await getSizes();
  const colors = await getColors();
  return (
    <div className="mb-10">
      <Container>
        <div className="space-y-10 pb-10">
          {billboard && <Billboard data={billboard} />}
        </div>
        <div className="flex lg:gap-x-8">
          <div className="hidden lg:block">
            {sizes && <Filter valueKey="sizeId" name="Sizes" data={sizes} />}
            {colors && (
              <Filter valueKey="colorId" name="Colors" data={colors} />
            )}
          </div>{" "}
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <MobileFilters sizes={sizes} colors={colors} />
            {products.length ? (
              <div className="flex gap-5">
                {products.map((item) => (
                  <ProductCard data={item} key={item.id} />
                ))}
              </div>
            ) : (
              <NoResults />
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
