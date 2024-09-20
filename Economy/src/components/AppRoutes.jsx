import { Route, Routes, Router } from 'react-router-dom'

import CatalogAnimal from '../pages/animal'
import Habitat from '../pages/habitat'
import Home from '../pages/home'
import UsuariosLista from '../pages/UsuariosLista'
import Sobre from '../pages/sobre'
import Login from '../pages/login'
import Perfil from '../pages/perfil'
import EditarPerfil from '../pages/editarperfil'
import Pagamento from '../pages/pagamento'
import Amazonias from '../pages/amazonia'
import AraraAzul from '../pages/araraazul'
import Girafa from '../pages/girafa'
import Panda from '../pages/panda'
import RinoceronteBranco from '../pages/rinocerontebranco'
import Cadastro from '../pages/cadastro'
import Recifes from '../pages/recifes'
import Savana from '../pages/savana'
import Manguezais from '../pages/manguezais'

const AppRoutes = () => {
    return(
    <Routes>
      
        <Route path='/' element={<Home/>} />
        <Route path='/animal' element={<CatalogAnimal /> } />
        <Route path='/habitat' element={<Habitat />} />
        <Route path='/usuarioslista' element={<UsuariosLista />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/login' element={<Login />} />
        <Route path='/perfil' element={<Perfil />} />
        <Route path='/editarperfil' element={<EditarPerfil />} />
        <Route path='/pagamento' element={<Pagamento />} />
        <Route path='/amazonia' element={<Amazonias />} />
        <Route path='/araraazul' element={<AraraAzul />} />
        <Route path='/girafa' element={<Girafa />} />
        <Route path='/panda' element={<Panda />} />
        <Route path='/rinocerontebranco' element={<RinoceronteBranco />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/recifes' element={<Recifes />} />
        <Route path='/savana' element={<Savana />} />
        <Route path='/manguezais' element={<Manguezais />} />



      

      </Routes>
    )
}

export default AppRoutes