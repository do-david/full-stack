import navStyles from '../styles/Nav.module.css';
import Link from 'next/link';

const Nav = () => {
    return(
        <nav className={navStyles.nav}>
            <div>
                <ul>
                    <li class="flex-shrink-0">
                        <img class="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow"/>
                    </li>
                    <li>
                        <Link href='/eshop'>E-shop</Link>
                    </li>
                    <li>
                        <Link href='/about'>About</Link>
                    </li>
                    <li>
                        <Link href='/account'>Account</Link>
                    </li>
                    <li>
                        <Link href='/contact'>Contact</Link>
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