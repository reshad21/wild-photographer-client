import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main';
import Admin from '../Pages/Admin/Admin';
import ShowUserTable from '../Pages/Admin/ShowUserTable/ShowUserTable';
import Allservices from '../Pages/Allservices/Allservices';
import Blog from '../Pages/Blog/Blog';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login/Login';
import Signup from '../Pages/Login/Signup/Signup';
import PrivateRoute from './PrivateRoute';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('service.json'),
            },
            {
                path: '/home',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/blog',
                element: <PrivateRoute><Blog></Blog></PrivateRoute>
            },
            {
                path: '/admin',
                element: <Admin></Admin>
            },
            {
                path: '/allusertable',
                element: <ShowUserTable></ShowUserTable>
            },
            {
                path: '/services',
                element: <Allservices></Allservices>
            }
        ]
    }
])
