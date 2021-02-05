// import classes from './App.module.sass';
import AboutUsSection from './components/AboutUsSection/AboutUsSection';
import BrandSection from './components/BrandSection/BrandSection';
import Header from './components/Header/Header';
import PortfolioSection from './components/PortfolioSection/PortfolioSection';

function App() {
  return (
    <div>
      <Header />
      <BrandSection />
      <PortfolioSection />
      <AboutUsSection />
    </div>
  );
}

export default App;
