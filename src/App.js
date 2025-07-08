import IntroSection from "./components/IntroSection/IntroSection";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer"
import Achievements from "./components/Achievements/Achievements";
import Listing from "./components/Listing/Listing";


function App() {
  return (
    <>
       <NavBar />
      <IntroSection/> 
      <Achievements/>
      <Listing   />
      <Footer/>
    </>
  );
}

export default App;
