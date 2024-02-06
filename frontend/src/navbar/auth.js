import { Routes, Route, Link } from 'react-router-dom';
import Home from '../components/home';
import Dashboard from '../components/dashboard';
import AuthUser from '../components/AuthUser';
import ShowHabits from '../components/showHabits';
import Thome from '../components/Thome';
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
                        <Link  to="/showHabits">Show Habits</Link>
                    </li>
                    <li >
                        <span role="button"  onClick={logoutUser}>Logout</span>
                    </li>
                    <li >
                        <Link  to="/tHome">tHOME</Link>
                    </li>

                </ul>

            </nav>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/showHabits" element={<ShowHabits/>}/>
                    <Route path="/tHome" element={<Thome/>}/>


                </Routes>
            </div>
        </>
    );
}

export default Auth;