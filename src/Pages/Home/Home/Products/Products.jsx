import { useEffect } from "react";
import { useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <>
      <div className="text-center mt-32 space-y-5">
        <h2 className="text-[#FF3811] font-bold">
          Popular Products: {products.length}
        </h2>
        <h3 className="font-bold text-5xl">Browse Our Products</h3>
        <p className="w-[717px] mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </>
  );
};

export default Products;
