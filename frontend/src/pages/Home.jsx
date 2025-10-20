import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import WhyUs from '../components/WhyUs'
import ServicesPreview from '../components/ServicesPreview'
import AboutUsInvite from '../components/AboutUsInvite'

const Home = () => {
    return (
        <>
            <Navbar />
            <ToastContainer />
            <Hero />
            <WhyUs />
            <ServicesPreview />
            <AboutUsInvite />
        </>

    )
}

export default Home