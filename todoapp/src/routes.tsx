import { Route, Routes } from 'react-router'
import TodoVersion1 from './pages/TodoVersion1'
import NotFound from './pages/NotFound';
import HomePage from './pages/HomePage';


const routes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/todo-v1" element={<TodoVersion1 />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default routes;