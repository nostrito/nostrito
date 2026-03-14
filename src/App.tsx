import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import DocsPage from './pages/DocsPage'
import MediaPage from './pages/MediaPage'
import DownloadPage from './pages/DownloadPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/docs" element={<DocsPage />} />
      <Route path="/media" element={<MediaPage />} />
      <Route path="/download" element={<DownloadPage />} />
    </Routes>
  )
}
