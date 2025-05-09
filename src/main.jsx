import { createRoot } from 'react-dom/client'
import './index.css'
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Mainpage from './jsx/mainpage.jsx'
import Postpage from './jsx/Postpage.jsx'
import Viewpage from './jsx/viewpage.jsx'


createRoot(document.getElementById('root')).render(
        
   // basename={import.meta.env.BASE_URL}

    <BrowserRouter>
     <Routes>
        <Route index element = {<Mainpage/>}></Route>
        <Route path="write" element = {<Postpage/>}></Route>
        <Route path="post/:id" element= {<Viewpage/>}></Route>
     </Routes>
    </BrowserRouter>
    
    )
