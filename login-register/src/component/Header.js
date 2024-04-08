import { Link } from "react-router-dom";
import garuda_logo from "./garuda_logo.jpg";

function Header(){
    return <>
    
    
            <img src="garuda_logo.jpg"/>

            Garuda Airlines

             <Link to={"/Home"} >Home</Link> |

            <Link to={"/About"} >About</Link> |

            <Link to={"/Contact"} >Contact</Link> |

            <Link to={"/Register"} >Register</Link> |

            <Link to={"/Login"} >Login</Link> |

            <Link to={"/SearchFlight"} >SearchFlight</Link> |
        
      
    
    
    </>
}
export default Header;