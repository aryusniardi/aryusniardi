import React, {useState} from 'react'
import Navbar from './components/navbar/navbar'
import Sidebar from './components/sidebar/sidebar'
import Hero from './components/hero/hero'
import Profile from './components/profile/profile'
import Portfolio from './components/portfolio/portfolio'
import Contact from './components/contact/contact'

const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }
  
  return (
    <React.Fragment>
      <Sidebar isOpen={isOpen} toggle={handleToggle} />
      <Navbar toggle={handleToggle} />
      <Hero />
      <Profile />
      <Portfolio />
      <Contact />
    </React.Fragment>
  )
}


/**
 * Hello, 
 * I am Arief
 * 
 * 
 * I am a Informatics Engineer Student at Politeknik TEDC Bandung.
 * I love to design, but when it comes to Code
 * Things just getting more interesting.
 */
export default App