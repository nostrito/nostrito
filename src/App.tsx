import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import LandingPage from './pages/LandingPage'
import DocsPage from './pages/DocsPage'
import MediaPage from './pages/MediaPage'
import DownloadPage from './pages/DownloadPage'
import TermsPage from './pages/TermsPage'

export default function App() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        <Routes location={location}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/docs" element={<DocsPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/download" element={<DownloadPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}
