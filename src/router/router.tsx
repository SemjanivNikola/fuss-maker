import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../features/dashboard/screen/Dashboard";
import CreateDocWizard from "../features/docs/create-wizard/CreateDocWizard";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/create-doc-wizard" element={<CreateDocWizard />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
