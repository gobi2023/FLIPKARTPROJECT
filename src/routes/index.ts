import { useRoutes } from "react-router-dom";
import { ProjectRoutes } from "./ProjectRoutes";

export default function Allroutes(){
    return useRoutes([ProjectRoutes])
}