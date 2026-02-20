import Navbar from "./components/Navbar"; 
import Home from "./components/Home";     
import About from "./components/About";    
import Contact from "./components/Contact"; 
import PortfolioSection from "./components/Portfolio"; 
import Skills from "./components/Skills"; 
const App = () => {
  return (
    <div>
      <Navbar />             
      <Home />               
      <About />   
      <Skills/>           
      <PortfolioSection /> 
      <Contact />          
               
    </div>
  );
};

export default App;

















