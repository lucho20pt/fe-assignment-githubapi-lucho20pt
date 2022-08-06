import { Route, Routes, Navigate } from 'react-router-dom'
import Layout from './components/layout/Layout'
import NotFound from 'components/layout/NotFound'
import Home from './pages/Home'
import Search from './pages/Search'
import User from './pages/User'
import About from './pages/About'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />

        <Route path="/home" element={<Home />} />

        <Route path="/search" element={<Search />} />

        <Route path="/user/:userId/*" element={<User />} />

        <Route path="/about" element={<About />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

export default App
