import { Route, Routes } from 'react-router-dom'

import Home from '../containers/Home'
import Movie from '../containers/Movies'
import Series from '../containers/Series'
import DefaultLayout from '../layout/DefaultLayout'
import Detail from '../containers/Detail'

function Router() {

    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/filmes' element={<Movie />} />
                <Route path='/series' element={<Series />} />
                <Route path='/detalhe/:id' element={<Detail />} />
            </Route>
        </Routes>
    )
}

export default Router