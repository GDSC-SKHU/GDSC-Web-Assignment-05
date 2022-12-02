import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/GlobalStyle';
import '../../public/fonts/font.css';
import Nav from '../components/nav';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Component {...pageProps}></Component>
    </>
  );
}
