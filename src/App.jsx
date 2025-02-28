import "./index.css";
import Bottom from "./page/bottom.jsx";
import Footer from "./page/footer.jsx";
import Hero from "./page/hero.jsx";
import Middle from "./page/middle.jsx";
import Middle2 from "./page/Middle2.jsx";
import Middle3 from "./page/Middle3.jsx"

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
