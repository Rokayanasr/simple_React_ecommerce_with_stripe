import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import { mealsFetch } from './redux/slices/mealsSlice.jsx'
import { getTotals } from './redux/slices/cartSlice.jsx'
import { loadUser } from './redux/slices/authSlice.jsx'
import StepContext from './stepContext.jsx'
store.dispatch(mealsFetch())
store.dispatch(getTotals())
store.dispatch(loadUser(null))
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={store}>
      <StepContext>
      <App />
     </ StepContext>
    </Provider>
  // </React.StrictMode>
  ,
)
