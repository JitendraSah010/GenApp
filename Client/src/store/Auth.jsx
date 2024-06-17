import {createContext, useContext, useEffect, useState} from 'react';
import { baseURL } from '../component/apiData';

// (1) create context
const AuthContext = createContext();


// (2) create provider(store)
const AuthProvider = ({children}) =>{

    const [token, setToken] = useState( localStorage.getItem('token') );
    const [ loggedInUserData, setLoggedinUserData ] = useState(null);
    const [ servicesData, setServicesData ] = useState(null);

    // defining provider functions

    // store token in local storage
    const storeTokenInLS = (authToken)=>{
        return localStorage.setItem('token' , authToken);
    };

    // logout user
    let isLoggedIn = !!token;

    const logoutUser = ()=>{
        setToken('');
        return localStorage.removeItem('token');
    }

    // JWT authentication & get currently logged in user data
    const userAuthentication = async()=>{
        try {
            const response = await fetch(`${baseURL}/auth/user`, {
                method : 'GET',
                headers : {
                    Authorization : `Bearer ${token}`
                }
            });

            if(response.ok){
                const data = await response.json();
                setLoggedinUserData(data);
            }
            
        } catch (error) {
            console.log('User authentication failed', error)
        }
    }

    // fetch the products or services from the backend
    const getServiceProducts = async ()=>{
        try {
            const response = await fetch(`${baseURL}/service`, {
                method : 'GET'
            } );

            if(response.ok){
                const data = await response.json();
                setServicesData(data);
                console.log(data)
            }
            
        } catch (error) {
            console.log("Fail to fetch the services or products", error);
        }
    }

    useEffect( ()=>{
        userAuthentication();
        getServiceProducts();
    }, [] )


    return <AuthContext.Provider value={ {storeTokenInLS, logoutUser, isLoggedIn, loggedInUserData, servicesData} } >
        { children }
    </AuthContext.Provider>

}

// (3) consumer (by creating custom hook (delivery person) )

// creating custom hook
const useAuthCustomHook = ()=>{
    const authContextValue = useContext(AuthContext);
    return authContextValue;
}



export { AuthProvider, useAuthCustomHook };
