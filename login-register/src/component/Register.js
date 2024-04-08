import { useEffect, useState } from "react";

function Register(props)
{   
    console.log("register");
   // const [message, setMessage] = useState("");
    const [user, setUser] = useState({uname: "",pwd:""});
   // const [error, setError] = useState("");

    const OnInvalidLogin=()=>{
        debugger;
        setUser({uname: "",pwd:""});
      //  setMessage("Credentials you entered are incorrect!")
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
        //setError(errorMessage);

    },[user]);


    debugger;
    return <div>
                <h1>Register Here!</h1>
                <hr></hr>
                    <table>
                        <tbody>
                            <tr>
                                <td>userName</td>
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
                                <td>email</td>
                                <td>
                                    <input type={"email"}
                                           id="email"
                                           value={user.email}
                                           onChange={handleChange}/>
                                </td>
                            </tr>

                            <tr>
                                <td>firstName</td>
                                <td>
                                    <input type={"text"}
                                           id="firstname"
                                           value={user.firstname}
                                           onChange={handleChange}/>
                                </td>
                            </tr>

                            <tr>
                                <td>lastName</td>
                                <td>
                                    <input type={"text"}
                                           id="lastname"
                                           value={user.lastname}
                                           onChange={handleChange}/>
                                </td>
                            </tr>

                            <tr>
                                <td>phone</td>
                                <td>
                                    <input type={"number"}
                                           id="number"
                                           value={user.number}
                                           onChange={handleChange}/>
                                </td>
                            </tr>

                            <tr>
                                <td>adhar</td>
                                <td>
                                    <input type={"number"}
                                           id="adhar"
                                           value={user.adhar}
                                           onChange={handleChange}/>
                                </td>
                            </tr>
                            <tr>
                                <td style={{columnSpan: 2}}>
                                    <input type="submit"/>
                                    
                                </td>
                            </tr>
                        </tbody>
                    </table>
                <hr></hr>
                
                       
           </div>
    
}

export default Register;