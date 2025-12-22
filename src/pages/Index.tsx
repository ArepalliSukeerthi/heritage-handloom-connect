import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/home/HeroSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import CategorySection from "@/components/home/CategorySection";
import ArtisanSpotlight from "@/components/home/ArtisanSpotlight";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Newsletter from "@/components/home/Newsletter";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Heritage Handloom - Authentic Indian Handwoven Textiles</title>
        <meta
          name="description"
          content="Shop authentic handloom products directly from Indian artisans. Discover Banarasi silk sarees, Pashmina shawls, and more handwoven treasures."
        />
      </Helmet>

      <main>
        <HeroSection />
        <FeaturedProducts />
        <CategorySection />
        <ArtisanSpotlight />
        <WhyChooseUs />
        <Newsletter />
      </main>
    </>
  );
};

export default Index;
