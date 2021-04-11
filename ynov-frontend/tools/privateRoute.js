import React from 'react'
import {Redirect, Route} from 'react-router-dom'
import {useSelector} from 'react-redux'

const PrivateRoute = ({component: Component, ...rest}) => {
    const isAuth = useSelector(state=>state.toggleAuthentification.isAuthenticated)
    return (
        <Route
        {...rest}
        render={props => 
            (isAuth) ? (
            <Component {...props}/>) : (
            <Redirect to='/'></Redirect>)
        }
        >
        </Route>
    )
}

export default PrivateRoute