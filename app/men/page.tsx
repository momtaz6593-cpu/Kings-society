import MenHero from "../components/server/MenHero";
import ShopByCategory from "../components/server/ShopByCategory";
import TrendingShirtsSection from "../components/server/TrendingShirtsSection";
import DiscountBanner from "../components/server/DiscountBanner";
import PopularPantsSection from "../components/server/PopularPantsSection";
import AccessoriesSection from "../components/server/AccessoriesSection";
import FeatureBar from "../components/server/FeatureBar";
export default function MenPage() {

  return (
    <div>
      <MenHero/>
      <ShopByCategory/>
      <TrendingShirtsSection/>
      <DiscountBanner/>
      <PopularPantsSection/>
      <AccessoriesSection/>
      <FeatureBar/>
    </div>
  );
}