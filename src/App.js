import './App.css';
import Contact from './Components/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Components/About';
import Home from './Components/Home';
import { Helmet } from 'react-helmet';
import Navbars from './Components/Navbars';
import Skills from './Components/Skills';

function App() {
  return (
   <BrowserRouter>
    <Helmet>
        <title>Ajay kumar </title>
        <link rel="canonical" href="https://portfolio.visheshcountrycache.tech/" />
         <meta name='description' content ='Frontend Web Developer'
        />
         <meta name="keywords" content="visheshcountrycache, vishesh ,software company in undrajavaram, Ajay kumar josyula"/>
      </Helmet>
      <Navbars/>
   <Routes>

    <Route path="/Contact" element={<Contact/>} />
    <Route path="/About" element={<About/>} />
    <Route path="/Home" element={<Home/>} />
    <Route path="/Skills" element={<Skills/>} />
    <Route path="/*" element ={<Home/>} />

   </Routes>
   </BrowserRouter>
    
   
  );
}

export default App;
