import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import App from './App.jsx';
import './index.css';
import HomePage from './pages/Home.jsx';
import Detail from './pages/Detail.jsx';
import SearchResult from './pages/SearchResult';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/detail/:id',
    element: <Detail />,
  },
  {
    path: '/search/:query',
    element: <SearchResult />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
