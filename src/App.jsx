import { useState, useEffect } from 'react'
import HomePage from './components/HomePage'
import PreLoadPage from './components/PreLoadPage'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [fadeIn, setFadeIn] = useState(false)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setFadeIn(true)
      setTimeout(() => {
        setIsLoading(false)
      }, 1000) // Wait for fade out to complete
    }, 3000) // 3 seconds loading time, adjust as needed

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative w-full h-screen bg-[#2D3142]">
      <div className={`absolute inset-0 transition-opacity duration-1000 ${fadeIn ? 'opacity-0' : 'opacity-100'}`}>
        <PreLoadPage />
      </div>
      <div className={`absolute inset-0 transition-opacity duration-1000 ${!isLoading ? 'opacity-100' : 'opacity-0'}`}>
        <HomePage />
      </div>
    </div>
  )
}

export default App
