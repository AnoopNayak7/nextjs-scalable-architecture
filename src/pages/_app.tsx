import PropTypes from 'prop-types';
import Head from 'next/head';
import '@/styles/globals.css';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../@core/utils/emotion/create-emotion-cache';
import { AppProps as NextAppProps } from 'next/app';
import ThemeComponent from '@/@core/theme/ThemeComponent';

type AppProps = NextAppProps & {
  emotionCache?: any;
};

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props: AppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <ThemeComponent>
        <Component {...pageProps} />
      </ThemeComponent>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
