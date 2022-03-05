import Head from 'next/head'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Footer } from '../components/Footer/footer-style';

function App({ Component, pageProps }: AppProps) {
	return ( 
		<>
			<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
			<Component {...pageProps} />
			<Footer>
			Developed by Pedro Zotesso - About Me
			</Footer>
		</>
	)
}

export default App