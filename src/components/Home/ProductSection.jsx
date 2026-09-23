import { Link } from "react-router-dom";

import product1 from "../../assets/images/products/1.jpg";
import product2 from "../../assets/images/products/2.jpg";
import product3 from "../../assets/images/products/3.jpg";

const ProductSection = () => {
  return (
    <section id="popular-products">

      <div className="container mx-auto px-4">

        <h2 className="text-2xl font-bold mb-8">
          Popular products
        </h2>

        <div className="flex flex-wrap -mx-4">

          {/* Product 1 */}
          <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">

            <div className="bg-white p-3 rounded-lg shadow-lg">

              <img
                src={product1}
                alt="Summer black dress"
                className="w-full object-cover mb-4 rounded-lg"
              />

              <Link
                to="/products/1"
                className="text-lg font-semibold mb-2"
              >
                Summer black dress
              </Link>

              <p className="my-2">
                Women
              </p>

              <div className="flex items-center mb-4">

                <span className="text-lg font-bold text-primary">
                  $19.99
                </span>

                <span className="text-sm line-through ml-2">
                  $24.99
                </span>

              </div>

              <button
                className="bg-primary border border-transparent hover:bg-transparent hover:border-primary text-white hover:text-primary font-semibold py-2 px-4 rounded-full w-full"
              >
                Add to Cart
              </button>

            </div>

          </div>

          {/* Product 2 */}
          <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">

            <div className="bg-white p-3 rounded-lg shadow-lg">

              <img
                src={product2}
                alt="Black suit"
                className="w-full object-cover mb-4 rounded-lg"
              />

              <Link
                to="/products/2"
                className="text-lg font-semibold mb-2"
              >
                Black suit
              </Link>

              <p className="my-2">
                Women
              </p>

              <div className="flex items-center mb-4">

                <span className="text-lg font-bold text-gray-900">
                  $29.99
                </span>

              </div>

              <button
                className="bg-primary border border-transparent hover:bg-transparent hover:border-primary text-white hover:text-primary font-semibold py-2 px-4 rounded-full w-full"
              >
                Add to Cart
              </button>

            </div>

          </div>

          {/* Product 3 */}
          <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">

            <div className="bg-white p-3 rounded-lg shadow-lg">

              <img
                src={product3}
                alt="Black long dress"
                className="w-full object-cover mb-4 rounded-lg"
              />

              <Link
                to="/products/3"
                className="text-lg font-semibold mb-2"
              >
                Black long dress
              </Link>

              <p className="my-2">
                Women, Accessories
              </p>

              <div className="flex items-center mb-4">

                <span className="text-lg font-bold text-gray-900">
                  $15.99
                </span>

                <span className="text-sm line-through ml-2">
                  $19.99
                </span>

              </div>

              <button
                className="bg-primary border border-transparent hover:bg-transparent hover:border-primary text-white hover:text-primary font-semibold py-2 px-4 rounded-full w-full"
              >
                Add to Cart
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ProductSection;