import axios from 'axios';
import { API_Users } from '../config';


function registre(form)

{
    return axios.post(API_Users,form)
}

function getUserByEmail(email)
{
    return  axios.get(API_Users+'?email='+email)
            .then(response =>response.data['hydra:member'])
   
}




export default 
{
    registre,
    getUserByEmail
}


