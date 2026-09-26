import Navbar from "@/components/Navbar"; 
import Hero from "@/components/Hero";
import BrandLogo from "@/components/BrandLogo";
import FeaturedListings from "@/components/FeaturedListings";
import CtaFooter from "@/components/CtaFooter";

const Home = () => {
  return (
    <div >
      <Navbar />
      <Hero />
      <BrandLogo />
      <FeaturedListings />
      <CtaFooter />

    </div>
  )
}

export default Home
