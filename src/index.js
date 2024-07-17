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
import About_us from './Pages/Our_story/About_us';
// import Virtual_assistant from './Pages/Virtual_assistant'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "Recipe_vault",
    element: <Recipe_vault/>,
  },
  {
    path: "About_us",
    element: <About_us/>,
  },
  // {
  //   path: "Virtual_assistant",
  //   element: <Virtual_assistant/>,
  // },
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