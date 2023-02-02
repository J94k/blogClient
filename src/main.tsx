import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Bootstrap from 'app/Bootstrap'
import App from 'app'
import store from 'app/store'
import Blog from 'pages/Blog'
import Squad from 'pages/Squad'
import About from 'pages/About'
import Post from 'pages/Post'

const router = createHashRouter([
  {
    path: '/',
    element: <App store={store} />,
    children: [
      {
        path: '/',
        element: <Blog />,
      },
      {
        path: '/squad',
        element: <Squad />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/post/:postId',
        element: <Post />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Bootstrap />
    <RouterProvider router={router} />
  </StrictMode>
)