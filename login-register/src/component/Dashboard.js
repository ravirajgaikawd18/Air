import { Link, Route, Routes } from "react-router-dom";
import About from "./About";
import Home  from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";
import Contact from "./Contact";
import Register from "./Register";
import Reset from "./Reset";
import SearchFlight from "./SearchFlight";
import garuda_logo from "./garuda_logo.jpg";
import "../assets/common.css"

function Dashboard()
{
    return (<>
      <table className="myTable">
        <tr>
          <td style={{columnSpan: 3}}>
            <Header 
            About={About}
            Contact={Contact}
            Register={Register}
            Login={Login}
            SearchFlight={SearchFlight}
            ></Header>
          </td>
      </tr>
      <hr></hr>
      <tr>
        <td className="tdStyle">
        <Link to={"/Home"} >Home</Link> <br></br> <br></br> 
        <Link to={"/About"} >About</Link> <br></br> <br></br>
        <Link to={"/Contact"} >Contact</Link> <br></br> <br></br>
        <Link to={"/Register"} >Register</Link> <br></br> <br></br>
        <Link to={"/Login"} >Login</Link> <br></br> <br></br> 
        
        </td>
        <td>

        
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route exact path="/Home"
            element={<Home></Home>}></Route>
            <Route exact path="/About"
            element={<About></About>}></Route>
            <Route exact path="/Contact"
            element={<Contact></Contact>}></Route>
            <Route exact path="/Register"
            element={<Register></Register>}></Route>
            <Route exact path="/Login"
            element={<Login></Login>}></Route>
            <Route  path="/Reset" element={<Reset/>}/>
            
          </Routes> 

        </td>
        <td>
          <img src="garuda_logo.jpg"></img>
        </td>
      </tr>
      <tr>
        <td style={{columnSpan: 3}}>
          <hr></hr>
          <Footer>
            <h3>@Copyright Garuda Airways(Dinesh,Suhaas,Prateek,Deepanshu)</h3>
          </Footer>
        </td>
      </tr>
      </table>
    </>)
   
}
export default Dashboard;