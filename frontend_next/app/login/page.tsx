import React from 'react'

const page = () => {
  return (
    <section className='relative flex items-center justify-center mt  min-h-150'>
      <div className='border p-5'>
        <form action="">
          <div>
            <h1 className='font-bold text-3xl'>
              Login
            </h1>
            <p className='text-gray-800 text-lg'>
              Login to get Access
            </p>
          </div>
          <div>
            <label htmlFor="email"></label>
          </div>
        </form>
      </div>
    </section>
  )
}

export default page