// import React, { useEffect, useState } from 'react'
// import Header from '../componnets/Header'
// import { Link, useNavigate } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import { decrementQuantity, emptyCart, incrementQuantity, removeCartItem } from '../redux/slices/cartSlice'

// const Cart = () => {
//   const navigate= useNavigate()
//   const [cartTotal, setCartTotal] = useState(0)
//   const userCart = useSelector(state => state.cartReducer)

//   const dispatch=useDispatch()

//   useEffect(() => {
//     if (userCart?.length > 0) {
//       setCartTotal(userCart?.map(item => item.totalPrice).reduce((a1, a2) => a1 + a2))
//     }
//   })

//   const handleDecrementQuantity=(product)=>{
//     if(product?.quantity >1){
//       dispatch(decrementQuantity(product.id))
//     }else{
//       dispatch(removeCartItem(product.id))
//     }
//   }

//   const checkout=()=>{
//     dispatch(emptyCart())
//     alert("Order confirmed... Thank you for purchasing with us...")
//     navigate('/')
//   }

//   return (
//     <>
//       <Header />
//       <div style={{ paddingTop: '100px' }} className='px-5  '>
//         {
//           userCart?.length > 0 ?
//             <>
//               <h1 className='text-5xl font-bold text-blue-600'>Cart Summary</h1>

//               <div className='grid grid-cols-3  gap-4 mt-5'>
//                 <div className='col-span-2 border rounded p-5 shadow'>
//                   <table className='table-auto w-full'>
//                     <thead>
//                       <tr>
//                         <td className=' font-semibold'>#</td>
//                         <td className=' font-semibold'>Name</td>
//                         <td className=' font-semibold'>Image</td>
//                         <td className=' font-semibold'>Quantity</td>
//                         <td className=' font-semibold'>Price</td>
//                         <td className=' font-semibold'>...</td>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {
//                         userCart?.map((product, index) => (
//                           <tr>
//                             <td>{index + 1}</td>
//                             <td>{product?.title}</td>
//                             <td> <img width={'100px'} height={'100px'} src={product?.thumbnail} alt="" /></td>
//                             <td>
//                               <div>
//                                 <button onClick={()=>handleDecrementQuantity(product)} className='font-bold'>-</button>
//                                 <input type="text" style={{ width: '40px' }} className='border p-1 rounded mx-2' value={product?.quantity} readOnly />
//                                 <button onClick={()=>dispatch(incrementQuantity(product?.id))} className='font-bold'>+</button>
//                               </div>
//                             </td>
//                             <td>$ {product?.totalPrice}</td>
//                             <td>
//                               <button onClick={()=>dispatch(removeCartItem(product?.id))} className='text-red-600'> <i class="fa-solid fa-trash"></i></button>
//                             </td>
//                           </tr>

//                         ))
//                       }
//                     </tbody>

//                   </table>

//                   <div className='float-right mt-5'>
//                     <button onClick={()=>dispatch(emptyCart())} className='bg-red-600 rounded p-2 text-white'>Empty Cart</button>
//                     <Link to={'/'} className='bg-blue-600 ms-3 rounded p-2 text-white'>Shop More...</Link>

//                   </div>

//                 </div>

//                 <div className='col-span-1'>
//                   <div className='border rounded shadow p-5'>
//                     <h2 className='text-2xl font-bold my-4'>Total Amount: <span className='text-red-600'>$ {cartTotal}</span></h2>
//                     <hr />
//                     <button onClick={checkout} className='bg-green-600 rounded p-2 text-white w-full'>Check OUT</button>

//                   </div>

//                 </div>

//               </div>

//             </>
//             :
//             <div className='flex flex-col justify-center items-center h-screen'>
//               <img src="https://www.adanione.com/~/media/Foundation/Adani/emptyImages/empty_cart.gif" alt="" />
//               <h1 className='text-3xl text-red-600 mt-5'>Your Cart is empty!!!</h1>
//             </div>

//         }


//       </div>

//     </>
//   )
// }

// export default Cart





// import React, { useEffect, useState } from 'react';
// import Header from '../componnets/Header';
// import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { decrementQuantity, emptyCart, incrementQuantity, removeCartItem } from '../redux/slices/cartSlice';
// import toast, { Toaster } from 'react-hot-toast';

