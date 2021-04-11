import React from 'react'
import navStyles from '../styles/Nav.module.css'
import Link from 'next/link'
import { auth_toggle } from '../actions/authentification'
import { useSelector, useDispatch } from 'react-redux'
import Button from './Button'

const Nav = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector(state=>state.toggleAuthentification.isAuthenticated)
    const handleLogout = () => {
        dispatch(auth_toggle())
    }
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
                        <Link href='/contact'>Contact</Link>
                    </li>
                    {isAuth ? 
                        <li>
                            <Link href='/account'>Account</Link>
                        </li>
                        : null 
                    }
                </ul>
            </div>
            <ul>
                {isAuth ?
                <li>
                    <Link href='/login' passHref><Button label='Logout' onClick={handleLogout}/></Link>
                </li> 
                : 
                <li>
                    <Link href='/login'>Login</Link>
                </li>}
            </ul>
        </nav>
    )
}
export default Nav