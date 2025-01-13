import React, { useEffect, useState } from 'react'
import Header from '../componnets/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/slices/productSlice'

const Home = () => {
  const dispatch = useDispatch()

  const { allProducts, loading, errorMsg } = useSelector(state => state.productReducer)
  // console.log(allProducts, loading, errorMsg);

  //for pagination
  const [currentPage,setCurrentPage]=useState(1)
  const productPerPage=8
  const totalPages=Math.ceil(allProducts?.length/productPerPage)

  const currentPageProductLastIndex= currentPage *productPerPage  //8
  const currentPageProductFirstIndex= currentPageProductLastIndex- productPerPage   //0

  const visibleAllProducts= allProducts?.slice(currentPageProductFirstIndex,currentPageProductLastIndex)



  useEffect(() => {
    dispatch(fetchProducts())

  }, [])


  const navigateToNextPage=()=>{
    if(currentPage!=totalPages){
      setCurrentPage(currentPage+1)
    }
  }

  const navigateToPrevPage=()=>{
    if(currentPage!=1){
      setCurrentPage(currentPage-1)
    }
  }

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
                  visibleAllProducts?.map((product)=>(
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

              <div className='text-2xl text-center font-bold mt-20'>
                <span onClick={navigateToPrevPage} className='cursor-pointer'> <i class="fa-solid fa-backward me-5"></i> </span>
                <span>{currentPage} of {totalPages}</span>
                <span onClick={navigateToNextPage} className='cursor-pointer'> <i class="fa-solid fa-forward ms-5"></i> </span>
              </div>
            </>
        }

      </div>

    </>
  )
}

export default Home