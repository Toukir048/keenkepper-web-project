import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";

export default function MainLayout() {
    return (
        <div>
            <Navbar></Navbar>
            <main>
                <Outlet />
            </main>
            <Footer></Footer>
            <ToastContainer position="bottom-right" autoClose={2500} />
        </div>
    );
}