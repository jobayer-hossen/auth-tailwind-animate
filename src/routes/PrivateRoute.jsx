import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    if(loading){
        return <div className="w-64 ms-48 mt-72 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div className="bg-blue-600 h-2.5 rounded-full" ></div>
      </div>
    }
    if(user){
        return children
    }
    return <Navigate to='/login' replace={true} ></Navigate> ;
};

export default PrivateRoute;