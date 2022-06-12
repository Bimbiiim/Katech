import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const LPage = lazy(() => import('./Konten/LPage'));
const Konten1 = lazy(() => import('./Konten/Konten1'));


const App = () => (
<>
<Router>
   <Suspense fallback={<div>Loading...</div>}>

    <Routes>
      <Route path='/' element={<LPage />} />
      <Route path='/LPage' element={<LPage />} />
      <Route path='/Konten1' element={<Konten1 />} />
    </Routes>

   </Suspense>
 </Router>


</>
);

export default App;