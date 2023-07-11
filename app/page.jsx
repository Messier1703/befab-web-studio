import Main from "@/components/pages/home/main/main";
import Portfolio from "@/components/pages/home/portfolio/portfolio";
import Offers from "@/components/pages/home/offers/offers";
import Convenience from "@/components/pages/home/convenience/convenience";
import Prices from "@/components/pages/home/prices/prices";
import Reviews from "@/components/pages/home/reviews/reviews";
import Footer from "@/components/ui/footer/footer";

export default function Home() {
  return (
    <>
      <Main />
      <Portfolio />
      <Offers />
      <Convenience />
      <Prices />
      <Reviews />
      <Footer />
    </>
  )
}
