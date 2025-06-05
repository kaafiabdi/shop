import img1 from "../sawiro/download (1).jpeg"
import img2 from "../sawiro/download.jpeg"
import img3 from "../sawiro/man-suit-hd-8k-wallpaper-stock-photographic-image_890746-46774.avif"

export default function   Topsellers(){
    return(
        <>
        <div className="flex justify-center items-center mt-20 gap-9 mb-100">
            <div>
                <p className="text-3xl text-amber-800 capitalize font-bold">top sellers</p>
                <p className="capitalize text-amber-700 ">our best seller product of the mouth</p>
                <img src={img1} alt="" className="w-[200px] h-[200px] mt-3" />
                <p className="text-2xl text-amber-900 font-bold uppercase">one set</p>
                <p className="text-2xl text-amber-900 font-bold uppercase">navy beeps</p>
                <p className="text-amber-700">$59,90</p>
                <button className="bg-amber-950 text-white text-sm font-bold px-4 py-1 pb-2">shop now</button>
            </div>
            <div>
                <img src={img2} alt="" className="w-[200px] h-[250px] mt-5" />
                <div>
                    <p className="text-2xl text-amber-900 font-bold uppercase">shirt crey</p>
                    <p className="text-2xl text-amber-900 font-bold uppercase">beeps</p>
                    <p className="text-amber-700">$49,90</p>
                    <button className="bg-amber-950 text-white text-sm font-bold px-4 py-1 pb-2">shop now</button>

                </div>
            </div>
            <div>
                 <img src={img3} alt="" className="w-[200px] h-[250px] mt-5" />
                <div>
                    <p className="text-2xl text-amber-900 font-bold uppercase">shirt crey</p>
                    <p className="text-2xl text-amber-900 font-bold uppercase">beeps</p>
                    <p className="text-amber-700">$49,90</p>
                    <button className="bg-amber-950 text-white text-sm font-bold px-4 py-1 pb-2">shop now</button>

                </div>
            </div>
        </div>
        
       </>
)
}