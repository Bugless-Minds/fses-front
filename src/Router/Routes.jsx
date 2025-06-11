import {
    createBrowserRouter,
} from "react-router-dom";

import Login from "../pages/Login"
import Main from "../Layout/Main";
import OfficeAssistantSystem from "../pages/OfficeAssistantSystem";
import Supervisor from "../pages/Supervisor";
import ProgramCoordinator from "../pages/ProgramCoordinator";
import PGAM from "../pages/PGAM";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Login></Login>
            },
            {
                path: '/officeAssistant',
                element: <OfficeAssistantSystem></OfficeAssistantSystem>
            },
            {
                path: '/supervisor',
                element: <Supervisor></Supervisor>
            },
            {
                path: '/programCoordinator',
                element: <ProgramCoordinator></ProgramCoordinator>
            },
            {
                path: '/pgam',
                element: <PGAM></PGAM>
            }
        ],
    },
]);