import {NavBar} from "./Components/NavBar.jsx";
import { Outlet } from "react-router-dom";

function Layout(){
    return(
        <>
            <NavBar />
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default Layout