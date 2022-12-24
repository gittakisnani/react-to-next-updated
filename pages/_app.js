import 'font-awesome/css/font-awesome.min.css' 
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/flaticon.min.css'
import '../css/odometer-theme-default.min.css'
import '../css/animate.min.css'
import '../styles/components.scss'
import '../styles/pages.scss'
import '../styles/index.scss'
// import { Provider } from 'react-redux'
// import store from '../store'
// import dynamic from 'next/dynamic'
// const serviceWorkers = dynamic(() => import('../serviceWorker'), { ssr: false })


function MyApp({ Component, pageProps }) {
  // return <Provider store={store}>
  // <Component {...pageProps} />
  // </Provider>

  return (
    <Component {...pageProps} />
  )
}

export default MyApp



// serviceWorkers()
