import { Link } from "react-router-dom";

import product5 from "../../assets/images/products/5.jpg";
import product6 from "../../assets/images/products/6.jpg";
import product7 from "../../assets/images/products/7.jpg";
import product8 from "../../assets/images/products/8.jpg";

const CollectionSection = () => {
  return (
    <section id="latest-products" className="py-10">

      <div className="container mx-auto px-4">

        <h2 className="text-2xl font-bold mb-8">
          Latest products
        </h2>

        <div className="flex flex-wrap -mx-4">

          {/* Product 1 */}
          <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">

            <div className="bg-white p-3 rounded-lg shadow-lg">

              <img
                src={product5}
                alt="Blue women's suit"
                className="w-full object-cover mb-4 rounded-lg"
              />

              <Link
                to="/products/5"
                className="text-lg font-semibold mb-2"
              >
                Blue women's suit
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
                src={product6}
                alt="White shirt with long sleeves"
                className="w-full object-cover mb-4 rounded-lg"
              />

              <Link
                to="/products/6"
                className="text-lg font-semibold mb-2"
              >
                White shirt with long sleeves
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
                src={product7}
                alt="Yellow men's suit"
                className="w-full object-cover mb-4 rounded-lg"
              />

              <Link
                to="/products/7"
                className="text-lg font-semibold mb-2"
              >
                Yellow men's suit
              </Link>

              <p className="my-2">
                Men
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

          {/* Product 4 */}
          <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">

            <div className="bg-white p-3 rounded-lg shadow-lg">

              <img
                src={product8}
                alt="Red dress"
                className="w-full object-cover mb-4 rounded-lg"
              />

              <Link
                to="/products/8"
                className="text-lg font-semibold mb-2"
              >
                Red dress
              </Link>

              <p className="my-2">
                Women
              </p>

              <div className="flex items-center mb-4">

                <span className="text-lg font-bold text-primary">
                  $39.99
                </span>

                <span className="text-sm line-through ml-2">
                  $49.99
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

export default CollectionSection;