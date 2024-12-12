import { Route, BrowserRouter, Routes } from "react-router-dom";
import ArquiveNotes from './src/pages/arquivenotes/arquivenotes';
import Dashboard from './src/pages/dashboard/dashboard';
import Signup from "./src/pages/signup/Signup";
import Login from "./src/pages/login/Login";
import Home from "./src/pages/home/Home";
const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/arquive" element={<ArquiveNotes />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Signup />} />


            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
