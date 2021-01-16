import React from 'react'
import Field from '../Form/Field';
import { useState} from 'react';
import userApi from '../services/userApi';
import { toast } from 'react-toastify';

const InscriptionPage=({history})=>{

const [form, setForm] = useState({
firstName:"",
lastName:"",
email:"",
password:"",
confirmpassword:""
})

const [errors,setErrors]=useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    })


const handleChange =(event) => {

    const value  = event.target.value;
    const name = event.target.name;

    setForm({...form,[name]:value});
}

const handleSubmit= (event) => 
{
    event.preventDefault();
    //Authentificaton(); 
    //console.log(form);
    if(form.password===form.confirmpassword)
    {
        inscription(form);
    }
    else
    {
        toast.info("Check your password !");
    }
}

const inscription=async(form)=>{

    try {
        await userApi.registre(form);
        toast.success(
          "Vous êtes désormais inscrit, vous pouvez vous connecter !"
        );
        history.replace("/connexion");
      } catch (error)
      {
        toast.error("Un champs n'est pas correctement rensigné");
      }

}


return (


<div>

<div className="mb-3 d-flex justify-content-between align-items-center">
<h1>Registration Form</h1>
</div>

<form onSubmit={handleSubmit} >

<Field  name="firstName" type="text" placeholder="entre your surname" handleChange={handleChange}  value={form.firstName} />

<Field  name="lastName" type="text" placeholder="entre your name" handleChange={handleChange}  value={form.lastName} />

<Field  name="email" type="email" placeholder="entre your email " handleChange={handleChange}  value={form.email} />

<Field  name="password" type="password" placeholder="entre your password" handleChange={handleChange}  value={form.password} />

<Field  name="confirmpassword" type="password" placeholder="confirm your password" handleChange={handleChange}  value={form.confirmpassword} />
<div>
                 <button className="btn btn-primary" type="submit" value="Submit"> Registre </button>
                
        </div>

</form>

</div>


)





}



export default InscriptionPage;