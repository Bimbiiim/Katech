import K from '../Aset/Katech.jpeg'


export default function Example() {
  return (
  <nav class="text-center sm:text-left w-full h-max p-3 bg-slate-600 sm:flex sm:space-x-7">

    <div class="sm:flex-initial">
    <a href="LPage">
      <img src={K} class="w-48 h-auto rounded-lg mx-auto sm:ml-4 mb-4 sm:mb-0 sm:-1"/>
    </a>
    </div>

    <div class="sm:w-96" />
    <div class="sm:w-40" />


    <div class="sm:my-auto">
    <a href="LPage" class="h-16 hover:text-gray-800 hover:font-bold sm:flex-initial ">
      Berita
    </a>
    </div>

    <div class="dropdown dropdown-right dropdown-hover sm:my-auto">
          <label class="h-max hover:text-gray-800 hover:font-bold sm:flex-initial bg-transparent pb-1">Tutorial</label>
          <div class="bg-transparent p-3 dropdown-content menu -mt-9 sm:mt-0 -ml-2 sm:-ml-20 sm:mt-5">
          <ul class="bg-slate-600 rounded-b-lg w-auto">
              <li><a href="NF" class="text-white hover:text-gray-800">Andorid</a></li>
              <li><a href="NF" class="text-white hover:text-gray-800">Windows</a></li>
              <li><a href="NF" class="text-white hover:text-gray-800">macOS</a></li>
              <li><a href="NF" class="text-white hover:text-gray-800">Linux</a></li>
              <li><a href="NF" class="text-white hover:text-gray-800">Internet</a></li>
          </ul>
          </div>
    </div>

    <div class="sm:my-auto">
    <a href="NF1" class="h-16 hover:text-gray-800 hover:font-bold sm:flex-initial ">
      Cryptocurrency
    </a>
    </div>


    <div class="dropdown dropdown-right dropdown-hover sm:my-auto">
      <label class="flex-col-reverse h-max hover:text-gray-800 hover:font-bold sm:flex-initial bg-transparent pb-1">Lainnya</label>
        <div class="bg-transparent p-3 dropdown-content menu -mt-9 sm:mt-0 -ml-2 sm:-ml-24 sm:mt-5">
          <ul class="bg-slate-600 rounded-b-lg w-auto">
            <li><a href="NF" class="text-white hover:text-gray-800">Kontak</a></li>
            <li><a href="NF" class="text-white hover:text-gray-800">Beriklan</a></li>
            <li><a href="NF" class="text-white hover:text-gray-800">Berlangganan</a></li>
            <li><a href="NF" class="text-white hover:text-gray-800">Tentang</a></li>
          </ul>
        </div>
    </div>

    {/* Search Bar */}
    <div class="mt-2">
      <div class="dropdown dropdown-hover">
        <a class="h-16 hover:text-gray-800 hover:font-bold sm:flex-initial ">
          <label class="flex-col-reverse h-max hover:text-gray-800 hover:font-bold sm:flex-initial bg-transparent pb-1 pt-5">
            <svg
              class="w-5 h-5 sm:-ml-2 sm:mr-3"
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
        </a>

        <ul class="dropdown-content menu bg-transparent p-2 rounded-box w-auto -ml-28 sm:-ml-48 mt-0 sm:-mt-1 sm:pt-4 sm:-ml-56">
                  
                <div class="form-control bg-slate-600 p-2 rounded-b-xl">
                  <div class="input-group">
                    <input type="text" placeholder="Search…" class="input input-bordered text-white" />
                    <button class="btn btn-square">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                  </div>
                </div>

        </ul>
      </div>
    </div>
  
  </nav>
  )
} 