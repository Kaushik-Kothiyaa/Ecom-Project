import bannerImage from "../../assets/images/banner1.jpg";

const HeroSection = () => {
  return (
    <section id="banner" className="relative my-16">
      <div
        className="container mx-auto px-4 py-20 rounded-lg relative bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>

        <div className="relative flex flex-col items-center justify-center h-full text-center text-white py-20">
          <h2 className="text-4xl font-bold mb-4">
            Welcome to Our Shop
          </h2>

          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-primary hover:bg-transparent text-white hover:text-primary border border-transparent hover:border-primary font-semibold px-4 py-2 rounded-full inline-block"
            >
              Shop Now
            </a>

            <a
              href="#"
              className="bg-primary hover:bg-transparent text-white hover:text-primary border border-transparent hover:border-primary font-semibold px-4 py-2 rounded-full inline-block"
            >
              New Arrivals
            </a>

            <a
              href="#"
              className="bg-primary hover:bg-transparent text-white hover:text-primary border border-transparent hover:border-primary font-semibold px-4 py-2 rounded-full inline-block"
            >
              Sale
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};  

export default HeroSection