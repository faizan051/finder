import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from './components/TopNav';
import  Slide  from './components/Slide';
import Dropdownsec from './components/Dropdownsec';
import Cardsection from './components/Cardsection';
import MainCardSection from './components/MainCardSection';
import CalcSection from './components/CalcSection';
import SwiperSlider from './components/SwiperSlider';
import Partner from './components/Partner';
import Footer from './components/Footer';
import HeroSec from './components/HeroSec';
import NewCardSec from './components/NewCardSec';
import NewNav from './components/NewNav';



function App() {
  return (
    <>
    
    <NewNav/>
      
    <HeroSec/>
  
    <NewCardSec/>
    <MainCardSection/>
    <CalcSection/>
    <SwiperSlider/>
    <Partner/>
    <Footer/> 
    </>
    
  );
}

export default App;
