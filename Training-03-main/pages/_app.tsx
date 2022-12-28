import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../pages/i18n";
import React from "react";
import {store} from '../store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}><Component {...pageProps} /></Provider>
    );
}

export default MyApp;
