import Head from "next/head";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>NodeFlair Clone</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </Head>

      <div className="bg-slate-600 z-30">
        HELLO
        <Component {...pageProps} />
      </div>
    </div>
  );
}
