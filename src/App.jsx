import "./index.css";
import Bottom from "./page/Bottom.jsx";
import Footer from "./page/Footer.jsx";
import Hero from "./page/Hero.jsx";
import Middle from "./page/Middle.jsx";
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
