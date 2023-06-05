import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../pages/home'
import Login from '../pages/login'

export const router = createBrowserRouter([
  {
    path: '/register',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'dashboard',
        element: <div>1111111111111111111111111</div>
      },
      {
        path: '2',
        element: <div>22222222222222222222222222</div>
      },
      {
        path: '3',
        element: <div>3333333333333333333333333</div>
      }
    ]
  }
])
