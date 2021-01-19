import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import AuthentificationApi from '../services/AuthentificationApi';
import { Redirect } from 'react-router';
import Costumers from '../pages/Costumers';
import { toast } from 'react-toastify';
import { SemipolarLoading } from 'react-loadingg';
import { GoogleLogin } from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
import userApi from '../services/userApi';


const Connexion=({onLogin,history})=>{

    

    const [form, setForm] = useState({
        username:'' ,
        password:'' 
      });

      const [user, setUser] = useState({
     
            firstName:"",
            lastName:"",
            email:"",
            password:"",
            
      });

    

      //http://127.0.0.1:8000/api/users?email=amineabdessemed1996@gmail.com

    const [loading, setLoading] = useState(false);
    const [state, setstate] = useState(false)
    const handleChange =(event) => {

        const value  = event.target.value;
        const name = event.target.name;

        setForm({...form,[name]:value});
    }
    const handleSubmit= (event) => {
        event.preventDefault();
        Authentificaton();
    }
    const responseGoogle=(Response)=> {


        if (Response.Bc.access_token)
        {
            inscription(Response);
            setstate(true)
        }else
        {
            toast.error("you can't registred by google ");
        } 
    }

   
    const inscription=async(Response)=>{

        user.firstName=Response.profileObj.name;
        user.lastName=Response.profileObj.name;
        user.email=Response.profileObj.email;
        user.password=Response.profileObj.googleId;
        form.username=Response.profileObj.email;
        form.password=Response.profileObj.googleId;

        try {
            await userApi.registre(user);
            toast.success(
              "you have been registred you can now connect ;)"
            );
            Authentificaton();
          } catch (error)
          {
            if (error.response.data['hydra:description']!='')
            {
                
                Authentificaton();
            }else
            {
                toast.error("you can't registred by google ");
            }
          
          }
    
    }
    


    const Authentificaton= async()=>{

        try {
            setLoading(true);
            const token = await AuthentificationApi.Authentification(form);
            var isConnected=checkToken(token);
         
            if(isConnected)
            {
                // permets de stocké le token d'application (inspect element)
                window.localStorage.setItem('authToken', token);
                //ajouter token pour que je reste connecté et je peux récupérer les donnée 
                axios.defaults.headers['Authorization'] = 'Bearer ' +token ;

                onLogin(true);
                toast.success("you are connected !");
                history.replace("/costumers")
               
            }
        } catch (error) {
            toast.error("username or password is incorrect !" );
            setLoading(false);

        }


    }

    const LogoutConsole=()=>{

        AuthentificationApi.logAout();
        onLogin(false);
        setstate(false)
        toast.dark("you have been deconnected ");
        history.push('/connexion')
      }
      

    

function checkToken(token)
{   
    const decoded = jwt_decode(token);
    if (token && decoded.exp)
    {
        if(new Date().getTime()<decoded.exp*1000)
        {

            return true
        }
        else
        {
            return false
        }
    }
    else
    {
        return false 
    }
}



return(
    <>
        <h1>Connexion</h1>
        <br></br>
        {loading && <SemipolarLoading/> }
        <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" name="username" value={form.username}  onChange={handleChange}/>
            <small id="username" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" name="password" value={form.password}  onChange={handleChange}/>
            </div>

            <div>
                 <button className="btn btn-primary" type="submit" value="Submit"> Connexion </button>
                 {!state &&
        <div>
            <GoogleLogin
                clientId="765276671361-98pj87b54485kokjf5h7agkkt5pdt51s.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />

            <p style={{color: "red"}}> login with your google account </p>
        </div>
        }

        {state &&
        <div>
            <GoogleLogout
                clientId="765276671361-98pj87b54485kokjf5h7agkkt5pdt51s.apps.googleusercontent.com"
                buttonText="Logout"
                onLogoutSuccess={LogoutConsole}
            >
            </GoogleLogout>
          
            
              

            
        
        </div>
        }
            </div>
        </form>

    </>


)






}

export default Connexion;