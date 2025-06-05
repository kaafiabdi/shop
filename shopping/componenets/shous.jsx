import shoes from '/sawiro/sneaker.webp'
export default function   Shoes(){
    return(
        <>
       <div className="flex justify-center items-center  ">
         <div >
              <p className="text-1xl text-amber-700 capitalize">Deal of this day</p>
              <p className="text-3xl text-amber-800  capitalize font-bold mt-1">white shous beeps</p>
              <div className="flex gap-3.5 mt-2">
                 <p className="line-through text-red-500">$79.99</p>
                 <p className="font-bold  text-amber-800 ">$59.90</p>
              </div>
              <button className="bg-amber-900 text-white p-1 font-bold mb-4 mt-3">save 20%</button>
              
              <div className="flex bg-amber-800 text-white gap-7 text-center p-5 ">
                 <div>
                   <p className="text-3xl font-bold">02</p>
                   <p className="text-sm capitalize ">days</p>
                 </div>
              <div>
                   <p className="text-3xl font-bold">12</p>
                   <p className="text-sm capitalize ">hours</p>
              </div>
              <div>
                  <p className="text-3xl font-bold">02</p>
                  <p className="text-sm capitalize ">minutes</p>
              </div>
              <div>
                  <p className="text-3xl font-bold">02</p>
                   <p className="text-sm capitalize ">seconds</p>
              </div>
              </div>
             <button className="underline text-amber-700 font-bold text-lg hover:text-black">shop now</button>
        </div>

        <div>
            <img src={shoes} alt="" width={200} />
        </div>
    </div>
     </>
)
}