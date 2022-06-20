import Navbar from "../Komponen/Navbar22"
import k2 from '../Aset/Konten2.jpeg'
import Footer from "../Komponen/Footer"
import API from "../Komponen/API"
import API2 from "../Komponen/API2"

export default function Example() {
    return (
    <>
    <Navbar/>

    <section class="bg-white h-max w-auto px-5 py-12 text-center text-gray-800">
        <img alt="gallery" class="block object-cover object-center w-auto h-auto md:h-96 rounded-lg m-auto" src={k2}/>
        <h1 class="mt-5 md:mt-10 text-2xl font-bold md:text-4xl">
        Cara Mengetahui Wajah Orang yang Coba Membuka HP Android Kamu
        </h1>
        <div class="my-5 flex h-auto w-max m-auto space-x-5 text-base md:text-2xl">
            <a href="" class="text-blue-600 border-y-2 flex-auto"> Profesor Clover </a>
            <h1 class="flex-auto border-y-2"> 29 Juni 2022 </h1>
            <a href="" class="text-blue-600 border-y-2 flex-initial w-32"> Internet </a>
        </div>

        <div class="-mt-5 mb-7 h-auto w-9/12 border-2 border-transparent m-auto text-sm md:text-xl">

            <div class="p-1 text-center bg-transparent w-full h-max text-white hover:text-2xl hover:text-gray-900 hover:font-semibold mt-1 rounded-xl ">
                <a class="font-bold text-gray-800 hover:text-blue-500 mx-au"> 
                    Artikel dibawah berasal dari API
                </a>
            <div class="bg-slate-800 hover:bg-white mx-auto my-3 rounded-md w-full h-max p-3 table">
            <API />
            <br/>
            <div> 
                    <a class="font-bold text-blue-700 mx-au text-3xl">
                    Kesimpulan
                    </a>
                    <API2 />
            </div>
            
            </div>
            </div>            

            {/* <div class="flex mt-4 -mb-10 md:m-auto md:h-max md:w-max md:my-10 space-x-3 text-xs md:text-xl">
            <a href="#" class="bg-blue-600 w-max h-max flex-auto text-white p-2 md:p-3 rounded-lg md:rounded-xl flex-auto text-center"> Sebelumnya</a>
            <a href="#" class="bg-blue-600 w-max h-max flex-auto text-white p-2 md:p-3 rounded-lg md:rounded-xl flex-auto text-center"> 1 </a>
            <a href="#" class="bg-blue-600 w-max h-max flex-auto text-white p-2 md:p-3 rounded-lg md:rounded-xl flex-auto text-center"> 2 </a>
            <a href="#" class="bg-blue-600 w-max h-max flex-auto text-white p-2 md:p-3 rounded-lg md:rounded-xl flex-auto text-center"> 3 </a>
            <a href="#" class="bg-blue-600 w-max h-max flex-auto text-white p-2 md:p-3 rounded-lg md:rounded-xl flex-auto text-center"> Selanjutnya</a>
            </div> */}

        </div>
    </section>

    <Footer/>
    </>
    )
} 