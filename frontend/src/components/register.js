import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import AuthUser from './AuthUser';

export default function Register() {
    const navigate = useNavigate();
    const {http,setToken} = AuthUser();
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    const submitForm = () =>{
        // api call
        http.post('/register',{email:email,password:password,name:name}).then((res)=>{
            navigate('/login')
        })
    }

    return(
        <div >
            <div >
                <div >
                    <h1 >Register </h1>
                    <div >
                        <label>Name:</label>
                        <input type="test"  placeholder="Enter name"
                            onChange={e=>setName(e.target.value)}
                        id="email" />
                    </div>
                    <div >
                        <label>Email address:</label>
                        <input type="email"  placeholder="Enter email"
                            onChange={e=>setEmail(e.target.value)}
                        id="email" />
                    </div>

                    <div >
                        <label>Password:</label>
                        <input type="password" className="form-control" placeholder="Enter password"
                            onChange={e => setPassword(e.target.value)}
                        id="pwd" />
                    </div>
                    <button type="button" onClick={submitForm} >Register</button>
                </div>
            </div>
        </div>
    )
}