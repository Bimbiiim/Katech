import Navbar from "../Komponen/Navbar22"
import Footer from "../Komponen/Footer"
import { React } from 'react'
import k1 from '../Aset/Konten1.jpg'
import k2 from '../Aset/Konten2.jpeg'
import k3 from '../Aset/Konten3.jfif'
import k4 from '../Aset/Konten4.jpg'
import k5 from '../Aset/Konten5.jpg'
import kn1 from '../Aset/kanan1.jpg'
import kn2 from '../Aset/kanan2.jpg'
import kn3 from '../Aset/kanan3.jpg'



export default function Example() {
    return (
    <>
    <Navbar/>

    <section class="overflow-hidden text-gray-600 bg-gray-200 ">
      <div class="container px-2 bg-gray-200 mt-10">
        <div class="flex space-x-2">
          {/* Sisi kiri */}
          <div class="flex-initial w-auto h-auto bg-gray-200 sm:text-sm md:text-base xl:text-lg">
                  {/* Konten 1 */}
                  <div class="bg-white m-2 mb-5 p-3 w-auto h-auto space-y-5 rounded-lg">

                    <div class="text-lg md:text-lg lg:text-4xl text-black text-center md:text-left">
                      <h1>
                          Cara memasukan gambar ke google docs
                      </h1>
                    </div>

                    <div class="flex space-x-5">
                      <div>
                      <img alt="gallery" class=" block object-cover object-center w-auto h-72 rounded-lg"
                      src={k1} />
                      </div>

                      <div class="w-80 pb-2 h-auto text-sm md:text-lg lg:text-xl">
                        <h2>
                        Sama seperti ketika membuat dokumen di Microsoft Office, di Google Docs kita juga dapat memasukkan gambar ke dalam dokumen. Karena … 
                        </h2> 
                        <br/>
                        <a href="Konten1" class="h-max w-auto bg-gray-700 text-xs p-2 text-white rounded-md lg:text-lg">
                          Selengkapnya
                        </a>
                      </div>

                    </div>
                  </div>
                  {/* Konten 2 */}
                  <div class="bg-white m-2 mb-5 p-3 w-auto h-auto space-y-5 rounded-lg">
                    <div class="text-lg md:text-lg lg:text-4xl text-black text-center md:text-left">
                      <h1>
                        Cara Mengetahui Wajah Orang yang Coba Membuka HP Android Kamu
                      </h1>
                    </div>

                    <div class="flex space-x-5 h-">
                      <div>
                      <img alt="gallery" class=" block object-cover object-center w-auto h-72 rounded-lg"
                      src={k2} />
                      </div>
                      
                        <div class="w-72 pb-2 h-auto text-sm md:text-lg lg:text-xl">
                          <h2>
                          Privasi merupakan hal penting yang saat ini jadi salah satu konsen di dunia keamanan. Tidak hanya untuk ruang lingkup yang …
                          </h2> 
                          <br/>
                          <a href="Konten2" class="h-max w-auto bg-gray-700 text-xs p-2 text-white rounded-md lg:text-lg">
                            Selengkapnya
                          </a>
                        </div>
                    </div>

                  </div>
                  {/* Konten 3 */}
                  <div class="bg-white m-2 mb-5 p-3 w-auto h-auto space-y-5 rounded-lg">

                    <div class="text-lg md:text-lg lg:text-4xl text-black text-center md:text-left">
                      <h1>
                        Cara Upload Video Reels Biar Hasilnya Tidak Buram
                      </h1>
                    </div>

                    <div class="flex space-x-5">
                      <div>
                      <img alt="gallery" class=" block object-cover object-center w-auto h-72 rounded-lg"
                      src={k3}/>
                      </div>

                      <div class="w-72 pb-2 h-auto text-sm md:text-lg lg:text-xl">
                        <h2>
                        Reels adalah fitur terbaru dari Instagram yang memungkinkan kamu untuk berbagi video pendek layaknya video-video yang ada di TikTok. Fitur ini …
                        </h2> 
                        <br/>
                        <a href="NF1" class="h-max w-auto bg-gray-700 text-xs p-2 text-white rounded-md lg:text-lg">
                          Selengkapnya
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Konten 4 */}
                  <div class="bg-white m-2 mb-5 p-3 w-auto h-auto space-y-5 rounded-lg">

                    <div>
                      <h1 class="text-lg md:text-lg lg:text-4xl text-black text-center md:text-left">
                        Review Trezor One Indonesia: Hardware Wallet Murah Terbaik
                      </h1>
                    </div>

                    <div class="flex space-x-5">
                      <div>
                      <img alt="gallery" class=" block object-cover object-center w-auto h-72 rounded-lg"
                      src={k4}/>
                      </div>

                      <div class="w-72 pb-2 h-auto text-sm md:text-lg lg:text-xl">
                        <h2>
                        Untuk Sobat Katech yang sudah sering membaca artikel-artikel kami, mungkin akan menyadari bahwa beberapa waktu belakangan ini kami sedang sering …
                        </h2> 
                        <br/>
                        <a href="NF1" class="h-max w-auto bg-gray-700 text-xs p-2 text-white rounded-md lg:text-lg">
                          Selengkapnya
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Konten 5 */}
                  <div class="bg-white m-2 mb-5 p-3 w-auto h-auto space-y-5 rounded-lg">

                    <div>
                      <h1 class="text-lg md:text-lg lg:text-4xl text-black text-center md:text-left">
                        Cara Membuat Wallet Ethereum di PC, Android dan iPhone
                      </h1>
                    </div>

                    <div class="flex space-x-5">
                      <div>
                      <img alt="gallery" class=" block object-cover object-center w-auto h-72 rounded-lg"
                      src={k5}/>
                      </div>

                      <div class="w-72 pb-2 h-auto text-sm md:text-lg lg:text-xl">
                        <h2>
                        Ada banyak aplikasi dompet Ethereum yang dapat kamu gunakan untuk mengirim dan menerima Ethereum. Namun yang pelru diingat ialah, jangan … 
                        </h2> 
                        <br/>
                        <a href="NF1" class="h-max w-auto bg-gray-700 text-xs p-2 text-white rounded-md lg:text-lg">
                          Selengkapnya
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="bg-transparent m-2 mb-5 p-3 w-auto h-auto space-y-5 rounded-xl text-right">
                    <a href="LPage" class="bg-gray-800 m-2 mb-5 p-3 w-max h-max text-center text-white rounded-sm">
                    Berikutnya
                    </a>
                  </div>
          </div>

          {/* Sisi Kanan */}
          <div class="flex-initial w-80 h-auto bg-gray-200 text-center">
                  {/* Konten 1 */}
                  <div class="bg-white m-2 p-1 w-auto h-20 rounded-lg">  
                  </div>
                  {/* Konten 2 */}
                  <div class="bg-white m-2 p-1 w-auto h-20 rounded-lg">
                  </div>
                  {/* Konten 3 */}
                  <div class="bg-white m-2 mb-0 p-2 w-auto h-auto rounded-t-lg">
                    <img alt="gallery" class="object-cover object-center w-max h-20 md:h-36 rounded-lg m-auto mt-2" src={k5}/>
                    <div class="my-1">
                      <a href="NF" class="text-blue-600 text-sm md:text-base w-max h-max bg-transparent p-1">Cara Membuat Wallet Ethereum di PC, Android, dan iPhone.</a>
                      <h1 class="text-xs">oleh Profesor Clover</h1>
                    </div>
                  </div>
                  {/* Konten 4 */}
                  <div class="bg-white mx-2 my-0 p-2 w-auto h-auto">
                    <img alt="gallery" class="object-cover object-center w-max h-20 md:h-36 rounded-lg m-auto mt-2" src={k4}/>
                    <div class="my-1">
                      <a href="NF" class="text-blue-600 text-sm md:text-base w-max h-max bg-transparent p-1">Review Trezor One Indonesia: Hardware Wallet Murah Terbaik.</a>
                      <h1 class="text-xs">oleh Loki Fadilah</h1>
                    </div>
                  </div>
                  {/* Konten 5 */}
                  <div class="bg-white mx-2 my-0 p-2 w-auto h-auto">
                    <img alt="gallery" class="object-cover object-center w-max h-20 md:h-36 rounded-lg m-auto mt-2" src={kn1}/>
                    <div class="my-1">
                      <a href="NF" class="text-blue-600 text-sm md:text-base w-max h-max bg-transparent p-1">Cara Mengirim Koin dari Trust Wallet ke Indodax.</a>
                      <h1 class="text-xs">oleh Profesor Clover</h1>
                    </div>
                  </div>
                  {/* Konten 6 */}
                  <div class="bg-white mx-2 my-0 p-2 w-auto h-auto">
                    <img alt="gallery" class="object-cover object-center w-max h-20 md:h-36 rounded-lg m-auto mt-2" src={kn2}/>
                    <div class="my-1">
                      <a href="NF" class="text-blue-600 text-sm md:text-base w-max h-max bg-transparent p-1">Cara Staking Tron di Trust Wallet.</a>
                      <h1 class="text-xs">oleh Loki Fadilah</h1>
                    </div>
                  </div>
                  {/* Konten 7 */}
                  <div class="bg-white m-2 mt-0 p-2 w-auto h-auto rounded-b-lg">
                    <img alt="gallery" class="object-cover object-center w-max h-20 md:h-36 rounded-lg m-auto mt-2" src={kn3}/>
                    <div class="my-1">
                      <a href="NF" class="text-blue-600 text-sm md:text-base w-max h-max bg-transparent p-1">Cara Mengirim BNB dari Binance ke Trust Wallet.</a>
                      <h1 class="text-xs">oleh Profesor Clover</h1>
                    </div>
                  </div>
          </div>
        </div>
      </div>
    </section>

    <Footer/>
    </>
    )
} 