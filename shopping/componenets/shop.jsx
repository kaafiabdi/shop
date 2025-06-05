import React from 'react'
import coffe from '/sawiro/cof.jpg'
import bag from '/sawiro/bag.jpg'
import earing from '/sawiro/earing.jpg'
import shoes from '/sawiro/sh.jpg'


function shop() {
  return (
    <div >
       <div className='ml-56'  style={{color:'#815e47'}}>
        <h4 className='text-4xl '>New Arrival </h4>
        <p>Our new product this month</p>
       </div>
       <div className='flex items-center justify-center m-10 gap-1.5'>
     <div>
      <img src={coffe} alt=""   width={200}/>
       <p>SHIRT COFFEE BEEPS</p>
       <span style={{color:'#f9d375'}}>
       <i class="fa-solid fa-star p-1.5"></i>
       <i class="fa-solid fa-star p-1.5"></i>
       <i class="fa-solid fa-star p-2"></i>
       <i class="fa-solid fa-star p-2"></i>
        <i class="fa-solid fa-star "></i>

       </span>
        <p className='text-2xl'>$59.90</p>

      </div>       
         <div className=''>
          <img src={bag} alt=""     width={200}  />
            <p>SHIRT COFFEE BEEPS</p>
       <span style={{color:'#f9d375'}}>
       <i class="fa-solid fa-star p-1.5"></i>
       <i class="fa-solid fa-ystar p-1.5"></i>
       <i class="fa-solid fa-star p-2"></i>
       <i class="fa-solid fa-star p-2"></i>
      <i class="fa-solid fa-star "></i>

       </span>
        <p className='text-2xl'>$39.90</p>

         </div>  
         <div>
            <img src={earing} alt=""  width={200} />
              <p>SHIRT COFFEE BEEPS</p>
       <span style={{color:'#f9d375'}}>
       <i class="fa-solid fa-star p-1.5"></i>
       <i class="fa-solid fa-star p-1.5"></i>
       <i class="fa-solid fa-star p-2"></i>
       <i class="fa-solid fa-star p-2"></i>
      <i class="fa-solid fa-star "></i>

       </span>
         <p className='text-2xl'>$60.90</p>

          </div> 
          <div> 
             <img src={shoes} alt=""   width={200}/>
               <p>SHIRT COFFEE BEEPS</p>
       <span style={{color:'#f9d375'}}>
       <i class="fa-solid fa-star p-1.5"></i>
       <i class="fa-solid fa-star p-1.5"></i>
       <i class="fa-solid fa-star p-2"></i>
       <i class="fa-solid fa-star p-2"></i>
      <i class="fa-solid fa-star "></i>

       </span>
       <p className='text-2xl'>$29.90</p>
          </div>

       </div>
    </div>
  )
}

export default shop