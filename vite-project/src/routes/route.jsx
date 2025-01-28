import { createBrowserRouter, Navigate } from "react-router";
import Home from "../pages/Home";
import Aboutus from "../pages/Aboutus";
import MainLayout from "../layout/mainlayout";
import Privacy from "../pages/Privacy";
import Login from "../pages/Login";
import Form from "../components/Form";
import SignUp from "../pages/SignUp";


const isLoggedIn = ()=>{
    const loggedin = true ;
    return loggedin; // replace with actual logic to check if user is logged in or not. For now, it's returning false.
}


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"/form",
        element:<Form/>

      },
      {
        path: "/about",
        element: <Aboutus />,
      },
      {
        path: "/privacy",
        element: <Privacy />,
      },
      {
        path:"/login",
        element: <Login/>
      }, {
        path:"/signup",
        element: <SignUp/>
      }
    ],
  },
]);


/// 10 ota navigation banaune 10 ota app ma 
// 10 ota project banaune 

 // 10 ota project ma 10 ota navigation hunuparyo 
/// ,  