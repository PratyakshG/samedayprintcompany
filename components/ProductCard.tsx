import Image from "next/image";
import React from "react";

interface ProductCardProps {
  name: string;
  image: string;
}

const ProductCard = ({ name, image }: ProductCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Image
        src={image}
        alt="product-image"
        width={250}
        height={250}
        className="object-cover aspect-square"
      />
      <h1 className="text-xl">{name}</h1>
    </div>
  );
};

export default ProductCard;
