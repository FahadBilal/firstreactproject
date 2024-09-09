import React from 'react'
import Banner from './features/banner'
import Service from './features/service'
import Blog from './features/blog'
import Program from './features/program'
import Tutor from './features/tutor'
import Quote from './features/quote'

const Homepage = () => {
  return (
    <div>
     <Banner/>
     <Service/>
     <Program/>
     <Tutor/>
     <Quote/>
     <Blog/>
    </div>
  )
}

export default Homepage
