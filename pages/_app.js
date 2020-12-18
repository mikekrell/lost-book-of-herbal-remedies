import '../styles/globals.css'
import React, {useEffect} from "react";
import { useRouter } from 'next/router';


function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  const lang = pathname.startsWith("/de") ? "de" : "en";
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  
  return <Component {...pageProps} />
}

export default MyApp
