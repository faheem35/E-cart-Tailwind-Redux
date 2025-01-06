import React from 'react'
import Header from '../componnets/Header'
import { Link } from 'react-router-dom'


const Wishlist = () => {
  return (
    <>
          <Header/>
          
          <div style={{paddingTop:'100px'}} className='px-5'>
              <> 
                    <h1 className='text-4xl font-bold text-red-600'>My Wishlist</h1>

                    <div className='grid grid-cols-4 gap-4'>
                    <div className='border rounded p-2 shadow' >
                              <img  src="https://cdn.thewirecutter.com/wp-content/media/2022/08/clean-everything-crocs-2048px-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=980&dpr=2" alt="Product image" />

                              <div className='text-center'>
                                        <h3 className='text-xl font-bold'>Product Name</h3>

                                        <div className='flex justify-evenly mt-3'>
                                                  <button className='text-xl'><i class="fa-solid fa-heart-circle-xmark text-red-600"></i></button>
                                                  <button className='text-xl'><i class="fa-solid fa-cart-plus text-green-700"></i></button>

                                        </div>
                              </div>

                    </div>

          </div>
                    
              </>

          </div>
              
          
    </>
   
  )
}

export default Wishlist