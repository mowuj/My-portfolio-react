import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Detail from './components/Detail/Detail';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Header from './components/Navbar/Header';
import Projects from './components/Projects/Projects';


function App() {
  return (
    
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>            
        
        <Route path="/blog" element={<Blog></Blog>}></Route>            
        <Route path="/allProject" element={<Projects></Projects>}></Route>            
        <Route path="/project/:id" element={<Detail></Detail>}></Route>            
        
      </Routes>
      
      
      <Footer></Footer>
    </div>
  );
}

export default App;
