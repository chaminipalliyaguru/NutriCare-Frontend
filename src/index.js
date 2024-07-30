import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const App = React.lazy(() => import('./App'));
const Recipe_vault = React.lazy(() => import('./Pages/Recipe_vault'));
const About_us = React.lazy(() => import('./Pages/Our_story/About_us'));
const HealthGuide = React.lazy(() => import('./Pages/HealthGuide'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "recipe_vault",
    element: <Recipe_vault/>,
  },
  {
    path: "about_us",
    element: <About_us/>,
  },
  {
    path: "health_guide",
    element: <HealthGuide/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();