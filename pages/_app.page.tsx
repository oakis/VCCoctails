import type { AppProps } from "next/app";
import { SearchProvider } from "contexts/SearchContext";
import { css, Global } from "@emotion/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
          }
          body {
            margin: 0;
            padding: 0;
          }
        `}
      />
      <SearchProvider>
        <Component {...pageProps} />
      </SearchProvider>
    </>
  );
}
