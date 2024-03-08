//import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Feed from './pages/Feed.jsx'
import Search from './pages/Search.jsx'
import Watch from './pages/Watch.jsx'
//import { AppProvider } from './Context/Context.jsx'
const router = createBrowserRouter([
    {
        path: '/',
        element:<App/>,
        children:[
            {
                path:'/',
                element:<Feed/>
            },
            {
                path:'/searchResult/:searchQuery',
                element:<Search/>
            },
            {
                path:"/watch/:id", 
                element:<Watch/>
            }
        ],
    }
])
ReactDOM.createRoot(document.getElementById('root')).render(
    <div className=' flex flex-col h-full'>
       <RouterProvider router={router}/>
    </div>
)
