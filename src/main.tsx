import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { App } from './App'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={extendTheme({ config })}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
