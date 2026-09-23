import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Link } from "react-router-dom";

import banner1 from "../../assets/images/main-slider/5.jpg";
import banner2 from "../../assets/images/main-slider/2.png";
import banner3 from "../../assets/images/main-slider/4.jpg";

const MainSlider = () => {
  return (
    <section id="product-slider">

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={800}
        className="main-slider"
      >

        {/* Slide 1 */}
        <SwiperSlide>

          <img
            src={banner1}
            alt="Women"
          />

          <div className="swiper-slide-content">

            <h2 className="text-3xl md:text-7xl font-bold text-white mb-2 md:mb-4">
              Women
            </h2>

            <p className="mb-4 text-white md:text-2xl">
              Experience the best in sportswear with
              <br />
              our latest collection.
            </p>

            <Link
              to="/products"
              className="bg-primary hover:bg-transparent text-white hover:text-white border border-transparent hover:border-white font-semibold px-4 py-2 rounded-full inline-block"
            >
              Shop now
            </Link>

          </div>

        </SwiperSlide>


        {/* Slide 2 */}
        <SwiperSlide>

          <img
            src={banner2}
            alt="Men"
          />

          <div className="swiper-slide-content">

            <h2 className="text-3xl md:text-7xl font-bold text-white mb-2 md:mb-4">
              Men
            </h2>

            <p className="mb-4 text-white md:text-2xl">
              Discover the latest trends in Men's
              <br />
              sportswear and casual fashion.
            </p>

            <Link
              to="/products"
              className="bg-primary hover:bg-transparent text-white hover:text-white border border-transparent hover:border-white font-semibold px-4 py-2 rounded-full inline-block"
            >
              Shop now
            </Link>

          </div>

        </SwiperSlide>


        {/* Slide 3 */}
        <SwiperSlide>

          <img
            src={banner3}
            alt="Accessories"
          />

          <div className="swiper-slide-content">

            <h2 className="text-3xl md:text-7xl font-bold text-white mb-2 md:mb-4">
              Accessories
            </h2>

            <p className="mb-4 text-white md:text-2xl">
              Elevate your style with our latest
              <br />
              sportswear collection.
            </p>

            <Link
              to="/products"
              className="bg-primary hover:bg-transparent text-white hover:text-white border border-transparent hover:border-white font-semibold px-4 py-2 rounded-full inline-block"
            >
              Shop now
            </Link>

          </div>

        </SwiperSlide>

      </Swiper>

    </section>
  );
};

export default MainSlider;