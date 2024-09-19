import { Route, Routes } from 'react-router-dom'
import Home from '../Economy/src/pages/home'
import Animal from '../Economy/src/pages/animal'
import Habitat from '../Economy/src/pages/habitat'
import UsuariosLista from '../Economy/src/pages/UsuariosLista'
import Sobre from '../Economy/src/pages/sobre'
import Login from '../Economy/src/pages/login'
import Perfil from '../Economy/src/pages/perfil'
import EditarPerfil from '../Economy/src/pages/editarperfil'
import Pagamento from '../Economy/src/pages/pagamento'
import Amazonia from '../Economy/src/pages/amazonia'
import AraraAzul from '../Economy/src/pages/araraazul'
import Girafa from '../Economy/src/pages/girafa'
import Panda from '../Economy/src/pages/panda'
import RinoceronteBranco from '../Economy/src/pages/rinocerontebranco'
import Cadastro from '../Economy/src/pages/cadastro'
import Recifes from '../Economy/src/pages/recifes'
import Savana from '../Economy/src/pages/savana'
import Manguezais from '../Economy/src/pages/manguezais'


const AppRoutes = () => {
    return(
    <div>
      <Routes>
      
        <Route path='/home' element={<Home/>} />
        <Route path='/animal' element={<Animal /> } />
        <Route path='/habitat' element={<Habitat />} />
        <Route path='/usuarioslista' element={<UsuariosLista />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/login' element={<Login />} />
        <Route path='/perfil' element={<Perfil />} />
        <Route path='/editarperfil' element={<EditarPerfil />} />
        <Route path='/pagamento' element={<Pagamento />} />
        <Route path='/amazonia' element={<Amazonia />} />
        <Route path='/araraazul' element={<AraraAzul />} />
        <Route path='/girafa' element={<Girafa />} />
        <Route path='/panda' element={<Panda />} />
        <Route path='/rinocerontebranco' element={<RinoceronteBranco />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/recifes' element={<Recifes />} />
        <Route path='/savana' element={<Savana />} />
        <Route path='/manguezais' element={<Manguezais />} />



      

      </Routes>
    </div>
    )
}

export default AppRoutes