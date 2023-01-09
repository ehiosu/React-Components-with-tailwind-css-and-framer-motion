import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {ProductInfo} from './ProdutInfo/ProductInfo'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductInfo dealText={'free shipping.'} />
  </React.StrictMode>,
)
