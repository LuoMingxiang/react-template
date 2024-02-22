import { createBrowserRouter } from 'react-router-dom'
import Home from '@/pages/Home'
import App from '@/App'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/app', element: <App /> },
])
export { router }
