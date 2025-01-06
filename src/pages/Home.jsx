import React, { useEffect } from 'react'
import Header from '../componnets/Header'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../redux/slices/productSlice'

const Home = () => {
  const dispatch= useDispatch()

  useEffect(()=>{
    dispatch(fetchProducts())

  },[])

  return (
    <>
     <Header insideHome={true} /> {/*for searchbar visible only in home componnet  */}
   
   <div style={{paddingTop:'100px'}} className='px-4 mx-auto '>
          <div className='grid grid-cols-4 gap-4'>
                    <div className='border rounded p-2 shadow' >
                              <img  src="https://cdn.thewirecutter.com/wp-content/media/2022/08/clean-everything-crocs-2048px-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=980&dpr=2" alt="Product image" />

                              <div className='text-center'>
                                        <h3 className='text-xl font-bold'>Product Name</h3>
                                        <Link to={'/id/view'} className='bg-violet-600 rounded p-1 mt-3 text-white inline-block'>View More...</Link>
                              </div>

                    </div>

          </div>

   </div>

    </>
  )
}

export default Home