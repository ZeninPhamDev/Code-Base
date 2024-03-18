import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from './App.tsx'
import './index.css'
import HomePage from './pages/HomePage.tsx';
// import axios from 'axios';

// Config base URL axios
// axios.defaults.baseURL = 
//   process.env.NODE_EVN === 'developement' ? 'http://localhost:3000' : '/'

// Routing
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<HomePage />} />
      {/* <Route path="dashboard" element={<Dashboard />} />
      ... etc. */}
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
