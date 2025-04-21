// import React from "react";
// import './App.css';
// import Navigation from "./components/Navigation"
// import About from "./components/About"
// import Hero from "./components/Hero"
// import Footer from "./components/Footer"
// function App() {

//   const [currentPage, setCurrentPage] = React.useState("first");
//   return (
//     <React.Fragment>
//       <Navigation/>
//       <Hero/>
//       <About/>
//       <Footer/>
//     </React.Fragment>
//   )
// }


// const FirstPage = () => {
//   return <main style={{height: "100vh", width: "100vw", backgroundColor: "red"}}>
//     Hello
//   </main>
// }
// const SecondPage = () => {
//   return <main style={{height: "100vh", width: "100vw", backgroundColor: "blue"}}>

//   </main>
// }
// const ThirdPage = () => {
//   return <main style={{height: "100vh", width: "100vw", backgroundColor: "green"}}>

//   </main>
// }

// export default App


import React from 'react';
import Navbar from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;