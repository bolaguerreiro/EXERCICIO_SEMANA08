import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import CategoriaProduto from "../components/CategoriaProduto";

function RoutesComponent() {
    return (
        <Routes>
            <Route path='/login' element={<Login/>} />
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path='/produto' element= {<CategoriaProduto />} />
        </Routes>
    )
}
export default RoutesComponent