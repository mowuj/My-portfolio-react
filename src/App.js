import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Header from './components/Navbar/Header';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';

function App() {
  return (
    
    <div >
      <Header></Header>
      <Home></Home>
      <About></About>
      <Services></Services>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}

export default App;
