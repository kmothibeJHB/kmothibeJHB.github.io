import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import News from './News';
import Contact from './Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
    <>
    <Router>
      <div className='app'>
    <NavBar/>
    <div className='content'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>
    <Footer/>
    </div>
    </Router>

    </>   
    )
}

export default App;
