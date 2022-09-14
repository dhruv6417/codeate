import React from 'react'
import Buildbycode from '../components/Build/Buildbycode'
import Findnexproject from '../components/Build/Findnexproject'
import Howitworks from '../components/Build/Howitworks'
import Stats from '../components/Build/Stats'
import Whatisbuild from '../components/Build/Whatisbuild'
import Writtinghelloworld from '../components/Build/Writtinghelloworld'


const build = () => {
  return (<div className='build'>
  <Whatisbuild/>
  <Writtinghelloworld/>
  <Howitworks/>
  <Findnexproject/>
  <Stats />  
  <Buildbycode/>
  </div>
  )
}

export default build