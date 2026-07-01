import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';

import Home from '../pages/index';
import About from '../pages/About';
import Blog from '../pages/blogs/Index';
import Post from '../pages/blogs/_id';

import ErrorPage from '../components/ErrorPage';
import { posts, postById } from '../apis/loaders';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/blog',
        element: <Blog />,
        loader: posts,
      },
      {
        path: '/blog/:id',
        element: <Post />,
        loader: postById,
      },
    ],
  },
]);
