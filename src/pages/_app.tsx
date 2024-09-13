import type { AppProps } from 'next/app'
import { Flip, ToastContainer } from 'react-toastify'
import { OverlayProvider } from 'overlay-kit'
import { Provider } from 'jotai'
import 'react-toastify/dist/ReactToastify.css'
import '@/styles/globals.css'
import { CommonNavigation } from '@/components/navigation'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <div className="relative w-full h-full">
        <CommonNavigation />
        <Component {...pageProps} />
      </div>
      <OverlayProvider />
      <ToastContainer
        closeButton={false}
        position="top-center"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        theme="light"
        transition={Flip}
        toastClassName={() =>
          'relative flex justify-between items-center my-1 py-2 bg-primary text-center text-sm text-white font-black rounded-full overflow-hidden cursor-pointer'
        }
      />
    </Provider>
  )
}
