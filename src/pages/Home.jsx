import React, { useEffect } from 'react'
import Header from '../componnets/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/slices/productSlice'

const Home = () => {
  const dispatch = useDispatch()

  const { allProducts, loading, errorMsg } = useSelector(state => state.productReducer)
  console.log(allProducts, loading, errorMsg);



  useEffect(() => {
    dispatch(fetchProducts())

  }, [])

  return (
    <>
      <Header insideHome={true} /> {/*for searchbar visible only in home componnet  */}

      <div style={{ paddingTop: '100px' }} className='px-4 mx-auto '>
        {
          loading ?
            <div className='flex justify-center items-center my-5 text-lg'>
              <img width={'80px'} height={'80px'} src="https://cdnl.iconscout.com/lottie/premium/thumb/loading-circle-7008030-5740009.gif" alt="" />
            </div>
            :
            <>
              <div className='grid grid-cols-4 gap-4'>
                {
                  allProducts?.length > 0 ?
                  allProducts?.map((product)=>(
                    <div key={product?.id} className='border rounded p-2 shadow flex flex-col items-center' >
                      <img src={product?.thumbnail} alt="Product image" />

                      <div className='text-center'>
                        <h3 className='text-xl font-bold'>{product?.title}</h3>
                        <Link to={`/${product?.id}/view`} className='bg-violet-600 rounded p-1 mt-3 text-white inline-block'>View More...</Link>
                      </div>

                    </div>
                    ))
                    :
                    <div className="flex justify-center items-center font-bold text-red-600 my-5 text-lg ">
                      Products not Found!!!
                    </div>
                }
              </div>
            </>
        }

      </div>

    </>
  )
}

export default Home