import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Homepage from "../Components/HomePage/Homepage";

const routers = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
          {
            path: "/",
            element: <Homepage></Homepage>
          }
        ]
    }
])

export default routers;