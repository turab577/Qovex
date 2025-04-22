import Image from "next/image";
import Header from "./Header/Header";
import Landing from "./Landing/Landing";
import About from "./About/About";
import Services from "./Services/Services";
import Work from "./Work/Work";
import Reviews from "./Reviews/Reviews";
import Footer from "./Footer/Footer";
import Slider from "./Slider/Slider";
import Team from "./Team/Team";

export default function Home() {
  return (
    <div className="bg-white">
      <Landing/>
      <Slider/>
      <About/>  
      <Services/>
      <Work/>
      <Team/>
      <Reviews/>
    </div>
  );
}
