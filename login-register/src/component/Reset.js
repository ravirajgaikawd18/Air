import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Reset(props)
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
                <h1>Reset Passsword!</h1>
                <hr></hr>
                    <table>
                        <tbody>
                            <tr>
                                <td>email</td>
                                <td>
                                    <input type={"email"}
                                           id="email"
                                           value={user.email}
                                           onChange={handleChange}/>
                                </td>
                            </tr>

                            <tr>
                                <td>new Password</td>
                                <td>
                                    <input type={"password"}
                                           id="pwd"
                                           value={user.pwd}
                                           onChange={handleChange}/>
                                </td>
                            </tr>
                            <tr>
                                <td>Confirm Password</td>
                                <td>
                                    <input type={"password"}
                                           id="pwd1"
                                           value={user.pwd1}
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
                                            Reset
                                    </button>
                                </td>
                                <td>
                                <Link to={`/Reset`}></Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                <hr></hr>
                
                <h4>{message}</h4>       
                <h4>{error}</h4>         
           </div>
}

export default Reset;