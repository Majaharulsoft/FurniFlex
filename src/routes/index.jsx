import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Store.jsx";
import Login from "../pages/Login.jsx";
import SignUp from "../pages/SignUp.jsx";
import Store from "../pages/Store.jsx";
import Order from "../pages/Order.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children: [
      {
        path: "", 
        element: <Home />
      },
      {
        path: "login",
        element: <Login/>
      },
      {
        path: "signup",
        element: <SignUp/>
      },
      {
        path: "store",
        element: <Store/>
      },
      {
        path: "order",
        element: <Order/>
      },
      
      
      
    ],
  },
]);

export default router;
