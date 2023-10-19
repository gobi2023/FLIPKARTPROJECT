import { Outlet } from "react-router-dom";
import { Home } from "../views/home/Home";
import { Mylogin } from "../views/login/Mylogin";
import { Register } from "../views/register/Register";
import { UploadProducts } from "../views/uploadProducts/UploadProducts";
import { Mynavbar } from "../components/navbars/Mynavbar";

export let ProjectRoutes={
    path:'Project',
    element:<><Outlet/></>,
    children:[
        {
            path:'register',
            element:<Register/>
        },
        {
            path:'login',
            element:<Mylogin/>
        },
        {
            path:'home',
            element:<><Mynavbar/> <Home/></>
        }
        ,
        {
            path:'seller-upload',
            element:<><Mynavbar/><UploadProducts/><>im footer</> </>
        }
    ]
}