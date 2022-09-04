import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div className="">
      <Navbar />
      <div>
        <Component {...pageProps} />
      </div>
     <Footer/>
    </div>
  );
}

export default MyApp;
