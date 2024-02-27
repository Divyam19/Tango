import './App.css'
import { ThemeProvider } from '@emotion/react'
import { darktheme } from './theme/DatkTheme'


function App(){
  return (
    <>
      <ThemeProvider theme={darktheme}>
        <h1 className='text-3xl font-bold underline'>Hello Wold!!</h1>
      </ThemeProvider>
    </>
  )
}

export default App
