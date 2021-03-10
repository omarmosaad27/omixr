import React,{useState} from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Dropdown from './components/dropdown/Dropdown'
import {SliderData} from './data/SliderData'
import InfoSection from './components/infosection/InfoSection'
import Newhomes from './components/newhomes/Newhomes'
import {NewHomesData} from './data/Newhomes' 
import { InfoDataOne } from './data/Infosection'
import { InfoDataTwo } from './data/Infosection'
import ModernDesigns from './components/moderndesigns/ModernDesign'
import StuninInterior from './components/stuning interior/StuninInterior'
import {InteriorData} from './data/Interior'
import Footer from './components/footer/Footer'

function App() {
  const [isOpen,setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="App">
        <Navbar toggle={toggle}/>
        <Dropdown isOpen={isOpen} toggle={toggle}/>
        <Hero slides={SliderData}/>
        <InfoSection infodataone={InfoDataOne}/>
        <Newhomes NewHomesData={NewHomesData}/>
        <StuninInterior InteriorData={InteriorData}/>
        <ModernDesigns infoDataTwo={InfoDataTwo}/>
        <Footer/>
    </div>
  );
}

export default App;
