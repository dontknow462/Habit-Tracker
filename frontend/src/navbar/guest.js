import { Routes, Route, Link } from 'react-router-dom';
import Home from '../components/home';
import Login from '../components/login';
import Register from '../components/register';

function Guest() {
    return (
        <>
            <nav className="">
                <ul className="">
                    <li className="">
                        <Link className="" to="/">Home</Link>
                    </li>
                    <li className="">
                        <Link className="" to="/login">Login</Link>
                    </li>
                    <li className="">
                        <Link className="" to="/register">Register</Link>
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