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
import Recipe_vault from './Pages/Recipe_vault';
import Our_team from './Pages/Our_team';


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
    path: "our_team",
    element: <Recipe_vault/>,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();