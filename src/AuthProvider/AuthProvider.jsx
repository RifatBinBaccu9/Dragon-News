import { createContext } from "react";
import PropTypes from 'prop-types';

export const authProvider=createContext(null);

 const AuthProvider = ({children}) => {

 const authInfo ={name: 'rifat mia is good boy'}

    return (
        <authProvider.Provider value={authInfo}>
            {children}
        </authProvider.Provider>
    );
};
AuthProvider.propTypes={
    children: PropTypes.node
}
export default AuthProvider;