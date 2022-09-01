import "../styles/globals.css";
import Image from 'next/image';
import Logo from '../assets/images/code8.png'
import Link from 'next/link';
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className='navbar'>
        <Link href='/'>
        <div>
          <Image src={Logo} alt='logo'/>
        </div>
        </Link>
        
        <div>
          <ul className="nav-container">
            {/* <li className="nav-items">
              <Link href='/'>
                <a>Home</a>
              </Link>
            </li> */}
            <li className="nav-items">
              <Link href='/about'>
                <a>About</a>
              </Link>
            </li>
            <li className="nav-items">
              <Link href='/build'>
                <a>Build</a>
              </Link>
            </li>
            <li className="nav-items">
              <Link href='/learn'>
                <a>Learn</a>
              </Link>
            </li>
            <li className="nav-items">
              <Link href='/community'>
                <a>Community</a>
              </Link>
            </li>
          </ul>
          </div>
          <div>
            <button>
              Login
            </button>
            <button>
              Sign Up
            </button>
          </div>
      </nav>
      <div>
        <Component {...pageProps} />
      </div>
      <footer>footer</footer>
    </div>
  );
}

export default MyApp;
