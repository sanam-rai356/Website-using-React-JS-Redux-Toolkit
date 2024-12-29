import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const FilterData = () => {
  const filteredProduct = useSelector((state) => state.product.filteredData);
  return (
    <>
      <div className="mx-auto py-12 px-4 md:px-16 lg:px-24">
        {filteredProduct.length > 0 ? (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {filteredProduct.map((product) => {
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
          </>
        ) : (
          <div>
            <h1>No Product Available</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default FilterData;
