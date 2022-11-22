import Header from './layout/Header';
import MainContent from './layout/MainContent';
import Hero from './sections/Hero';
import Reinforcing from './sections/Reinforcing';
import Register from './sections/Register';
import Feature from './sections/Feature';
import Apps from './sections/Apps';
import Footer from './layout/Footer';
import FAQ from './sections/FAQ';

function App() {
  return (
    <div>
      <Header />
      <MainContent>
        <Hero />
        <Reinforcing />
        <Register />
        <Feature />
        <Apps />
        <FAQ />
        <Register />
      </MainContent>
      <Footer />
    </div>
  );
}

export default App;
