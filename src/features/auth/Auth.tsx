import React from "react";
import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { loginAsync, logoutAsync, selectAuth } from "./authSlice";
import { useAppSelector } from '../../app/hooks'


const Auth = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const auth = useAppSelector(selectAuth)

    const handleLogin = (event) => {
        setIsLoading(true);
        dispatch(loginAsync({username, password}));
    }

    const handleLogout = () => {
        setIsLoading(true);
        dispatch(logoutAsync(username));
    }

    useEffect(() => {
        if (auth) {
            setIsLoading(false);
        }
    }, [auth]);

    const handleValueChange = (event) => {
        const nameOfInput = event.target.name;
        if (nameOfInput === 'UserName') {
            setUsername(event.target.value);
        } else {
            setPassword(event.target.value);
        }
    }

    return (
            !auth.isLoggedIn
            ? (<div>
                <input name="UserName" placeholder="Username" value={username} type="text" onChange={handleValueChange}/>
                <input name="Password" placeholder="Password" value={password} type="password" onChange={handleValueChange}/>
                <button onClick={handleLogin}>
                    { 
                        isLoading ? <div className="lds-circle"><div></div></div> : <span>Login</span>
                    }
                </button>
               
                
            </div>)
            : (
                <>
                    <h1>Welcome {auth.username}</h1>
                    <button onClick={handleLogout}>
                    { 
                        isLoading ? <div className="lds-circle"><div></div></div> : <span>Logout</span>
                    }
                    </button>
                </>
            )
        
        
    )
}

export default Auth;