import { Route, Routes} from 'react-router-dom'

import Home from '../containers/Home'
import Movie from '../containers/Movies'
import Series from '../containers/Series'

function Router() {

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/filmes' element={<Movie />} />
            <Route path='/series' element={<Series />} />
        </Routes>
    )
}

export default Router