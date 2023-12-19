import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Gateway from './pages/Gateway';
import TypeA from './pages/TypeA';
import TypeB from './pages/TypeB';

const Router = () => {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Gateway />} />
            <Route path="/type_a" element={<TypeA />} />
            <Route path="/type_b" element={<TypeB />} />
        </Routes>
    </BrowserRouter>
    )
}

export default Router;