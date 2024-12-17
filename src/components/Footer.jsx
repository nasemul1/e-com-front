import React from 'react'
import logo from '../images/logo.png'

const Footer = () => {
  return (
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
      <div>
        <img src={logo} className='mb-5 w-24' alt="" />
        <p className='w-full md:w-2/3 text-gray-600'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quibusdam ut iste sit est qui asperiores eos tempore eaque adipisci.
        </p>
      </div>
      <div>
        <p className='text-xl font-medium mb-5'>COMPANY</p>
        <ul className='flex flex-col text-gray-600'>
          <li>Home</li>
          <li>About us</li>
          <li>Delivery</li>
          <li>Privacy policy</li>
        </ul>
      </div>
      <div>
        <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
          <li>+1-212-456-7890</li>
          <li>contact@foreveryou.com</li>
        </ul>
      </div>
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024 hikmahlifestyle.com - All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer