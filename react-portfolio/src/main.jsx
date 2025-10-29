import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Projects from './components/Projects.jsx';
import Home from './components/Home.jsx';
import { About } from './components/About.jsx';

let router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children:[
      {
        path:"",
        Component: Home,
      },{
        path:"projects",
        Component:Projects
      },{
        path:"about",
        Component:About
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
