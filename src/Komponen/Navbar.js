import K from '../Aset/Katech.jpeg'


export default function Example() {
  return (
  <>
    <header class="bg-gray-400">
  <div
    class="flex items-center justify-between h-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8"
  >
    <div class="flex items-center">
      <button type="button" class="p-2 sm:mr-4 lg:hidden">
        <svg
          class="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <a href="LPage" class="flex">
        <img src={K} class="w-48 h-auto rounded-lg"/>
      </a>
    </div>

    <div class="flex items-center justify-end flex-1">
      <nav
        class="hidden lg:uppercase lg:text-gray-600 lg:tracking-wide lg:font-bold lg:text-xs lg:space-x-4 lg:flex"
      >
        <a
          href="/about"
          class="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-gray-800 hover:border-current"
        >
          Berita
        </a>

        <div class="dropdown dropdown-hover">
          <label class="flex block h-16 leading-[4rem] border-b-4 border-transparent hover:text-gray-800 hover:border-current">Tutorial</label>
          <ul class="dropdown-content menu bg-gray-400 rounded-box w-auto -ml-5 -mt-4">
            <li><a class="hover:text-gray-800">Andorid</a></li>
            <li><a class="hover:text-gray-800">Windows</a></li>
            <li><a class="hover:text-gray-800">macOS</a></li>
            <li><a class="hover:text-gray-800">Linux</a></li>
            <li><a class="hover:text-gray-800">Internet</a></li>
          </ul>
        </div>

        <a
          href="/products"
          class="flex block h-16 leading-[4rem] border-b-4 border-transparent hover:text-gray-800 hover:border-current"
        >
            <h1 class="flex-auto">Cryptocurrency</h1>
        </a>

        <div class="dropdown dropdown-hover">
          <label class="flex block h-auto leading-[4rem] hover:text-gray-800">Lainnya</label>
          <ul class="dropdown-content menu bg-gray-400 rounded-box w-auto -ml-9 -mt-4">
            <li><a class="hover:text-gray-800">Kontak</a></li>
            <li><a class="hover:text-gray-800">Beriklan</a></li>
            <li><a class="hover:text-gray-800">Berlangganan</a></li>
            <li><a class="hover:text-gray-800">Tentang</a></li>
          </ul>
        </div>

        <div class="dropdown dropdown-hover">
          <label class="flex block h-16 leading-[4rem] border-transparent hover:text-gray-200 items-center ml-14"
          >

              <svg
                class="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
              >
                <path
                  stroke-width="3"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              
              <span class="sr-only"> Search </span>

          </label>
          <ul class="dropdown-content menu bg-gray-400 p-2 rounded-box w-auto -ml-40 -mt-5">
            
          <div class="form-control">
            <div class="input-group">
              <input type="text" placeholder="Search…" class="input input-bordered text-white" />
              <button class="btn btn-square">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </button>
            </div>
          </div>

          </ul>
        </div>
        
      </nav>
    </div>
  </div>
</header>
  </>

  )
} 