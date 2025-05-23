import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router'; // 
import './index.css';
import AuthProvider from './providers/AuthProvider';
import PrivateRoute from './routes/PrivateRoute';
import MainLayout from './layouts/MainLayout';
import Spinner from './components/shared/Spinner';
import FeaturedTasks from './components/FeaturedTasks';

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));
const AddTask = lazy(() => import('./pages/AddTask'));
const BrowseTasks = lazy(() => import('./pages/BrowseTasks'));
const TaskDetails = lazy(() => import('./pages/TaskDetails'));
const MyTasks = lazy(() => import('./pages/MyTasks'));
const UpdateTask = lazy(() => import('./pages/UpdateTask'));
const NotFound = lazy(() => import('./pages/NotFound'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <Suspense fallback={<Spinner />}><NotFound /></Suspense>,
    children: [
      { path: '/', element: <Suspense fallback={<Spinner />}><Home /></Suspense> },
      { path: '/login', element: <Suspense fallback={<Spinner />}><Login /></Suspense> },
      { path: '/signup', element: <Suspense fallback={<Spinner />}><Signup /></Suspense> },

      // Public route
      {
        path: '/browse-tasks',
        element: <Suspense fallback={<Spinner />}><BrowseTasks /></Suspense>
      },
      {
        path: '/featured-task',
        element: <Suspense fallback={<Spinner />}><FeaturedTasks /></Suspense>
      },

      // Private Routes
      {
        path: '/tasks/:id',
        element: (
          <PrivateRoute>
            <Suspense fallback={<Spinner />}><TaskDetails /></Suspense>
          </PrivateRoute>
        )
      },
      {
        path: '/add-task',
        element: (
          <PrivateRoute>
            <Suspense fallback={<Spinner />}><AddTask /></Suspense>
          </PrivateRoute>
        )
      },
      {
        path: '/my-posted-tasks',
        element: (
          <PrivateRoute>
            <Suspense fallback={<Spinner />}><MyTasks /></Suspense>
          </PrivateRoute>
        )
      },
      {
        path: '/update-task/:id',
        element: (
          <PrivateRoute>
            <Suspense fallback={<Spinner />}><UpdateTask /></Suspense>
          </PrivateRoute>
        )
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

