import React, { useState,  createContext } from 'react'
import Cookies from 'js-cookie';

type authState = {
  signIn: any;
  signOut: any;
  isUserLoggedIn: any;
}

export const AuthContext = createContext<authState>({
  signIn: null,
  signOut: null,
  isUserLoggedIn: null
});

function AuthContextProvider(props: any) {
  const [authenticated, setAuthenticated] = useState(false);

  const signIn = (e: any) => {
    if(cookieFound()) {
      setAuthenticated(true);
    } else {
      console.log('cookie not found');
    }
  }

  const signOut = (e: any) => {
    // TODO: Need to call backend to delete cookie
    Cookies.remove('auth-token');
    setAuthenticated(false);
  }

  const cookieFound = () => {
    let x = Cookies.get('auth-token');
    return !!x;
  }

  const isUserLoggedIn = () => {
    const token = Cookies.get('auth-token');
    return (authenticated || !!token);
  }

  return (
    <AuthContext.Provider value={{ isUserLoggedIn, signIn, signOut }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default  AuthContextProvider;
