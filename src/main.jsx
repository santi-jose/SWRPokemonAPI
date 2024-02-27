import React from 'react' // core React library
import ReactDOM from 'react-dom/client' // library for DOM methods
import axios from 'axios' // library for HTTP requests
import { SWRConfig } from 'swr' // global option config for data fetching
import App from './App.jsx'
import './index.css'
import '../src/styles/App.css'

// the fetcher function is defined to handle data fetching using axios.
// It accepts URLs and additional arguments, makes an HTTP GET request using
// axios, and returns the data from the response.
// This funciton is intended to be passed as a configuration option to the
// SWRConfig component to specify how data fetching should be performed
// throughout the application.
const fetcher = (...args) => axios.get(...args).then((res) => res.data);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SWRConfig value={{ fetcher }}>
      <App />
    </SWRConfig>
  </React.StrictMode>,
)
