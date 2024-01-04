import { Routes, Route, Link } from 'react-router-dom';
import Home from '../components/home';
import Dashboard from '../components/dashboard';
import AuthUser from '../components/AuthUser';
function Auth() {
    const {token,logout} = AuthUser();
    const logoutUser = () => {
        if(token != undefined){
            logout();
        }
    }
    return (
        <>
            <nav >
                <ul >
                    <li >
                        <Link  to="/">Home</Link>
                    </li>
                    <li >
                        <Link  to="/dashboard">Dashboard</Link>
                    </li>
                    <li >
                        <span role="button"  onClick={logoutUser}>Logout</span>
                    </li>

                </ul>

            </nav>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </div>
        </>
    );
}

export default Auth;