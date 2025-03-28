// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'
// import { searchProdut } from '../redux/slices/productSlice'

// const Header = ({insideHome}) => {
//   const dispatch=useDispatch()
//   const userCart= useSelector(state=>state.cartReducer)

//  const userWishlist= useSelector(state=>state.wishlistReducer)
//   return (
//     <nav className=' bg-violet-600 w-full p-5 text-white  '>
//           <Link className='text-2xl font-bold' to={'/'}> <i className='fa-solid fa-truck-fast me-1'></i>E-Cart</Link>

//           <ul className='flex-1 text-right'>
//                  {insideHome &&  <li className='list-none inline-block px-5' ><input onChange={(e)=>dispatch(searchProdut(e.target.value.toLowerCase()))}  type="text"  style={{width:'300px'}} className='rounded p-2 text-black' placeholder='search your products here'/></li>

//                    }

//                     <li  className='list-none inline-block px-5' ><Link to={'/wishlist'}><i className="fa-solid fa-heart text-red-600"></i>Wishlist <span className='bg-black text-white rounded p-1'>{userWishlist?.length}</span></Link></li>

//                     <li  className='list-none inline-block px-5' ><Link to={'/cart'}><i className="fa-solid fa-cart-plus text-green-600"></i>Cart <span className='bg-black text-white rounded p-1'>{userCart?.length}</span></Link></li>
//           </ul>
//     </nav>
//   )
// }

// export default Header

// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { searchProdut } from '../redux/slices/productSlice';

// const Header = ({ insideHome }) => {
//   const dispatch = useDispatch();
//   const userCart = useSelector((state) => state.cartReducer);
//   const userWishlist = useSelector((state) => state.wishlistReducer);

//   return (
//     <nav className=' w-full p-4 text-white flex items-center justify-between' style={{background: "linear-gradient(90deg, #FF6F00, #FF1493)"}}>
//       <Link className='text-2xl font-bold flex items-center' to={'/'}>
//         <i className='fas fa-store me-2'></i>ShopEase
//       </Link>

//       {insideHome && (
//         <div className='hidden md:block ms-auto me-5'>
//           <input
//             onChange={(e) => dispatch(searchProdut(e.target.value.toLowerCase()))}
//             type='text'
//             className='rounded p-2 text-black w-72'
//             placeholder='Search your products here'
//           />
//         </div>
//       )}

//       <ul className='flex items-center space-x-5 text-sm md:text-base'>
//         <li>
//           <Link to={'/wishlist'} className='flex items-center gap-1 ms-3'>
//             <i className='fa-solid fa-heart text-red-600 '></i> Wishlist
//             <span className='bg-black text-white rounded px-2 py-1 text-xs'>{userWishlist?.length}</span>
//           </Link>
//         </li>
//         <li>
//           <Link to={'/cart'} className='flex items-center gap-1'>
//             <i className='fa-solid fa-cart-plus text-green-600'></i> Cart
//             <span className='bg-black text-white rounded px-2 py-1 text-xs'>{userCart?.length}</span>
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Header;
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchProdut } from '../redux/slices/productSlice';

const Header = ({ insideHome }) => {
  const dispatch = useDispatch();
  const userCart = useSelector((state) => state.cartReducer);
  const userWishlist = useSelector((state) => state.wishlistReducer);

  return (
    <nav className="w-full p-4 text-white flex items-center justify-between bg-gradient-to-r from-orange-500 to-pink-500">
      {/* Logo */}
      <Link className="text-xl md:text-2xl font-bold flex items-center flex-shrink-0" to={'/'}>
        <i className="fas fa-store mr-2"></i>ShopEase
      </Link>

      {/* Navigation Links and Search */}
      <div className="flex items-center space-x-3 md:space-x-5 text-sm flex-shrink-0">
        {/* Search Bar - Hidden on small screens, shown on md and up */}
        {insideHome && (
          <div className="hidden md:block flex-grow mx-4">
            <input
              onChange={(e) => dispatch(searchProdut(e.target.value.toLowerCase()))}
              type="text"
              className="rounded p-2 text-black w-full max-w-[200px] focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Search products"
            />
          </div>
        )}
        
        {/* Wishlist and Cart Links */}
        <ul className="flex items-center space-x-3 md:space-x-5">
          <li>
            <Link to={'/wishlist'} className="flex items-center gap-1 hover:text-gray-200 transition-colors">
              <i className="fa-solid fa-heart text-red-600"></i>
              <span className="hidden md:inline">Wishlist</span>
              <span className="bg-black text-white rounded px-2 py-1 text-xs">{userWishlist?.length}</span>
            </Link>
          </li>
          
          <li>
            <Link to={'/cart'} className="flex items-center gap-1 hover:text-gray-200 transition-colors">
              <i className="fa-solid fa-cart-plus text-green-600"></i>
              <span className="hidden md:inline">Cart</span>
              <span className="bg-black text-white rounded px-2 py-1 text-xs">{userCart?.length}</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;