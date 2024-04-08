import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';

function Login(props)
{
    const [message, setMessage] = useState("");
    const [user, setUser] = useState({uname: "",pwd:""});
    const [error, setError] = useState("");

    const OnInvalidLogin=()=>{
        debugger;
        setUser({uname: "",pwd:""});
        setMessage("Credentials you entered are incorrect!")
    }

    const handleChange=(args)=>{
            var copyOfUser = {...user};
            copyOfUser[args.target.id] = args.target.value;
            setUser(copyOfUser);
    }

    useEffect(()=>
    {
        var errorMessage = "";
        for (const property in user) 
        {
            const valueOfProperty = user[property];
            if(valueOfProperty==="")
            {
                errorMessage =  errorMessage +
                        property+ " can not be blank.";
            }
        }    
        setError(errorMessage);

    },[user]);


    debugger;
    return <div>
                <h1>Login Here!</h1>
                <hr></hr>
                    <table>
                        <tbody>
                            <tr>
                                <td>User Name</td>
                                <td>
                                    <input type={"text"}
                                           id="uname"
                                           value={user.uname}
                                           onChange={handleChange}/>
                                </td>
                            </tr>

                            <tr>
                                <td>Password</td>
                                <td>
                                    <input type={"password"}
                                           id="pwd"
                                           value={user.pwd}
                                           onChange={handleChange}/>
                                </td>
                            </tr>
                            <tr>
                                <td style={{columnSpan: 1}}>
                                     <button onClick={   ()=>
                                        {
                                           if(error==="")
                                           {
                                            props.signin(user,OnInvalidLogin)
                                           }
                                        }}>
                                            Login
                                    </button>
                                </td>
                                <td>
                                <Link to={`/Reset`}>Reset password</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                <hr></hr>
                
                <h4>{message}</h4>       
                <h4>{error}</h4>         
           </div>
}

export default Login;