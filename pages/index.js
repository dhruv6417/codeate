import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HeroSection from '../components/home/herosection/HeroSection'
import { Ouroffering } from '../components/home/ouroffering/Ouroffering'
import { homeObjOne } from '../data/HomeData'
import Aboutcode8 from '../components/home/aboutcode8/Aboutcode8'

export default function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <Ouroffering Heading={'Explore our programs'} />
      <Aboutcode8/>
      {/*<Stats />
      <Ourreach />
      <Testimonial />
      <Eventgallery />
      <OurPartners/>
      <Ourcommunity /> */}
    </>
  )
}
