import {Routes, Route} from 'react-router-dom';
import Home from '../paginas/Home';
import PaginaBase from '../paginas/PaginaBase';

export default function Rotas(){
    return(
        <Routes>
            <Route path='/' element={<PaginaBase/>}>
                <Route index element = {<Home/>}/>
            </Route>
        </Routes>
    );
}