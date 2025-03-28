// import React from 'react'
// import Header from '../componnets/Header'
// import { Link } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import { removeItem } from '../redux/slices/wishlistSlice'
// import { addToCart } from '../redux/slices/cartSlice'


// const Wishlist = () => {

//   const userCart= useSelector(state=>state.cartReducer)
//   const dispatch=useDispatch()

//    const userWishlist= useSelector(state=>state.wishlistReducer)

//    const handleCart=(product)=>{
//     dispatch(removeItem(product.id))
//        dispatch(addToCart(product))



//        const existingProduct= userCart?.find(item=>item?.id==product.id)
//        if(existingProduct){

//          alert("Product count is incrementing")
//        }else{
//         alert("Product added to Cart")
//        }

//      }  

//   return (
//     <>
//           <Header/>

//           <div style={{paddingTop:'100px'}} className='px-5'>
//              {
//               userWishlist?.length>0?
//               <> 
//               <h1 className='text-4xl font-bold text-red-600'>My Wishlist</h1>

//               <div className='grid grid-cols-4 gap-4'>
//               {
//                 userWishlist?.map(product=>(
//                   <div className='border rounded p-2 shadow' >
//                         <img width={'100%'} height={'200px'} src={product?.thumbnail} alt="Product image" />

//                         <div className='text-center'>
//                                   <h3 className='text-xl font-bold'>{product?.title}</h3>

//                                   <div className='flex justify-evenly mt-3'>
//                                             <button onClick={()=>dispatch(removeItem(product?.id))} className='text-xl'><i class="fa-solid fa-heart-circle-xmark text-red-600"></i></button>
//                                             <button onClick={()=>handleCart(product)} className='text-xl'><i class="fa-solid fa-cart-plus text-green-700"></i></button>

//                                   </div>
//                         </div>

//               </div>
//                 ))
//               }

//     </div>

//                </>
//         :
//         <div className='flex flex-col justify-center items-center h-screen'>
//           <img src="https://www.adanione.com/~/media/Foundation/Adani/emptyImages/empty_cart.gif" alt="" />
//           <h1 className='text-3xl text-red-600 mt-5'>Your wishlist is empty!!!</h1>
//         </div>
//              }

//           </div>


//     </>

//   )
// }

// export default Wishlist

import React from 'react';
import Header from '../componnets/Header';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';
import toast, { Toaster } from 'react-hot-toast';
import empty_wishlist from '../assets/basket.gif'

const Wishlist = () => {
  const userCart = useSelector(state => state.cartReducer);
  const userWishlist = useSelector(state => state.wishlistReducer);
  const dispatch = useDispatch();

  const handleCart = (product) => {
    dispatch(removeItem(product.id));
    dispatch(addToCart(product));

    const existingProduct = userCart?.find(item => item?.id === product.id);
    if (existingProduct) {
      toast.success("Product count is incrementing");
    } else {
      toast.success("Product added to Cart");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="pt-24 px-5 flex-grow">
        {userWishlist?.length > 0 ? (
          <>
            <h1 className="text-4xl font-bold text-red-500 mb-6 text-center sm:text-left">My Wishlist</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {userWishlist?.map((product) => (
                <div key={product.id} className="border rounded p-4 shadow-lg hover:shadow-xl transition-all">
                  <img className="w-full h-48 object-cover rounded" src={product?.thumbnail} alt="Product image" />
                  <div className="text-center mt-3">
                    <h3 className="text-xl font-bold">{product?.title}</h3>
                    <div className="flex justify-center gap-4 mt-3">
                      <button
                        onClick={() => {
                          dispatch(removeItem(product?.id));
                          toast.success("Item removed successfully!");
                        }}
                        className="text-xl text-red-600 hover:text-red-800 transition-all"
                      >
                        <i className="fa-solid fa-heart-circle-xmark"></i>
                      </button>
                      <button onClick={() => handleCart(product)} className="text-xl text-green-700 hover:text-green-900 transition-all">
                        <i className="fa-solid fa-cart-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="flex flex-col justify-center items-center min-h-screen text-center">
            <img className="w-60 md:w-96" src={empty_wishlist} alt="Empty wishlist" />
            <h1 className="text-2xl sm:text-3xl text-red-600 mt-5">Your wishlist is empty!!!</h1>
          </div>
        )}
      </div>
      <Toaster position="top-right" />
    </div>
  );
};

export default Wishlist;
