import React from 'react'
import Header from '../componnets/Header'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <>
    <Header/>
    <div style={{paddingTop:'100px'}} className='px-5  '>
          <>
          <h1 className='text-5xl font-bold text-blue-600'>Cart Summary</h1>

          <div className='grid grid-cols-3  gap-4 mt-5'>
                    <div className='col-span-2 border rounded p-5 shadow'>
                              <table className='table-auto w-full'>
                                        <thead>
                                                  <tr>
                                                            <td className=' font-semibold'>#</td>
                                                            <td className=' font-semibold'>Name</td>
                                                            <td className=' font-semibold'>Image</td>
                                                            <td className=' font-semibold'>Quantity</td>
                                                            <td className=' font-semibold'>Price</td>
                                                            <td className=' font-semibold'>...</td>
                                                  </tr>
                                        </thead>
                                        <tbody>
                                                  <tr>
                                                            <td>1</td>
                                                            <td>product name</td>
                                                            <td> <img width={'100px'} height={'100px'} src="https://cdn.thewirecutter.com/wp-content/media/2022/08/clean-everything-crocs-2048px-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=980&dpr=2" alt="" /></td>
                                                            <td>
                                                                      <div>
                                                                                <button className='font-bold'>-</button>
                                                                                <input type="text" style={{width:'40px'}} className='border p-1 rounded mx-2' value={2} readOnly />
                                                                                <button  className='font-bold'>+</button>
                                                                      </div>
                                                            </td>
                                                            <td>$ 100</td>
                                                            <td>
                                                                      <button className='text-red-600'> <i class="fa-solid fa-trash"></i></button>
                                                            </td>
                                                  </tr>
                                        </tbody>

                              </table>

                              <div className='float-right mt-5'>
                                        <button className='bg-red-600 rounded p-2 text-white'>Empty Cart</button>
                                        <Link to={'/'} className='bg-blue-600 ms-3 rounded p-2 text-white'>Shop More...</Link>

                              </div>

                    </div>

                    <div className='col-span-1'>
                              <div className='border rounded shadow p-5'>
                                        <h2 className='text-2xl font-bold my-4'>Total Amount: <span className='text-red-600'>$ 9.99</span></h2>
                                        <hr />
                                        <button className='bg-green-600 rounded p-2 text-white w-full'>Checkout</button>

                              </div>

                    </div>

          </div>
          
          </>




    </div>
    
    </>
  )
}

export default Cart