`use client`
import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Project from './Components/project';
import Extension from './Components/extension';
import Customise from "./Components/customise"
import Ourwork from './Components/ourwork';

import Footer from './Components/footer';
import Oursponsers from './Components/oursponsers';
import YourWork from '@/app/Components/Yourwork'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Project/>
      <Extension/>
      <Customise/>
      <Ourwork/>
      <YourWork/>
      <Oursponsers/>
      
      <Footer/>
      

    </div>
  )
}

export default Home
