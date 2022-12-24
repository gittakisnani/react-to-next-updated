import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import '../css/flaticon.css'
import '../css/odometer-theme-default.css'
import '../css/animate.css'
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

  return <Component {...pageProps} />
}

export default MyApp



// serviceWorkers()
