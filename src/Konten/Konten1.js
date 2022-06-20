import Navbar from "../Komponen/Navbar22"
import k1 from '../Aset/Konten1.jpg'
import Footer from "../Komponen/Footer"
import API from "../Komponen/API"
import API2 from "../Komponen/API2"

export default function Example() {
    return (
    <>
    <Navbar/>

    <section class="bg-white h-max w-auto px-5 py-12 text-center text-gray-800">
        <img alt="gallery" class="block object-cover object-center w-auto h-auto md:h-96 rounded-lg m-auto" src={k1}/>
        <h1 class="mt-5 md:mt-10 text-2xl font-bold md:text-4xl">
            Cara Memasukkan Gambar ke Google Docs
        </h1>
        <div class="my-5 flex h-auto w-max m-auto space-x-5 text-base md:text-2xl">
            <a href="" class="text-blue-600 border-y-2 flex-auto"> Loki Fadilah </a>
            <h1 class="flex-auto border-y-2"> 26 Mei 2022 </h1>
            <a href="" class="text-blue-600 border-y-2 flex-initial w-32"> Internet </a>
        </div>
        <div class="my-7 h-auto w-9/12 border-2 border-transparent m-auto text-sm md:text-xl">
            <ul class="text-justify space-y-3">
                <li> Sama seperti ketika membuat dokumen di Microsoft Office, di Google Docs kita juga dapat memasukkan gambar ke dalam dokumen. </li>
                
                <li> Karena ini merupakan fitur yang sangat penting dan salah satu fitur yang akan sering kalian gunakan ketika membuat dokumen, maka saya akan menuliskan tutorialnya di artikel kali ini. </li>
                
                <li> Tutorial ini saya tulis menggunakan Google Docs di PC, namun kamu tetap dapat mengikutinya walaupun menggunakan Google Docs di Android atau iOS.</li>

                <li class="text-lg font-bold md:text-2xl"> Cara Memasukkan Gambar ke Google Docs </li>
                
                <li> Hal pertama yang harus Sobat Androbuntu lakukan ialah membuka situs Google Docs yaitu di docs.google.com kemudian masuk menggunakan akun Google kamu.</li>

                <li> Setelah itu buka dokumen yang sudah ada atau buat dokumen baru.</li>

                <li> Untuk menambahkan gambar ke dalam dokumen, klik menu <strong>Sisipkan {'>'} Gambar.</strong></li>

                <li> Dan kalian akan melihat ada 6 pilihan untuk memasukkan gambar,mulai dari Upload dari komputer, Telusuri internet, hingga Kamera.</li>

                <li> Pertama, saya akan tunjukkan terlebih dahulu cara memasukkan gambar yang bisa kamu upload dari komputer.</li>

                <li class="text-center"> ............................ </li>

                <li class="text-center"><strong> SELESAI </strong></li>
            </ul>       

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