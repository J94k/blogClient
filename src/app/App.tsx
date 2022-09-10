import { lazy, createResource } from 'solid-js'
import { Routes, Route } from 'solid-app-router'
import './app.css'

import Header from '../shared/components/Header'
import Footer from '../shared/components/Footer'
import { fetchPosts, FilterType } from '../shared/services/blog'

const Home = lazy(() => import('../pages/Home'))
const Post = lazy(() => import('../pages/Post'))
const About = lazy(() => import('../pages/About'))

export default function App() {
  const [posts, { mutate: mutatePosts, refetch: refetchPosts }] =
    createResource(() =>
      fetchPosts({
        type: FilterType.fromPresentToPast,
      })
    )

  return (
    <div class="app-container">
      <Header />

      <main class="main">
        <Routes>
          <Route path="/" component={() => <Home posts={posts()} />} />
          <Route path="/post/:author/:date" component={Post} />
          <Route path="/about" component={About} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}
