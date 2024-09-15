import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Routes/App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Bag from './Routes/Bag.jsx'
import './index.css'
import Home from './Routes/Home.jsx'





const router=createBrowserRouter(
  [
    { path:"/", element: <App/>,
      children:[
        {path:"/",element:<Home/> , /*loader:postLoader*/},
        {path:"/bag",element:<Bag/>, /*action:CreatePostAction*/},

      ]
    },
  ]
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  
  <RouterProvider router={router}/>
  </StrictMode>,
)
