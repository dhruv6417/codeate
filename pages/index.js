import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HeroSection from '../components/home/herosection/HeroSection'
import { Ouroffering } from '../components/home/ouroffering/Ouroffering'
import { homeObjOne } from '../data/HomeData'
import Aboutcode8 from '../components/home/aboutcode8/Aboutcode8'
import Stats from '../components/home/stats/Stats'
import Ourreach from '../components/home/ourreach/Ourreach'
import OurPartners from '../components/home/ourpartners/OurPartners'
import Ourcommunity from '../components/home/ourcommunity/OurCommunity'
// import Eventgallery from '../components/home/eventgallery/Eventgallery'
import Testimonial from '../components/home/testimonial/Testimonial'

export default function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <Ouroffering Heading={'Explore our programs'} />
      <Aboutcode8/>
      <Stats/>
      <Ourreach/>
      {/* <Testimonial/> */}
      {/* <Eventgallery/> */}
      <OurPartners/>
      <Ourcommunity/>
    </>
  )
}
