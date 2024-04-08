import React from 'react';
import ReactDOM from 'react-dom/client';
import Dashboard from './component/Dashboard';
//import Login  from './component/Login';
// import Register from './component/Register';
import {BrowserRouter} from 'react-router-dom'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
       <Dashboard></Dashboard>
       {/* <Login/> */}
    </BrowserRouter>
    
   
);



