import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main';
import AddService from '../Pages/AddService/AddService';
import Admin from '../Pages/Admin/Admin';
import ShowUserTable from '../Pages/Admin/ShowUserTable/ShowUserTable';
import Allservices from '../Pages/Allservices/Allservices';
import Blog from '../Pages/Blog/Blog';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login/Login';
import Signup from '../Pages/Login/Signup/Signup';
import MyReview from '../Pages/MyReview/MyReview';
import ServiceDetails from '../Pages/ServiceDetails/ServiceDetails';
import PrivateRoute from './PrivateRoute';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
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
                path: '/allservices',
                element: <Allservices></Allservices>,
                loader: () => fetch('http://localhost:5000/services'),
            },
            {
                path: '/services/:_id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params._id}`),
            },
            {
                path: '/addservice',
                element: <AddService></AddService>,
            },
            {
                path: '/myreview',
                element: <PrivateRoute><MyReview></MyReview></PrivateRoute>

            }
        ]
    }
])
