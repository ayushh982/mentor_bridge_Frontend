import Sidebar from "../components/layout/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {

    return (

        <div className="flex bg-slate-50">

            <Sidebar />

            <main className="flex-1 p-8">

                <Outlet />

            </main>

        </div>

    );

};

export default DashboardLayout;