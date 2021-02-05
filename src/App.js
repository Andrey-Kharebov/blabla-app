// import classes from './App.module.sass';
import AboutUsSection from './components/AboutUsSection/AboutUsSection';
import BrandSection from './components/BrandSection/BrandSection';
import ContactUsSection from './components/ContactUsSection/ContactUsSection';
import Header from './components/Header/Header';
import PortfolioSection from './components/PortfolioSection/PortfolioSection';

function App() {
  return (
    <div>
      <Header />
      <BrandSection />
      <PortfolioSection />
      <AboutUsSection />
      <ContactUsSection />
    </div>
  );
}

export default App;
