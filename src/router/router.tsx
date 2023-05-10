import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../features/dashboard/screen/Dashboard";
import CreateDocWizard from "../features/docs/create-wizard/CreateDocWizard";
import DocsOverview from "@/features/docs/overview/DocsOverview";
import MainDrawerLayout from "@/layouts/MainDrawerLayout";
import EditorLayout from "@/layouts/EditorLayout";
import DocsListScreen from "@/features/docs/list/DocsListScreen";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainDrawerLayout />}>
                    <Route path="" element={<Dashboard />} />
                    <Route path="create-doc-wizard" element={<CreateDocWizard />} />
                    <Route path="docs-list" element={<DocsListScreen />} />
                </Route>
                {/* Viewing docs as editor */}
                <Route path="/docs/overview" element={<EditorLayout />}>
                    <Route path="" element={<DocsOverview />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
