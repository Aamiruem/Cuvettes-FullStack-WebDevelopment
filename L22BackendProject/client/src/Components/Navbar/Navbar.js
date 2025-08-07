// import React from 'react';
// import { Link } from 'react-router-dom';
// import './NavbarStyle.css';
// import { useLogout } from '../../Hooks/useLogout';
// import { useAuthContext } from '../../Hooks/useAuthContext';

// const Navbar = () => {
//     const { user } = useAuthContext();
//     const { logout } = useLogout();

//     const handleLogout = () => {
//         logout();
//     };


//     return (
//         <nav className="navbar">

//             <div className="navbar-logo">
//                 <Link to="/">
//                     <h1>Workout Body</h1></Link>
//             </div>

//             {user && (
//                 <div className="logout">
//                     <span>{user.email}</span>
//                     <button onClick={handleLogout}>Logout</button>
//                 </div>
//             )}

//             <div className="logout">
//                 <button onClick={handleLogout}>Logout</button>
//             </div>
//                 <div />

//             <div className="menu">
//                 <Link to="/signup" className="nav-link">Sign Up</Link>
//                 <Link to="/login" className="nav-link">Login</Link>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;







// import React from 'react';
// import { Link } from 'react-router-dom';
// import './NavbarStyle.css';
// import { useLogout } from '../../Hooks/useLogout';
// import { useAuthContext } from '../../Hooks/useAuthContext';

// const Navbar = () => {
//     const { user } = useAuthContext();
//     const { logout } = useLogout();

//     const handleLogout = () => {
//         logout();
//     };

//     return (
//         <nav className="navbar">
//             <div className="navbar-logo">
//                 <Link to="/">
//                     <h1>Workout Body</h1>
//                 </Link>
//             </div>

//             {user && (
//                 <div className="logout">
//                     <span>{user.email}</span>
//                     <button onClick={handleLogout}>Logout</button>
//                 </div>
//             )}


//             {user ? (
//                 // Show when logged in
//                 <div className="logout">
//                     <span>{user.email}</span>

//                     <button onClick={handleLogout}>Logout</button>
//                 </div>
//             ) : (
//                 // Show when not logged in
//                 <div className="menu">
//                     <Link to="/signup" className="nav-link">Sign Up</Link>
//                     <Link to="/login" className="nav-link">Login</Link>
//                 </div>
//             )}
//         </nav>
//     );
// };

// export default Navbar;











// import React from 'react';
// import { Link } from 'react-router-dom';
// import './NavbarStyle.css';
// import { useLogout } from '../../Hooks/useLogout';
// import { useAuthContext } from '../../Hooks/useAuthContext';

// const Navbar = () => {
//     const { user } = useAuthContext();
//     const { logout } = useLogout();

//     const handleLogout = () => {
//         logout();
//     };

//     return (
//         <nav className="navbar">
//             <div className="navbar-logo">
//                 <Link to="/"><h1>Workout Body</h1></Link>
//             </div>

//             {user && (
//                 <div className="logout">
//                     <span>{user.email}</span>
//                     <button onClick={handleLogout}  className='btn'>Logout</button>
//                 </div>
//             )}

//             {!user && (
//                 <div className="menu">
//                     <Link to="/signup" className="nav-link">Sign Up</Link>
//                     <Link to="/login" className="nav-link">Login</Link>
//                 </div>
//             )}
//         </nav>
//     );
// };

// export default Navbar;










import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarStyle.css';
import { useLogout } from '../../Hooks/useLogout';
import { useAuthContext } from '../../Hooks/useAuthContext';

const Navbar = () => {
    const { user } = useAuthContext();
    const { logout } = useLogout();

    const handleLogout = () => {
        logout();
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/"><h1>Workout Body</h1></Link>
            </div>

            {user ? (
                <div className="logout">
                    <span>{user.email}</span>
                    <button onClick={handleLogout} >Logout</button>
                </div>
            ) : (
                <div className="menu">
                    <Link to="/signup" className="nav-link">Sign Up</Link>
                    <Link to="/login" className="nav-link">Login</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
