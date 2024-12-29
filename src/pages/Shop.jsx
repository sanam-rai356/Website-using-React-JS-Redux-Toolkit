import ProductCard from "../components/ProductCard";
import { useSelector } from "react-redux";

const Shop = () => {
  const products = useSelector((state) => state.product.products);
  return (
    <>
      <div className="container mx-auto py-12 px-4 md:px-16 lg:px-24">
        <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {products.slice(0, 5).map((product) => {
            return (
              <>
                <ProductCard
                  key={product.id}
                  image={product.image}
                  name={product.name}
                  id={product.id}
                  price={product.price}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Shop;
