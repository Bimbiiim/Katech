import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const LPage = lazy(() => import('./Konten/LPage'));
const Konten1 = lazy(() => import('./Konten/Konten1'));
const Konten2 = lazy(() => import('./Konten/Konten2'));
const NF = lazy(() => import('./Konten/NF'));
const NF1 = lazy(() => import('./Konten/NF1'));


const App = () => (
<>
<Router>
   <Suspense fallback={<div>Loading...</div>}>

    <Routes>
      <Route path='/' element={<LPage />} />
      <Route path='/LPage' element={<LPage />} />
      <Route path='/Konten1' element={<Konten1 />} />
      <Route path='/Konten2' element={<Konten2 />} />
      <Route path='/NF' element={<NF />} />
      <Route path='/NF1' element={<NF1 />} />
    </Routes>

   </Suspense>
 </Router>


</>
);

export default App;