import { Route, BrowserRouter, Routes } from "react-router-dom";
import ArquiveNotes from './src/pages/arquivenotes/arquivenotes';
import Dashboard from './src/pages/dashboard/dashboard';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/arquive" element={<ArquiveNotes />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
