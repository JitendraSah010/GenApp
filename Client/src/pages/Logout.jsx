import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthCustomHook } from '../store/Auth';

function Logout() {
    const { logoutUser } = useAuthCustomHook();

    useEffect( ()=>{
        logoutUser();
    }, [logoutUser] );

  return (
    <Navigate to={'/login'} />
  )

}

export default Logout;