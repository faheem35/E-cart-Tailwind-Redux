import React, { useEffect, useState } from 'react'
import Header from '../componnets/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../redux/slices/wishlistSlice'

const View = () => {

  const dispatch=useDispatch() //to perform actions
  const userwishlist= useSelector(state=>state.wishlistReducer)  //to select specific state

  const [product,setproduct]=useState({})

  const {id}= useParams()  //getting dynamic data using useParams hook
  console.log(id);
  


  useEffect(()=>{
    if(sessionStorage.getItem("allproducts")){

      const allProducts= JSON.parse(sessionStorage.getItem("allproducts"))
      // console.log(allProducts.find(item=>item.id==id));
      setproduct(allProducts.find(item=>item.id==id))
    }
    
  },[])

  const handleWishlist=()=>{
    const existingProduct= userwishlist?.find(item=>item?.id==id)
    if(existingProduct){

      alert("Product already in your Wishlist!!!")
    }else{
     dispatch(addToWishlist(product))
    }

  }

  console.log(product);
  
  
  

  return (
    <>
    <Header/>
    <div className='flex flex-col mx-5 '  >
          <div className='grid grid-cols-2 items-center h-screen'>
                   <div>
                     <div className='flex flex-col items-center'> <img width={'450px'} height={'200px'} src={product?.thumbnail} alt="" /></div>
                      <div className='flex justify-center mt-5 '>
                                                    <button onClick={handleWishlist} className='bg-blue-600 text-white p-2 me-5'>Add to wishlist</button>
                                                    <button className='bg-green-600 text-white p-2 ms-5'>Add to Cart</button>
  
                                          </div>
                   </div>

                    <div>
                              <h3 className='font-bold'>PID: {product?.id}</h3>
                              <h1 className='text-5xl font-bold'>{product?.title}</h1>
                              <h4 className='font-bold text-red-600 text-2xl'> $ {product?.price}</h4>
                              <h4>Brand: {product?.brand}</h4>
                              <h4>Category: {product?.category}</h4>
                              <p> 
                                        <span className='font-bold'>Description</span>: {product?.description}
                                       

                              </p>

                              <h3 className='font-bold mt-5'>Client Reviews</h3>
                              {
                                product?.reviews?.length>0?
                                product?.reviews?.map(item=>(
                                  <div key={item?.date} className='shadow-border p-2 mb-2'>
                                    <h5>
                                      <span className='font-bold'>{item?.reviewerName}</span>: <span>{item?.comment}</span>
                                    </h5>
                                    <p>Rating: {item?.rating} <i class="fa-solid fa-star text-yellow-400"></i> </p>


                                  </div>
                                ))
                                :
                                <div>No Reviews Yet!!!</div>
                              }
                    </div>

          </div>

    </div>
    </>
  )
}

export default View