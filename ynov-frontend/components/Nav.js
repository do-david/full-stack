import navStyles from '../styles/Nav.module.css';
import Link from 'next/link';

const Nav = () => {
    return(
        <nav className={navStyles.nav}>
            <div>
                <ul>
                    <li>
                        <Link href='/'>E-shop</Link>
                    </li>
                    <li>
                        <Link href='/about'>About</Link>
                    </li>
                    <li>
                        <Link href='/account'>Account</Link>
                    </li>
                </ul>
            </div>
            <ul>
                <li>
                    <Link href='/login'>Login</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav