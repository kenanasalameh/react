import "./App.css";
import About from "./layout/AboutSection/About";
import Achiv from "./layout/AchivSection/Achiv";
import AutoOpenPopup from "./layout/AutoOpenPopup/AutoOpenPopup";
import Contact from "./layout/ContactSection/Contact";
import Footer from "./layout/FooterSection/Footer";
import Header from "./layout/HeaderSection/Header";
import Hero from "./layout/HeroSection/Hero";
import Media from "./layout/MediaSection/Media";
import Prog from "./layout/ProgSection/Prog";
import Serv from "./layout/ServSection/Serv";
function App() {

  return (
    <div className="App">
        <AutoOpenPopup/>
      <Header/>
      <Hero/>
      <Serv />
      <About />
      <Achiv />
      <Media />
      <Prog />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
