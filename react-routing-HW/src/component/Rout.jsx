import {Routes,Route} from 'react-router-dom'
import Home from './Home'

import Cards from './Cards'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'
import Card4 from './Card4'
import Card5 from './Card5'


export default function Rout() {
  return (
    <>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Card1' element={<Card1/>}/>
      <Route path='/Card2' element={<Card2/>}/>
      <Route path='/Card3' element={<Card3/>}/>
      <Route path='/Card4' element={<Card4/>}/>
      <Route path='/Card5' element={<Card5/>}/>
    </Routes>

    {/* <Cards/> */}

     
    </>
  )
}
