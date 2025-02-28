import "./index.css";
import Bottom from "./page/bottom";
import Footer from "./page/footer";
import Hero from "./page/hero";
import Middle from "./page/middle";
import Middle2 from "./page/Middle2";
import Middle3 from "./page/Middle3"

export default function LandingPage() {
  return (
    <>
    <Hero/>
    <Middle/> 
    <Middle2/>
    <Middle3/>
    <Bottom/>
    <Footer/>
    </>
      );
}
