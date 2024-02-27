import './App.css'
import { ThemeProvider } from '@emotion/react'
import { darktheme } from './theme/DatkTheme'
import HomePage from './pages/HomePage'


function App(){
  return (
    <>
      <ThemeProvider theme={darktheme}>
        <HomePage/>
      </ThemeProvider>
    </>
  )
}

export default App
