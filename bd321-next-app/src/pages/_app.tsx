import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
<<<<<<< Updated upstream
  return <Component {...pageProps} />
}
=======
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
>>>>>>> Stashed changes
