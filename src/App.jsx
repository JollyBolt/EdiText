import './App.css'
import Navbar from './components/Navbar.jsx'
import TextForm from './components/TextForm'
import About from './components/About'
import {Route,Routes} from 'react-router-dom'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar title="EdiText" />
      <Routes>
        <Route path='/' element={<TextForm heading="Enter the text to analyize"/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App

