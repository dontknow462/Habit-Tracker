import { useState } from "react"
import AuthUser from './AuthUser';

export default function Login() {
    const {http,setToken} = AuthUser();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    const submitForm = () =>{
        // api call
        http.post('/login',{email:email,password:password}).then((res)=>{
            setToken(res.data.user,res.data.access_token);
        })
    }

    return(
        <div >
            <div >
                <div >
                    <h1 >Login </h1>
                    <div >
                        <label>Email address:</label>
                        <input type="email" className="form-control" placeholder="Enter email"
                            onChange={e=>setEmail(e.target.value)}
                        id="email" />
                    </div>
                    <div >
                        <label>Password:</label>
                        <input type="password" className="form-control" placeholder="Enter password"
                            onChange={e => setPassword(e.target.value)}
                        id="pwd" />
                    </div>
                    <button type="button" onClick={submitForm} >Login</button>
                </div>
            </div>
        </div>
    )
}