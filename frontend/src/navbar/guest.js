import { Routes, Route, Link } from 'react-router-dom';
import Home from '../components/home';
import Login from '../components/login';
import Register from '../components/register';

function Guest() {
    return (
        <>
            <nav >
                <ul >
                    <li >
                        <Link  to="/">Home</Link>
                    </li>
                    <li >
                        <Link  to="/login">Login</Link>
                    </li>
                    <li >
                        <Link  to="/register">Register</Link>
                    </li>

                </ul>

            </nav>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </div>
        </>
    );
}

export default Guest;