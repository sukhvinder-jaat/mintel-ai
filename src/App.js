import "./App.css";
import Hero from "./components/Hero";
import YouKnow from "./components/YouKnow";
import Prospecting from "./components/Prospecting";
import Compatable from "./components/Compatable";
import Mintlize from "./components/Mintlize";
import OneClick from "./components/OneClick";
import Brands from "./components/Brands";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init({ once: true });
  return (
    <div className=" bg-black">
      <Hero />
      <YouKnow />
      <Prospecting />
      <Compatable />
      <Mintlize />
      <OneClick />
      <Brands />
      <Footer />
    </div>
  );
}

export default App;
