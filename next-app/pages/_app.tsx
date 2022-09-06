import "bootstrap/dist/css/bootstrap.min.css";
import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import { MainLayout} from "../components";

function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <MainLayout>
      <Component {...pageProps} />
      </MainLayout>
    </SessionProvider>
  );
}

export default App;
