import React from 'react'
import man from '/sawiro/man2.jpg';
import man2 from '/sawiro/man.jpg';
import women1 from '/sawiro/women1.jpg'
import women2 from '/sawiro/women2.jpg'
function Home() {
  return (
    <div>
        <header className='flex justify-around capitalize list-none p-10 '>
            <nav className='flex gap-5 text-lg '>
              <li><a href="#">home</a></li>    
              <li><a href="#">shop</a></li> 
              <li><a href="#">collection</a></li>
              <li><a href="#">blog</a></li>
              <li><a href="#">contact</a></li>   

            </nav>
            <div className='flex items-center gap-5 '>
              <button style={{backgroundColor:'#1b1513' }} className='pl-5 pr-20 pt-1.5 pb-1.5 rounded-3xl'  >         
                <i class="fa-solid fa-magnifying-glass text-white"></i></button>
              <i class="fa-solid fa-user"></i>
              <i class="fa-regular fa-heart"></i>
              <i class="fa-solid fa-cart-shopping"></i>
              <i class="fa-solid fa-bars"></i>

            </div>
        </header>
        <div className='flex items-center justify-center m-10 gap-1.5'>
             <img src={man}   alt=""  width={240} />
             <img src={man2}  alt=""  width={200}/>
             <img src={women1} alt="" width={230}/>
             <img src={women2} alt="" width={203} />
        </div>
        <p className='text-center text-2xl leading-none mt-6' style={{color:'#ff1616'}}>Create your type fashion model</p>
    </div>
  )
}

export default Home