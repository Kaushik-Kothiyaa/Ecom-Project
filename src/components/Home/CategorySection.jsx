import React from 'react'
import category1 from "../../assets/images/cat-image1.jpg";
import category2 from "../../assets/images/cat-image4.jpg";
import category3 from "../../assets/images/cat-image5.jpg";

const CategorySection = () => {
  return <>
  {/* <section id="popular-products">
        <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Categories</h2>
            <div className="flex flex-wrap -mx-4">
               
                <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
                  <div className="bg-white p-3 rounded-lg shadow-lg">
                    <img src={category1} alt="Category 1" className="w-full object-cover mb-4 rounded-lg"/>                    
                    <div className="flex items-center justify-between">
                    <p className="my-2 font-semibold">Men</p>
                    <a  href="/products" className="bg-primary border border-transparent hover:bg-transparent hover:border-primary text-white hover:text-primary font-semibold py-2 px-4 rounded-full" >
                      Shop Now  </a>
                  </div>
                  </div>
                </div>
               
                <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
                  <div className="bg-white p-3 rounded-lg shadow-lg">
                    <img src={category2}  alt="Category 2" className="w-full object-cover mb-4 rounded-lg"/>                    
                    <div className="flex items-center justify-between">
                    <p className="my-2 font-semibold">Woen</p>
                    <a  href="/products" className="bg-primary border border-transparent hover:bg-transparent hover:border-primary text-white hover:text-primary font-semibold py-2 px-4 rounded-full" >
                      Shop Now  </a>
                  </div>
                 </div>
                </div>  
           </div>
        </div>
    </section>  */}

    <section id="product-banners">
        <div className="container mx-auto py-10">
            <div className="flex flex-wrap">
                
                <div className="w-full sm:w-1/3 px-4 mb-8">
                    <div className="category-banner relative overflow-hidden rounded-lg shadow-lg group">
                        <img src={category1} className="w-full h-auto"/>
                        <div className="absolute inset-0 bg-gray-light/50"></div>
                        <div
                            className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">Men</h2>
                            <a href="/"
                                className="bg-primary hover:bg-transparent border border-transparent hover:border-white text-white hover:text-white font-semibold px-4 py-2 rounded-full inline-block">Shop
                                now</a>
                        </div>
                    </div>
                </div>
                
                <div className="w-full sm:w-1/3 px-4 mb-8">
                    <div className="category-banner relative overflow-hidden rounded-lg shadow-lg group">
                        <img src={category2} alt="Category 2" className="w-full h-auto"/>
                        <div className="absolute inset-0 bg-gray-light/50"></div>
                        <div
                            className="category-text absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 transition duration-300">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">Women</h2>
                            <a href="/"
                                className="bg-primary hover:bg-transparent border border-transparent hover:border-white text-white hover:text-white font-semibold px-4 py-2 rounded-full inline-block">Shop
                                now</a>
                        </div>
                    </div>
                </div>
               
                <div className="w-full sm:w-1/3 px-4 mb-8">
                    <div className="category-banner relative overflow-hidden rounded-lg shadow-lg group">
                        <img src={category3} alt="Category 3" className="w-full h-auto"/>
                        <div className="absolute inset-0 bg-gray-light/50"></div>
                        <div
                            className="category-text absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 transition duration-300">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">Accessories</h2>
                            <a href="/"
                                className="bg-primary hover:bg-transparent border border-transparent hover:border-white text-white hover:text-white font-semibold px-4 py-2 rounded-full inline-block">Shop
                                now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
     </>  
  
}

 export default CategorySection