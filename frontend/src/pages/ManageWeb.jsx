import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AddProject from '../components/projects/AddProject'
import FetchProjects from '../components/projects/FetchProjects'
import { Link } from 'react-router-dom'
import { ArrowBigLeftDash, ArrowBigRightDash } from 'lucide-react'

const ManageWeb = () => {
  return (
    <>
        <Navbar />
        <h1 className='mt-40 text-4xl text-primary fugaz'>Projects Management</h1>
        <div className='flex flex-row gap-3 px-10'>
            <AddProject />
            <FetchProjects />
        </div>
        <div className='my-20 justify-between flex px-[5vh]'>
            <Link
                to={'/projects'}
                className='cosmic-button flex'>
                <ArrowBigLeftDash /> Projects Page 
            </Link>
            <Link
                to={'/profile'}
                className='cosmic-button flex'>
                Manage ur Profile <ArrowBigRightDash />
            </Link>
        </div>
        <Footer />
    </>
  )
}

export default ManageWeb