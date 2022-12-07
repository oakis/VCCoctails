import type { AppProps } from "next/app";
import { SearchProvider } from "contexts/SearchContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SearchProvider>
      <Component {...pageProps} />
    </SearchProvider>
  );
}
