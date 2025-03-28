// import React, { useEffect, useState } from 'react'
// import Header from '../componnets/Header'
// import { useParams } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import { addToWishlist } from '../redux/slices/wishlistSlice'
// import { addToCart } from '../redux/slices/cartSlice'

// const View = () => {
//   const userCart=useSelector(state=>state.cartReducer)

//   const dispatch=useDispatch() //to perform actions
//   const userwishlist= useSelector(state=>state.wishlistReducer)  //to select specific state

//   const [product,setproduct]=useState({})

//   const {id}= useParams()  //getting dynamic data using useParams hook
//   console.log(id);
  


//   useEffect(()=>{
//     if(sessionStorage.getItem("allproducts")){

//       const allProducts= JSON.parse(sessionStorage.getItem("allproducts"))
//       // console.log(allProducts.find(item=>item.id==id));
//       setproduct(allProducts.find(item=>item.id==id))
//     }
    
//   },[])

//   const handleWishlist=()=>{
//     const existingProduct= userwishlist?.find(item=>item?.id==id)
//     if(existingProduct){

//       alert("Product already in your Wishlist!!!")
//     }else{
//      dispatch(addToWishlist(product))
//     }

//   }


//   const handleCart=()=>{
   
//     dispatch(addToCart(product))

//     const existingProduct= userCart?.find(item=>item?.id==id)
//     if(existingProduct){

//       alert("Product count is incrementing")
//     }else{
//      alert("Product added to Cart")
//     }

//   }

//   console.log(product);
  
  
  

//   return (
//     <>
//     <Header/>
//     <div className='flex flex-col mx-5 '  >
//           <div className='grid grid-cols-2 items-center h-screen'>
//                    <div>
//                      <div className='flex flex-col items-center'> <img width={'450px'} height={'200px'} src={product?.thumbnail} alt="" /></div>
//                       <div className='flex justify-center mt-5 '>
//                                                     <button onClick={handleWishlist} className='bg-blue-600 text-white p-2 me-5'>Add to wishlist</button>
//                                                     <button onClick= {handleCart} className='bg-green-600 text-white p-2 ms-5'>Add to Cart</button>
  
//                                           </div>
//                    </div>

//                     <div>
//                               <h3 className='font-bold'>PID: {product?.id}</h3>
//                               <h1 className='text-5xl font-bold'>{product?.title}</h1>
//                               <h4 className='font-bold text-red-600 text-2xl'> $ {product?.price}</h4>
//                               <h4>Brand: {product?.brand}</h4>
//                               <h4>Category: {product?.category}</h4>
//                               <p> 
//                                         <span className='font-bold'>Description</span>: {product?.description}
                                       

//                               </p>

//                               <h3 className='font-bold mt-5'>Client Reviews</h3>
//                               {
//                                 product?.reviews?.length>0?
//                                 product?.reviews?.map(item=>(
//                                   <div key={item?.date} className='shadow-border p-2 mb-2'>
//                                     <h5>
//                                       <span className='font-bold'>{item?.reviewerName}</span>: <span>{item?.comment}</span>
//                                     </h5>
//                                     <p>Rating: {item?.rating} <i class="fa-solid fa-star text-yellow-400"></i> </p>


//                                   </div>
//                                 ))
//                                 :
//                                 <div>No Reviews Yet!!!</div>
//                               }
//                     </div>

//           </div>

//     </div>
//     </>
//   )
// }

// export default View
import React, { useEffect, useState } from 'react';
import Header from '../componnets/Header';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';
import toast, { Toaster } from 'react-hot-toast';

const View = () => {
  const userCart = useSelector(state => state.cartReducer);
  const dispatch = useDispatch();
  const userwishlist = useSelector(state => state.wishlistReducer);
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if (sessionStorage.getItem("allproducts")) {
      const allProducts = JSON.parse(sessionStorage.getItem("allproducts"));
      setProduct(allProducts.find(item => item.id == id));
    }
  }, [id]);

  const handleWishlist = () => {
    const existingProduct = userwishlist?.find(item => item?.id == id);
    if (existingProduct) {
      toast.error("Product already in your Wishlist!!!");
    } else {
      dispatch(addToWishlist(product));
      toast.success("Product added to Wishlist");
    }
  };

  const handleCart = () => {
    dispatch(addToCart(product));
    const existingProduct = userCart?.find(item => item?.id == id);
    // toast.success(existingProduct ? "Product count is incrementing" : "Product added to Cart");

    if (existingProduct) {
      toast.success(" Product count is incrementing", {
        icon: "⚠️",
        style: {
          border: "1px solid #FFA500",  
          background: "#FFF3CD",        
          color: "#856404",             
        },
      });
    } else {
      toast.success(" Product added to Cart");
    }
  };

  return (
    <>
      <Header />
      <div className='flex flex-col w-full min-h-screen px-4 md:px-10 lg:px-20 pt-20 pb-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full h-full'>
          <div className='flex flex-col items-center w-full'>
            <img className='w-full max-w-lg' src={product?.thumbnail} alt={product?.title} />
            <div className='flex flex-wrap justify-center mt-5 gap-4 w-full'>
              <button onClick={handleWishlist} className='bg-blue-600 text-white px-4 py-3 rounded-md w-full max-w-xs '>Add to Wishlist</button>
              <button onClick={handleCart} className='bg-green-600 text-white px-4 py-2 rounded-md w-full max-w-xs'>Add to Cart</button>
            </div>
          </div>
          <div className='w-full pt-20'>
            <h3 className='font-bold text-lg'>PID: {product?.id}</h3>
            <h1 className='text-3xl md:text-5xl font-bold'>{product?.title}</h1>
            <h4 className='font-bold text-red-600 text-xl md:text-2xl'>$ {product?.price}</h4>
            <h4 className='text-lg'>Brand: {product?.brand}</h4>
            <h4 className='text-lg'>Category: {product?.category}</h4>
            <p className='mt-4'>
              <span className='font-bold'>Description</span>: {product?.description}
            </p>
            <h3 className='font-bold mt-5 text-xl'>Client Reviews</h3>
            {product?.reviews?.length > 0 ? (
              product?.reviews?.map(item => (
                <div key={item?.date} className='shadow-md p-3 mb-2 border rounded-md w-full'>
                  <h5>
                    <span className='font-bold'>{item?.reviewerName}</span>: <span>{item?.comment}</span>
                  </h5>
                  <p>Rating: {item?.rating} <i className='fa-solid fa-star text-yellow-400'></i></p>
                </div>
              ))
            ) : (
              <div className='text-gray-500'>No Reviews Yet!!!</div>
            )}
          </div>
        </div>
         <Toaster position="top-right"/>
      </div>
    </>
  );
};

export default View;
