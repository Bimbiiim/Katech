import K from '../Aset/Katech.jpeg'


export default function Example() {
  return (
  <>
  <header class="bg-blue-500 w-full h-max p-2 justify-center">

  <a href="LPage" class="m-auto">
          <img src={K} class="w-48 h-auto rounded-lg"/>
        </a>

    <img src={K} class="w-48 h-auto rounded-lg my-auto"/>

        <div href="LPage">
          <img src={K} class="w-48 h-auto rounded-lg"/>
        </div>

        <a href="LPage" class="md:block h-16 md:leading-[4rem] border-b-4 border-transparent hover:text-gray-800 hover:text-xl hover:font-bold">
          Berita
        </a>

        <div class="dropdown dropdown-hover">
          <label class="flex block h-auto md:leading-[4rem] hover:text-gray-800 hover:text-xl hover:font-bold">Tutorial</label>
          <ul class="dropdown-content menu bg-gray-400 rounded-box w-auto -ml-3 md:mt-1">
              <li><a href="#" class="hover:text-gray-800">Andorid</a></li>
              <li><a href="#" class="hover:text-gray-800">Windows</a></li>
              <li><a href="#" class="hover:text-gray-800">macOS</a></li>
              <li><a href="#" class="hover:text-gray-800">Linux</a></li>
              <li><a href="#" class="hover:text-gray-800">Internet</a></li>
          </ul>
        </div>

        <a href="NF1" class="md:block h-16 md:leading-[4rem] border-b-4 border-transparent hover:text-gray-800 hover:text-xl hover:font-bold" > Cryptocurrency </a>

        {/* <div class="dropdown dropdown-hover">
          <label class="flex block h-auto md:leading-[4rem] hover:text-gray-800 hover:text-xl hover:font-bold">Lainnya</label>
          <ul class="dropdown-content menu bg-gray-400 rounded-box w-auto -ml-6 md:mt-1">
              <li><a href="#" class="hover:text-gray-800">Kontak</a></li>
              <li><a href="#" class="hover:text-gray-800">Beriklan</a></li>
              <li><a href="#" class="hover:text-gray-800">Berlangganan</a></li>
              <li><a href="#" class="hover:text-gray-800">Tentang</a></li>
          </ul>
        </div> */}

        {/* Search Bar */}
        {/* <div class="dropdown dropdown-hover ">
          <label class="flex block h-16 md:leading-[4rem] border-transparent hover:text-gray-200 ml-16 hover:text-xl hover:font-bold">

                <svg
                  class="w-5 h-5 -ml-16"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    stroke-width="3"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>

          </label>
          <ul class="dropdown-content menu bg-gray-400 p-2 rounded-box w-auto -ml-48 -mt-5 md:-ml-52">
              
          <div class="form-control">
              <div class="input-group">
                <input type="text" placeholder="Search…" class="input input-bordered text-white" />
                <button class="btn btn-square">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
              </div>
          </div>

          </ul>
        </div> */}

  </header>
  </>

  )
} 