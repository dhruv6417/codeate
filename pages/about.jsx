import React from 'react'
import About from "../components/About";
import WhatWhy from "../components/WhatWhy.jsx";
import Whodrivesus from "../components/Whodrivesus.js";
import Mentorstats from "../components/Mentorstats.js";
import { Ouroffering } from '../components/home/Ouroffering';


const about = () => {
  return (
    <div>
      {/* Who we are*/}
     
      <About/>
      <Whodrivesus/>
      <WhatWhy/>
      <Ouroffering/>
      <Mentorstats/>
      
    </div>
  )
}

export default about