import NavBar from "@/features/navigation/NavBar";
import { Outlet } from "react-router-dom";

const MainDrawerLayout = () => {
    return (
        <div className="layout">
            <NavBar />
            <Outlet />
        </div>
    );
};

export default MainDrawerLayout;
