import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './App'
import './index.css'

export const createRoot = ViteReactSSG(
  { routes, basename: '/' },
  ({ router }) => {
    // place for future global setup (analytics, error boundaries, etc.)
    void router
  },
)
