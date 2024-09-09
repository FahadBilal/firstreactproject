import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Homepage from './pages/homepage';
import About from './pages/about';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout/>}>
//       <Route path='/' element={<Homepage/>}/>
//       <Route path='about' element={<About/>}/>
//     </Route>
//   )
// )
const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {path:'/',element:<Homepage/>},
      {path:'/about',element:<About/>},
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vital
