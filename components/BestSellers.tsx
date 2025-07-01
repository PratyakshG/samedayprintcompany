import { bestSellerProducts } from "@/constants";
import React from "react";
import ProductCard from "./ProductCard";

const BestSellers = () => {
  return (
    <section className="py-10 space-y-5">
      <h1 className="font-medium text-5xl text-center">
        Best Selling Products
      </h1>

      <div className="flex items-center justify-center flex-wrap gap-10">
        {bestSellerProducts.map((item, _) => (
          <ProductCard key={item.id} name={item.name} image={item.image} />
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
