import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import WhyUs from '../components/WhyUs'
import ServicesPreview from '../components/ServicesPreview'
import AboutUsInvite from '../components/AboutUsInvite'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import FloatingSocials from '../components/FloatingSocials'

const Home = () => {
    return (
        <>
            <FloatingSocials />
            <Navbar />
            <ToastContainer />
            <Hero />
            <WhyUs />
            <ServicesPreview />
            <AboutUsInvite />
            <Contact />
            <Footer />
        </>

    )
}

export default Home