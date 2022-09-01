import "../styles/globals.css";
import Image from "next/image";
import Logo from "../assets/images/code8.png";
import Link from "next/link";
import { FaInstagram, FaDiscord, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function MyApp({ Component, pageProps }) {
  return (
    <div className="">
      <nav className="navbar ">
        <Link href="/">
          <div className="logos">
            <Image src={Logo} alt="logo" />
          </div>
        </Link>

        <div>
          <ul className="nav-container">
            <li className="nav-items">
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li className="nav-items">
              <Link href="/build">
                <a>Build</a>
              </Link>
            </li>
            <li className="nav-items">
              <Link href="/learn">
                <a>Learn</a>
              </Link>
            </li>
            <li className="nav-items">
              <Link href="/community">
                <a>Community</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="butn ">
          <button className="primary btn--primary">Login</button>
          <button className="primary btn--primary">Sign Up</button>
        </div>
      </nav>
      <div>
        <Component {...pageProps} />
      </div>
      <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <Link href="/" className="social-logo">
            <Image src={Logo} alt="logo"/>
          </Link>
        </div>
        <section className="footer-subscription">
          <h2 className="footer-subscription-heading">Newsletter</h2>
          <div className="input-areas">
            <form>
              <input
                className="footer-input"
                name="email"
                type="email"
                placeholder="Your Email"
              />
              <br />
              <buthrefn
                type="submit"
                className="btn btn--sub"
                style={{ margin: "0" }}
              >
                Submit
              </buthrefn>
            </form>
          </div>
          <section className="social-media">
            <div className="social-icons">
              <a
                className="social-icon-link"
                href="https://chat.whatsapp.com/Dy5uAVlpzFj3ent90TMjeW"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaWhatsapp />
              </a>

              <a
                className="social-icon-link"
                href="https://instagram.com/codeate.in?igshid=YmMyMTA2M2Y="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                className="social-icon-link"
                href="http://dsc.gg/code8"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord"
              >
                <FaDiscord />
              </a>

              <a
                className="social-icon-link"
                href="https://www.linkedin.com/company/code8-connect"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </section>
        </section>

        <div className="footer-links">
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>Our Offerings</h2>
              <Link href="/built">Build</Link>
              <Link href="/learn">Learn</Link>
              <Link href="/community">Community</Link>
            </div>
            <div className="footer-link-items">
              <h2>Quick Links</h2>
              <Link href="/">Home</Link>
              <Link href="/about-us">About</Link>
              <Link href="learn">Blogs</Link>
            </div>
          </div>
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>Contact Us</h2>
              <p className="p-address">
                Flat No. 117, Block C, Sunrise Residency, Rukmini enclave,
                Bolarum, Hyderbad.(500010)
              </p>
              <a href="mailhref:contact.code8@gmail.com">contact.us@codeate.in</a>
              <p>+91 8602444273</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="subfooter">
        <div className="subfooter-container">
          <div className="subfooter-items">
            <h1>Forms</h1>
            <h1>Terms & conditions</h1>
            <Link href="/privacy">
              <h1 className="subfooter-text">Policy</h1>
            </Link>
            <h1>Data Security</h1>
            <h1>Help & Support</h1>
            <h1>Chat</h1>
          </div>
        </div>
        </div>
      </footer>
    </div>
  );
}

export default MyApp;
