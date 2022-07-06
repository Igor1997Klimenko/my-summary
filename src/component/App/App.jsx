import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import About from '../About/About';
import Experience from '../Experience/Experience';
import Services from '../Services/Services';
import Portfolio from '../Portfolio/Portfolio';
import Testimonials from '../Testimonials/Testimonials';
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import '../Global.module.css';

const App = () => {
  return (
    <>
      <Header />
      <Navigation />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer/>
    </>
  );
}

export default App;
