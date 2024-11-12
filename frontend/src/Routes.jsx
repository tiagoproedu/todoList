import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pageHome/Home";
import Login from "./pageLogin/Login";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' Component={Login} />
                <Route path='/home' Component={Home} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;