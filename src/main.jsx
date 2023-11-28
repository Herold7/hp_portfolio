import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles/style.css'
import App from './App.jsx'
import Skill from './pages/skills/Skill';
import Portfolio from './pages/portfolio/Portfolio.jsx';
import Contact from './pages/contact/Contact.jsx'



// Router & routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/competences',
    element: <Skill />,
  },
  {
    path: '/portfolio',
    element: <Portfolio />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },


]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
