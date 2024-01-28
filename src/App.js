import React from 'react'
import { Header, About, Languages, Experience, Footer } from "./container";
import { Navbar } from "./components";

function App() {
  return (
    <div className='app'>
        <Navbar />
        <Header />
        <About />
        <Languages />
        <Experience />
        <Footer />
    </div>
  )
}

export default App