import BlogSection from "./Home/BlogSection"
import CategorySection from "./Home/CategorySection"
import CollectionSection from "./Home/CollectionSection"
import Footer from "./Home/Footer"
import MainSlider from "./Home/MainSlider"
import ProductSection from "./Home/ProductSection"


export const Home = ()=>{

    return<>
        <MainSlider />
        <CategorySection />
        <ProductSection />           
        <CollectionSection />
        <BlogSection />
        <Footer />
       
    
    </>
}