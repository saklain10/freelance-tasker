import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import './index.css';
import AuthProvider from './providers/AuthProvider';
import PrivateRoute from './routes/PrivateRoute';
import MainLayout from './layouts/MainLayout';
import Spinner from './components/shared/Spinner';
import MyTasks from './pages/MyTasks';

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));
const AddTask = lazy(() => import('./pages/AddTask'));
const BrowseTasks = lazy(() => import('./pages/BrowseTasks'));
const TaskDetails = lazy(() => import('./pages/TaskDetails'));
const MyPostedTasks = lazy(() => import('./pages/MyTasks'));
const UpdateTask = lazy(() => import('./pages/UpdateTask'));
const NotFound = lazy(() => import('./pages/NotFound'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { path: '/', element: <Suspense fallback={<Spinner />}><Home /></Suspense> },
      { path: '/login', element: <Suspense fallback={<Spinner />}><Login /></Suspense> },
      { path: '/signup', element: <Suspense fallback={<Spinner />}><Signup /></Suspense> },
      
      {
        path: '/browse-tasks',
        element: <Suspense fallback={<Spinner />}><BrowseTasks /></Suspense>
      },
      {
        path: '/add-task',
        element: <Suspense fallback={<Spinner />}><AddTask /></Suspense>
      },
      {
        path: '/task/:id',
        element: <Suspense fallback={<Spinner />}><TaskDetails /></Suspense>
      },
      {
        path: '/my-posted-tasks',
        element: <Suspense fallback={<Spinner />}><MyTasks /></Suspense>
      },
      {
        // path: '/update-task/:id',
        path: '/update-task',
        element: <Suspense fallback={<Spinner />}><UpdateTask /></Suspense>
      },
      // {
      //   path: '/add-task',
      //   element: <PrivateRoute><Suspense fallback={<Spinner />}><AddTask /></Suspense></PrivateRoute>
      // },
      // {
      //   path: '/task/:id',
      //   element: <PrivateRoute><Suspense fallback={<Spinner />}><TaskDetails /></Suspense></PrivateRoute>
      // },
      // {
      //   path: '/my-posted-tasks',
      //   element: <PrivateRoute><Suspense fallback={<Spinner />}><MyTasks /></Suspense></PrivateRoute>
      // },
      // {
      //   path: '/update-task/:id',
      //   element: <PrivateRoute><Suspense fallback={<Spinner />}><UpdateTask /></Suspense></PrivateRoute>
      // },
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
