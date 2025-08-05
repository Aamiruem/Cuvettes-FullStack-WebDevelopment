// import {useAuthContext} from "./useAuthContext";

// export const useLogout = () => {
//     const {dispatch} = useAuthContext();
//     const logout = () => {
//         // remove user from local storage
//         localStorage.removeItem('user');
//         // update auth context
//         dispatch({type: 'LOGOUT'});
//     };
//     return logout;
// };







import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
    const { dispatch } = useAuthContext();

    const logout = () => {
        // Remove user from local storage
        localStorage.removeItem('user');
        // Update auth context
        dispatch({ type: 'LOGOUT' });
    };

    return { logout }; // ✅ Return an object
};
