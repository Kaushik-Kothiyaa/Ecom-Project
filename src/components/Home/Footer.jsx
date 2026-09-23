import { Link } from "react-router-dom";

import visa from "../../assets/images/social_icons/visa.svg";
import stripe from "../../assets/images/social_icons/stripe.svg";
import paypal from "../../assets/images/social_icons/paypal.svg";
import facebook from "../../assets/images/social_icons/facebook.svg";
import twitter from "../../assets/images/social_icons/twitter.svg";
import instagram from "../../assets/images/social_icons/instagram.svg";
import pinterest from "../../assets/images/social_icons/pinterest.svg";
import youtube from "../../assets/images/social_icons/youtube.svg";
import logo from "../../assets/images/template-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-gray-line">

      {/* Footer Main */}
      <div className="container mx-auto px-4 py-10">

        <div className="flex flex-wrap -mx-4">

          {/* Shop */}
          <div className="w-full sm:w-1/6 px-4 mb-8">

            <h3 className="text-lg font-semibold mb-4">
              Shop
            </h3>

            <ul>
              <li>
                <Link to="/products" className="hover:text-primary">
                  Shop
                </Link>
              </li>

              <li>
                <Link to="/products" className="hover:text-primary">
                  Women
                </Link>
              </li>

              <li>
                <Link to="/products" className="hover:text-primary">
                  Men
                </Link>
              </li>

              <li>
                <Link to="/products" className="hover:text-primary">
                  Shoes
                </Link>
              </li>

              <li>
                <Link to="/products" className="hover:text-primary">
                  Accessories
                </Link>
              </li>
            </ul>

          </div>

          {/* Pages */}
          <div className="w-full sm:w-1/6 px-4 mb-8">

            <h3 className="text-lg font-semibold mb-4">
              Pages
            </h3>

            <ul>
              <li>
                <Link to="/products" className="hover:text-primary">
                  Shop
                </Link>
              </li>

              <li>
                <Link to="/products/1" className="hover:text-primary">
                  Product
                </Link>
              </li>

              <li>
                <Link to="/checkout" className="hover:text-primary">
                  Checkout
                </Link>
              </li>

              <li>
                <Link to="/" className="hover:text-primary">
                  Home
                </Link>
              </li>
            </ul>

          </div>

          {/* Account */}
          <div className="w-full sm:w-1/6 px-4 mb-8">

            <h3 className="text-lg font-semibold mb-4">
              Account
            </h3>

            <ul>
              <li>
                <Link to="/cart" className="hover:text-primary">
                  Cart
                </Link>
              </li>

              <li>
                <Link to="/register" className="hover:text-primary">
                  Registration
                </Link>
              </li>

              <li>
                <Link to="/login" className="hover:text-primary">
                  Login
                </Link>
              </li>
            </ul>

          </div>

          {/* Follow Us */}
          <div className="w-full sm:w-1/6 px-4 mb-8">

            <h3 className="text-lg font-semibold mb-4">
              Follow Us
            </h3>

            <ul>

              <li className="flex items-center mb-2">
                <img
                  src={facebook}
                  alt="Facebook"
                  className="w-4 h-4 transition-transform transform hover:scale-110 mr-2"
                />

                <a href="#" className="hover:text-primary">
                  Facebook
                </a>
              </li>

              <li className="flex items-center mb-2">
                <img
                  src={twitter}
                  alt="Twitter"
                  className="w-4 h-4 transition-transform transform hover:scale-110 mr-2"
                />

                <a href="#" className="hover:text-primary">
                  Twitter
                </a>
              </li>

              <li className="flex items-center mb-2">
                <img
                  src={instagram}
                  alt="Instagram"
                  className="w-4 h-4 transition-transform transform hover:scale-110 mr-2"
                />

                <a href="#" className="hover:text-primary">
                  Instagram
                </a>
              </li>

              <li className="flex items-center mb-2">
                <img
                  src={pinterest}
                  alt="Pinterest"
                  className="w-4 h-4 transition-transform transform hover:scale-110 mr-2"
                />

                <a href="#" className="hover:text-primary">
                  Pinterest
                </a>
              </li>

              <li className="flex items-center mb-2">
                <img
                  src={youtube}
                  alt="YouTube"
                  className="w-4 h-4 transition-transform transform hover:scale-110 mr-2"
                />

                <a href="#" className="hover:text-primary">
                  YouTube
                </a>
              </li>

            </ul>

          </div>

          {/* Contact Us */}
          <div className="w-full sm:w-2/6 px-4 mb-8">

            <h3 className="text-lg font-semibold mb-4">
              Contact Us
            </h3>

            <p>
              <img
                src={logo}
                alt="Logo"
                className="h-[60px] mb-4"
              />
            </p>

            <p>
              123 Street Name, Paris, France
            </p>

            <p className="text-xl font-bold my-4">
              Phone: (123) 456-7890
            </p>

            <a
              href="mailto:info@style.com"
              className="underline"
            >
              Email: info@style.com
            </a>

          </div>

        </div>

      </div>

      {/* Copyright */}
      <div className="py-6 border-t border-gray-line">

        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">

          <div className="w-full lg:w-3/4 text-center lg:text-left mb-4 lg:mb-0">

            <p className="mb-2 font-bold">
              &copy; 2026 Style with alegance. All rights reserved by{" "}
              <a
                href="https://github.com/spacemadev"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "green" }}
              >
                Kaushik Kothiya
              </a>{" "}
              • Distributed by{" "}
              <a
                href="https://themewagon.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "green",
                  fontWeight: "bold"
                }}
              >
                KK
              </a>
            </p>

            <ul className="flex justify-center lg:justify-start space-x-4 mb-4 lg:mb-0">

              <li>
                <a href="#" className="hover:text-primary">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-primary">
                  Terms of Service
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-primary">
                  FAQ
                </a>
              </li>

            </ul>

            <p className="text-sm mt-4">
              Stylish Clothes with best Offer.
            </p>

          </div>

          {/* Payment Methods */}
          <div className="w-full lg:w-1/4 text-center lg:text-right">

            <img
              src={visa}
              alt="Visa"
              className="inline-block h-8 mr-2"
            />

            <img
              src={stripe}
              alt="Stripe"
              className="inline-block h-8 mr-2"
            />

            <img
              src={paypal}
              alt="PayPal"
              className="inline-block h-8"
            />

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;