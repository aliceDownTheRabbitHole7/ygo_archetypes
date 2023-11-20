import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Amazoness from './pages/Amazoness'
import AncientGear from './pages/AncientGear'
import Archfiend from './pages/Archfiend'
import BlackLuster from './pages/BlackLuster'
import BlueEyes from './pages/BlueEyes'
import DarkMagician from './pages/DarkMagician'
import Gravekeeper from './pages/Gravekeeper'
import RedEyes from './pages/RedEyes'
import Toon from './pages/Toon'

function App() {
  const [slideNumber, setSlideNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)
  const handleMagnify = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
};

const handleClose = () => {
    setOpenModal(false);
};

  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/amazoness' element={<Amazoness handleMagnify={handleMagnify} handleClose={handleClose} openModal={openModal} slideNumber={slideNumber} setSlideNumber={setSlideNumber} />} />
          <Route path='/ancient-gear' element={<AncientGear handleMagnify={handleMagnify} handleClose={handleClose} openModal={openModal} slideNumber={slideNumber} setSlideNumber={setSlideNumber} />} />
          <Route path='/archfiend' element={<Archfiend handleMagnify={handleMagnify} handleClose={handleClose} openModal={openModal} slideNumber={slideNumber} setSlideNumber={setSlideNumber} />} />
          <Route path='/black-luster' element={<BlackLuster handleMagnify={handleMagnify} handleClose={handleClose} openModal={openModal} slideNumber={slideNumber} setSlideNumber={setSlideNumber} />} />
          <Route path='/blue-eyes' element={<BlueEyes handleMagnify={handleMagnify} handleClose={handleClose} openModal={openModal} slideNumber={slideNumber} setSlideNumber={setSlideNumber} />} />
          <Route path='/dark-magician' element={<DarkMagician handleMagnify={handleMagnify} handleClose={handleClose} openModal={openModal} slideNumber={slideNumber} setSlideNumber={setSlideNumber} />} />
          <Route path='/gravekeeper' element={<Gravekeeper handleMagnify={handleMagnify} handleClose={handleClose} openModal={openModal} slideNumber={slideNumber} setSlideNumber={setSlideNumber} />} />
          <Route path='/red-eyes' element={<RedEyes handleMagnify={handleMagnify} handleClose={handleClose} openModal={openModal} slideNumber={slideNumber} setSlideNumber={setSlideNumber} />} />
          <Route path='/toon' element={<Toon handleMagnify={handleMagnify} handleClose={handleClose} openModal={openModal} slideNumber={slideNumber} setSlideNumber={setSlideNumber} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
