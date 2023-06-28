import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout'
import Create from '../pages/create-page'
import Home from '../pages/home'
import Login from '../pages/login'
import Register from '../pages/register'

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/create',
        element: <Create />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  }
])
