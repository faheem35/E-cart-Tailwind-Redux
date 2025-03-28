// import React from 'react'
// import { Link } from 'react-router-dom'

// const Footer = () => {
//   return (
//     <div style={{height:'250px',marginTop:'100px'}} className='mt-5 w-full bg-violet-600 text-white p-4'>


//       <div className='flex justify-between p-4'>
//         <div style={{width:'400px'}} className='intro'>
//           <h5 className='text-xl font-bold'><i className='fa-solid fa-truck-fast me-1'></i> E-Cart</h5>
//           <p>Designed and built with all the love in the world by the Luminar team with the help of our contributors.</p>
//           <p>Code licensed Luminar, docs CC BY 3.0.</p>
//           <p>Currently v5.3.2.</p>

//         </div>
//          {/* links */}
//          <div className='flex flex-col'>
//           <h5 className='text-xl font-bold'>Links</h5>
//           <Link to={'/'} style={{textDecoration:'none' , color:'white'}} >Landing page</Link>
//           <Link to={'/home'} style={{textDecoration:'none' , color:'white'}} >Home page</Link>
//           <Link to={'/history'} style={{textDecoration:'none' , color:'white'}} >Watch History page</Link>
//         </div>
//         {/* guides */}
//         <div className='flex flex-col'>
//           <h5 className='text-xl font-bold'>Guides</h5>
//           <a href="https://react.dev/" style={{textDecoration:'none', color:'white'}} target='_blank'>React</a>
//           <a href="https://react-bootstrap.github.io/" style={{textDecoration:'none', color:'white'}} target='_blank'>React Bootstrap</a>
//           <a href="https://reactrouter.com/" style={{textDecoration:'none', color:'white'}} target='_blank'>React Router</a>

//         </div>
//         {/* contact */}
//         <div className='flex flex-col'>
//         <h5 className='text-xl font-bold'>Contacts</h5>
//         <div className='flex'>
//           <input type="text" className='form-control me-3' placeholder='Enter Your Email Here...'/>
//           <button className='btn btn-info'><i className="fa-solid fa-arrow-right"></i></button>
//         </div>
//         <div className='icons flex justify-between mt-3'>
//           <a href="https://x.com/__x" style={{textDecoration:'none', color:'white'}} target='_blank'><i className="fa-brands fa-x-twitter"></i></a>
//           <a href="https://www.instagram.com/" style={{textDecoration:'none', color:'white'}} target='_blank'><i className="fa-brands fa-instagram"></i></a>
//           <a href="https://www.facebook.com/" style={{textDecoration:'none', color:'white'}} target='_blank'><i className="fa-brands fa-facebook"></i></a>
//           <a href="" style={{textDecoration:'none', color:'white'}}><i className="fa-solid fa-phone" target='_blank'></i></a>
//           <a href="https://in.linkedin.com/" style={{textDecoration:'none', color:'white'}} target='_blank'><i className="fa-brands fa-linkedin"></i></a>
//         </div>
//         </div>


//       </div>
//       <p className='text-center mt-3'>Copyright ©E-Cart Inc. All rights reserved.</p>
//     </div>
//   )
// }

// export default Footer



import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='mt-5 w-full  text-white p-6 md:p-10 ' style={{background: "linear-gradient(90deg, #FF1493, #FF6F00)"}}>
      <div className='flex flex-col md:flex-row justify-between gap-8'>
        {/* Intro Section */}
        <div className='md:w-1/3'>
          <h5 className='text-xl font-bold flex items-center'>
            <i className='fas fa-store me-2'></i> ShopEase
          </h5>
          <p className='mt-2'>Designed and built with all the love in the world by the ShopEase team with the help of our contributors.</p>
          <p>Code licensed Luminar, docs CC BY 3.0.</p>
          <p>Currently v5.3.2.</p>
        </div>
        
        {/* Links Section */}
        <div className='flex flex-col'>
          <h5 className='text-xl font-bold'>Links</h5>
          <Link to={'/'} className='hover:underline'>Landing page</Link>
          <Link to={'/home'} className='hover:underline'>Home page</Link>
          <Link to={'/history'} className='hover:underline'>Watch History page</Link>
        </div>
        
        {/* Guides Section */}
        <div className='flex flex-col'>
          <h5 className='text-xl font-bold'>Guides</h5>
          <a href='https://react.dev/' target='_blank' className='hover:underline'>React</a>
          <a href='https://react-bootstrap.github.io/' target='_blank' className='hover:underline'>React Bootstrap</a>
          <a href='https://reactrouter.com/' target='_blank' className='hover:underline'>React Router</a>
        </div>
        
        {/* Contact Section */}
        <div className='flex flex-col md:w-1/4'>
          <h5 className='text-xl font-bold'>Contacts</h5>
          <div className='flex mt-2'>
            <input type='text' className='w-full p-2 rounded text-black' placeholder='Enter Your Email Here...' />
            <button className='bg-info text-white p-2 rounded ml-2'>
              <i className='fa-solid fa-arrow-right'></i>
            </button>
          </div>
          
          {/* Social Icons */}
          <div className='flex justify-between mt-3 text-lg'>
            <a href='https://x.com/__x' target='_blank' className='hover:text-gray-300 ms-6'><i className='fa-brands fa-x-twitter'></i></a>
            <a href='https://www.instagram.com/' target='_blank' className='hover:text-gray-300'><i className='fa-brands fa-instagram'></i></a>
            <a href='https://www.facebook.com/' target='_blank' className='hover:text-gray-300'><i className='fa-brands fa-facebook'></i></a>
            <a href='#' className='hover:text-gray-300'><i className='fa-solid fa-phone'></i></a>
            <a href='https://in.linkedin.com/' target='_blank' className='hover:text-gray-300'><i className='fa-brands fa-linkedin'></i></a>
            <a href=""></a>
          </div>
        </div>
      </div>
      
      <p className='text-center mt-6'>Copyright ©ShopEase Inc. All rights reserved.</p>
    </div>
  );
};

export default Footer;