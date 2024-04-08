import { useEffect, useState } from "react";
// import {Link} from 'react-router-dom';
// import Login from "./Login";

function SearchFlight(props)
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
                <h1>Search Flights</h1>
                <hr></hr>
                    <table>
                        <tbody>
                            <tr>
                                <td>Source</td>
                                <td>
                                    <input type={"text"}
                                           id="uname"
                                           value={user.uname}
                                           onChange={handleChange}/>
                                </td>
                            </tr>

                            <tr>
                                <td>Destination</td>
                                <td>
                                    <input type={"text"}
                                           id="dest"
                                           value={user.dest}
                                           onChange={handleChange}/>
                                </td>
                            </tr>

                            <tr>
                                <td>Travel Date</td>
                                <td>
                                    <input type={"date"}
                                           id="tdate"
                                           value={user.tdate}
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
                                            SearchFlight
                                    </button>
                                </td>
                                {/* <td>
                                <Link to={`/Login`}>UserLogin</Link>
                                </td> */}
                            </tr>
                        </tbody>
                    </table>
                <hr></hr>
                
                <h4>{message}</h4>       
                <h4>{error}</h4>         
           </div>
}

export default SearchFlight;