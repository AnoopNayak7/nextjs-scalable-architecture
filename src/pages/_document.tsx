import * as React from 'react';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import createEmotionCache from '../@core/utils/emotion/create-emotion-cache';
import { EmotionCache } from '@emotion/react/types/index';
import { AppProps } from 'next/app';

interface MyDocumentProps extends AppProps {
  emotionCache: EmotionCache;
  emotionStyleTags: React.ReactElement[];
}

class MyDocument extends Document<MyDocumentProps> {
  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage;

    // Create an instance of the Emotion cache
    const cache = createEmotionCache();
    const { extractCriticalToChunks } = createEmotionServer(cache);

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => <App {...props} />,
      });

    const initialProps = await Document.getInitialProps(ctx);
    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map((style) => (
      <style
        data-emotion={`${style.key} ${style.ids.join(' ')}`}
        key={style.key}
        dangerouslySetInnerHTML={{ __html: style.css }}
      />
    ));

    return {
      ...initialProps,
      emotionStyleTags,
      emotionCache: cache,
    };
  }

  render() {
    const { emotionStyleTags } = this.props;

    return (
      <Html lang="en">
        <Head>
          {/* PWA primary color */}
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="emotion-insertion-point" content="" />
          {emotionStyleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
