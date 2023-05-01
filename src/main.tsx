import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './main.scss'
import { AuthProvider } from './hooks/useAuth.tsx'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Provider>
  </React.StrictMode>,
)
