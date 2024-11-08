import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Login from "./pageLogin/Login";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' Component={Login} />
                <Route path='/home' Component={App} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;