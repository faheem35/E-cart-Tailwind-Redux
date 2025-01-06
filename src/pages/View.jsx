import React from 'react'
import Header from '../componnets/Header'

const View = () => {
  return (
    <>
    <Header/>
    <div className='flex flex-col mx-5 '  >
          <div className='grid grid-cols-2 items-center h-screen'>
                    <img width={'450px'} height={'200px'} src="https://cdn.thewirecutter.com/wp-content/media/2022/08/clean-everything-crocs-2048px-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=980&dpr=2" alt="" />

                    <div>
                              <h3 className='font-bold'>PID: id</h3>
                              <h1 className='text-5xl font-bold'>Product Name</h1>
                              <h4 className='font-bold text-red-600 text-2xl'> $250</h4>
                              <h4>Brand: brand</h4>
                              <h4>Category: category</h4>
                              <p> 
                                        <span className='font-bold'>Description</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium distinctio sapiente dignissimos, quam possimus, eius dolores harum nobis voluptatem, velit vel facilis sed deleniti officiis eum impedit iusto. Qui, totam.
                                        <div className='flex justify-between mt-5'>
                                                  <button className='bg-blue-600 text-white p-2'>Add to wishlist</button>
                                                  <button className='bg-green-600 text-white p-2'>Add to Cart</button>

                                        </div>

                              </p>
                    </div>

          </div>

    </div>
    </>
  )
}

export default View