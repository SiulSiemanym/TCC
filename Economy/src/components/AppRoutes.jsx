import { Route, Routes } from 'react-router-dom'
import Home from '../Economy/src/pages/home'
import Animal from '../Economy/src/pages/animal'
import Habitat from '../Economy/src/pages/habitat'

const AppRoutes = () => {
    return(
    <div>
      <Routes>
      
        <Route path='/home' element={<Home/>} />
        <Route path='/animal' element={<Animal /> } />
        <Route path='/habitat' element={<Habitat />} />
        <Route path='/usuarioslista' element={<UsuariosLista />} />

      

      </Routes>
    </div>
    )
}

export default AppRoutes