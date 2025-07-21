import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import ResultPage from './pages/ResultPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/result" element={<ResultPage />} />
    </Routes>
  )
}

export default App
