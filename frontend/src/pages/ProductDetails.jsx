// import React from 'react'
// import { MdOutlineNavigateNext } from "react-icons/md";
// import StarRating from '../components/common/StarRating';


// const ProductDetails = () => {
//   return (
//     <div className='mx-auto lg:mx-[5rem] flex flex-col w-11/12 max-w-maxContent justify-between gap-4 '>
//        <div className='flex items-start justify-start'>
//             <span className='flex items-center justify-center'>Home <MdOutlineNavigateNext className='mt-1 '/></span>
//             <span className='flex items-center justify-center'>Shop <MdOutlineNavigateNext className='mt-1 '/></span>
//             <span className='flex items-center justify-center'>Men <MdOutlineNavigateNext className='mt-1 '/></span>
//         </div>

//         <div className='flex items-center justify-center'>
//             <div>
//                 <div className='flex flex-col'>
//                     <div></div>
//                     <div></div>
//                     <div></div>
//                 </div>

//                 <div></div>
//             </div>

//             <div>
//                 <div>
//                     <h2>{product.title}</h2>
//                     <StarRating rating={product.rating}/>
//                     <div>
//                         <p>{`$${product.price}`}</p>
//                     </div>
//                     <p>{product.description}</p>
//                 </div>

//                 <hr className='my-[1rem]'/>

//                 <div>
//                     <p>Select Colors</p>
//                     <div>
//                         {
//                             product.colors.map((colors,index)=>{
                                
//                                     return (
//                                       <div
//                                       key={index}
//                                         className="rounded-full w-[37px] h-[37px]   border-2"
//                                         style={{ backgroundColor: colors.color }}
//                                       ></div>
//                                     );
                        
//                             })
//                         }
//                     </div>
//                 </div>

                
//                 <hr className='my-[1rem]'/>

//                 <div>
//                     <h2>Choose Size</h2>
//                     <div>
//                         {
//                             product.size.map((items)=>{


                            
//                             )
//                         }
//                     </div>
//                 </div>
//             </div>

//         </div>
//     </div>
//   )
// }

// export default ProductDetails