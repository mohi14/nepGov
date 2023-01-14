import AuthProvider from "../components/ContextAPI/AuthProvider";
import ContextsProvider from "../components/Contexts/ContextsProvider";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
