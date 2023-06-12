import AuthProvider from "../components/ContextAPI/AuthProvider";
import ContextsProvider from "../components/Contexts/ContextsProvider";
import "../styles/globals.css";
import Layout from "./Layout";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}