// const Cart = () => {
//   const navigate = useNavigate();
//   const [cartTotal, setCartTotal] = useState(0);
//   const userCart = useSelector((state) => state.cartReducer);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (userCart?.length > 0) {
//       setCartTotal(userCart.map((item) => item.totalPrice).reduce((a1, a2) => a1 + a2, 0));
//     }
//   }, [userCart]);

//   const handleDecrementQuantity = (product) => {
//     if (product?.quantity > 1) {
//       dispatch(decrementQuantity(product.id));
//     } else {
//       dispatch(removeCartItem(product.id));
//     }
//   };

//   const checkout = () => {
//     dispatch(emptyCart());
//     toast.success('Order confirmed... Thank you for purchasing with us...');
//     navigate('/');
//   };

//   return (
//     <>
//       <Header />
//       <Toaster position="top-right"/>
//       <div className="px-5 pt-24 min-h-[calc(100vh-160px)] flex flex-col">
     

//         {userCart?.length > 0 ? (
//           <>
//             <h1 className="text-3xl md:text-4xl font-bold text-amber-500 ">Cart Summary</h1>
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5">
//               <div className="lg:col-span-2 border rounded p-5 shadow overflow-x-auto">
//                 <table className="table-auto w-full text-sm md:text-base">
//                   <thead>
//                     <tr className="bg-gray-200">
//                       <th className="p-2">#</th>
//                       <th className="p-2">Name</th>
//                       <th className="p-2">Image</th>
//                       <th className="p-2">Quantity</th>
//                       <th className="p-2">Price</th>
//                       <th className="p-2">Action</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {userCart.map((product, index) => (
//                       <tr key={product.id} className="border-b text-center">
//                         <td className="p-2">{index + 1}</td>
//                         <td className="p-2">{product?.title}</td>
//                         <td className="p-2">
//                           <img
//                             className="w-16 h-16 object-cover mx-auto"
//                             src={product?.thumbnail}
//                             alt={product?.title}
//                           />
//                         </td>
//                         <td className="p-2">
//                           <div className="flex items-center justify-center gap-2">
//                             <button
//                               onClick={() => handleDecrementQuantity(product)}
//                               className="px-2 py-1 bg-gray-300 rounded"
//                             >
//                               -
//                             </button>
//                             <input
//                               type="text"
//                               className="w-10 text-center border rounded"
//                               value={product?.quantity}
//                               readOnly
//                             />
//                             <button
//                               onClick={() => dispatch(incrementQuantity(product?.id))}
//                               className="px-2 py-1 bg-gray-300 rounded"
//                             >
//                               +
//                             </button>
//                           </div>
//                         </td>
//                         <td className="p-2">$ {product?.totalPrice}</td>
//                         <td className="p-2">
//                           <button
//                             onClick={() => dispatch(removeCartItem(product?.id))}
//                             className="text-red-600"
//                           >
//                             <i className="fa-solid fa-trash"></i>
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>

//                 <div className="flex flex-col md:flex-row justify-end mt-5 gap-3">
//                   <button
//                     onClick={() => dispatch(emptyCart())}
//                     className="bg-red-600 text-white px-4 py-2 rounded"
//                   >
//                     Empty Cart
//                   </button>
//                   <Link to={'/'} className="bg-blue-600 text-white px-4 py-2 rounded text-center">
//                     Shop More...
//                   </Link>
//                 </div>
//               </div>

//               <div className="border rounded shadow p-5 w-full lg:w-80 self-start mx-auto my-auto">

//   <h2 className="text-xl md:text-2xl font-bold my-4">
//     Total Amount: <span className="text-red-600">$ {cartTotal}</span>
//   </h2>
//   <hr />
//   <button onClick={checkout} className="bg-green-600 text-white px-4 py-2 w-full rounded mt-4">
//     Check OUT
//   </button>
// </div>

//             </div>
//           </>
//         ) : (
//           <div className="flex flex-col justify-center items-center min-h-screen text-center">
//             <img
//               src="https://www.adanione.com/~/media/Foundation/Adani/emptyImages/empty_cart.gif"
//               alt="Empty Cart"
//               className="w-60 md:w-96"
//             />
//             <h1 className="text-xl md:text-3xl text-red-600 mt-5">Your Cart is empty!!!</h1>
//           </div>
//         )}
          
