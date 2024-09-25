import { Route, Routes, Router } from 'react-router-dom'

import CatalogAnimal from '../pages/animais'
import Habitats from '../pages/habitat'
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
import Onca from '../pages/onca'
import PenguinsAf from '../pages/penguimaf'
import LobosGuara from '../pages/loboguara'
import MataAtlantica from '../pages/atlantica'
import AnimalPagina from '../pages/animal'
import HabitatPagina from '../pages/habitatspagina'
import Tabela from '../pages/tabela'

const AppRoutes = () => {
    return(
    <Routes>
      
        <Route path='/' element={<Home/>} />
        <Route path='/usuarioslista' element={<UsuariosLista />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/login' element={<Login />} />
        <Route path='/perfil' element={<Perfil />} />
        <Route path='/animais/:nome' element={<AnimalPagina />} />
        <Route path='/animais' element={<CatalogAnimal />} />
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
        <Route path='/oncapintada' element={<Onca />} />
        <Route path='/pinguinsafricanos' element={<PenguinsAf />} />
        <Route path='/loboguara' element={<LobosGuara />} />
        <Route path='/atlantica' element={<MataAtlantica />} />
        <Route path='/habitats/:nome' element={<HabitatPagina />} />
        <Route path='/habitats' element={<Habitats />} />
        <Route path='/tabela' element={<Tabela />}/>
        




      

      </Routes>
    )
}

export default AppRoutes