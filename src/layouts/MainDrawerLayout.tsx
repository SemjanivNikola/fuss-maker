import Drawer from "@/features/drawer/Drawer";
import { Outlet } from "react-router-dom";

const MainDrawerLayout = () => {
    return (
        <>
            <Drawer />
            <Outlet />
        </>
    );
};

export default MainDrawerLayout;