//       </div>
//     </>
//   );
// };

// export default Cart;



import React, { useEffect, useState } from 'react';
import Header from '../componnets/Header'; // Note: Check if 'componnets' is a typo; should be 'components'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { decrementQuantity, emptyCart, incrementQuantity, removeCartItem } from '../redux/slices/cartSlice';
import toast, { Toaster } from 'react-hot-toast';

const Cart = () => {
  const navigate = useNavigate();
  const [cartTotal, setCartTotal] = useState(0);
  const userCart = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userCart?.length > 0) {
      setCartTotal(userCart.map((item) => item.totalPrice).reduce((a1, a2) => a1 + a2, 0));
    } else {
      setCartTotal(0); // Reset total when cart is empty
    }
  }, [userCart]);

  const handleDecrementQuantity = (product) => {
    if (product?.quantity > 1) {
      dispatch(decrementQuantity(product.id));
    } else {
      dispatch(removeCartItem(product.id));
    }
  };

  const checkout = () => {
    dispatch(emptyCart());
    toast.success('Order confirmed... Thank you for purchasing with us...', {
      duration: 2000, 
    });
    setTimeout(() => {
      navigate('/'); 
    }, 2000); 
  };

  return (
    <>
      <Header />
      <Toaster position="top-right" /> 
      <div className="px-5 pt-24 min-h-screen flex flex-col">
        {userCart?.length > 0 ? (
          <>
            <h1 className="text-3xl md:text-4xl font-bold text-amber-500">Cart Summary</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5">
              <div className="lg:col-span-2 border rounded p-5 shadow overflow-x-auto">
                <table className="table-auto w-full text-sm md:text-base">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="p-2">#</th>
                      <th className="p-2">Name</th>
                      <th className="p-2">Image</th>
                      <th className="p-2">Quantity</th>
                      <th className="p-2">Price</th>
                      <th className="p-2">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userCart.map((product, index) => (
                      <tr key={product.id} className="border-b text-center">
                        <td className="p-2">{index + 1}</td>
                        <td className="p-2">{product?.title}</td>
                        <td className="p-2">
                          <img
                            className="w-16 h-16 object-cover mx-auto"
                            src={product?.thumbnail}
                            alt={product?.title}
                          />
                        </td>
                        <td className="p-2">
                          <div className="flex items-center justify-center gap-2">
                            <button
                              onClick={() => handleDecrementQuantity(product)}
                              className="px-2 py-1 bg-gray-300 rounded"
                            >
                              -
                            </button>
                            <input
                              type="text"
                              className="w-10 text-center border rounded"
                              value={product?.quantity}
                              readOnly
                            />
                            <button
                              onClick={() => dispatch(incrementQuantity(product?.id))}
                              className="px-2 py-1 bg-gray-300 rounded"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="p-2">$ {product?.totalPrice}</td>
                        <td className="p-2">
                          <button
                            onClick={() => dispatch(removeCartItem(product?.id))}
                            className="text-red-600"
                          >
                            <i className="fa-solid fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="flex flex-col md:flex-row justify-end mt-5 gap-3">
                  <button
                    onClick={() => dispatch(emptyCart())}
                    className="bg-red-600 text-white px-4 py-2 rounded"
                  >
                    Empty Cart
                  </button>
                  <Link to={'/'} className="bg-blue-600 text-white px-4 py-2 rounded text-center">
                    Shop More...
                  </Link>
                </div>
              </div>

              <div className="border rounded shadow p-5 w-full lg:w-80 self-start mx-auto my-auto">
                <h2 className="text-xl md:text-2xl font-bold my-4">
                  Total Amount: <span className="text-red-600">$ {cartTotal}</span>
                </h2>
                <hr />
                <button onClick={checkout} className="bg-green-600 text-white px-4 py-2 w-full rounded mt-4">
                  Check OUT
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col justify-center items-center min-h-screen text-center">
            <img
              src="https://www.adanione.com/~/media/Foundation/Adani/emptyImages/empty_cart.gif"
              alt="Empty Cart"
              className="w-60 md:w-96"
            />
            <h1 className="text-xl md:text-3xl text-red-600 mt-5">Your Cart is empty!!!</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;