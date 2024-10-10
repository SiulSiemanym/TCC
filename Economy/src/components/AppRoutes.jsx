import { Route, Routes, Router } from 'react-router-dom'

import CatalogAnimal from '../pages/animais'
import Habitats from '../pages/habitat'
import Home from '../pages/home'
import Sobre from '../pages/sobre'
import Login from '../pages/login'
import Perfil from '../pages/perfil'
import EditarPerfil from '../pages/editarperfil'
import Pagamento from '../pages/pagamento'
import Cadastro from '../pages/cadastro'
import AnimalPagina from '../pages/animal'
import HabitatPagina from '../pages/habitatspagina'
import Usuario from '../pages/tabela'
import Item from '../pages/tabelaitem'
import Doacao from '../pages/tabeladoacao'
import Catalogo from '../pages/tabelacatalogo'
import EsqueciSenha from '../pages/esquecisenha'
import EditarUsuario from '../pages/editarusuario'
import EditarDoacao from '../pages/editardoacao'
import EditarItem from '../pages/editaritem'
import EditarCatalogo from '../pages/editarcatalogo'
import ItemTabela from '../pages/tabelaitem'
import CatalogoTabela from '../pages/tabelacatalogo'
import DoacaoTabela from '../pages/tabeladoacao'





const AppRoutes = () => {
    return(
    <Routes>
      
        <Route path='/' element={<Home/>} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/login' element={<Login />} />
        <Route path='/perfil' element={<Perfil />} />
        <Route path='/animais/:nome' element={<AnimalPagina />} />
        <Route path='/animais' element={<CatalogAnimal />} />
        <Route path='/editarperfil' element={<EditarPerfil />} />
        <Route path='/pagamento' element={<Pagamento />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/habitats/:nome' element={<HabitatPagina />} />
        <Route path='/habitats' element={<Habitats />} />
        <Route path='/usuariotabela' element={<Usuario />}/>
        <Route path='/itemtabela' element={<ItemTabela />}/>
        <Route path='/catalogotabela' element={<CatalogoTabela />}/>
        <Route path='/doacaotabela' element={<DoacaoTabela />}/>
        <Route path='/item' element={<Item />}/>
        <Route path='/doacao' element={<Doacao />}/>
        <Route path='/catalogo' element={<Catalogo />}/>
        <Route path='/esquecisenha' element={<EsqueciSenha />}/>
        <Route path="/editarusuario/:id" element={<EditarUsuario />} />
        <Route path='/editardoacao/:id'  element={<EditarDoacao />}/>
        <Route path='/editaritem/:id'  element={<EditarItem />}/>
        <Route path='/editarcatalogo/:id'  element={<EditarCatalogo />}/>






       
        




      

      </Routes>
    )
}

export default AppRoutes