import axios from 'axios';

const REGISTRATION_URI = '/register';
const LOGIN_URI = '/login';


export const loginUser = async ({...params}) => {

    try{
        
        const result = await axios.post(LOGIN_URI,{...params})
        console.log("Debug: loginUser -> result", result)
        
    } catch( error){
        console.log(error);
        throw new Error({ error : {
            name: "login-user",
            message : " Error registering the user"
        }})
    }
}

export const registerUser = async ({...params}) => {

    try{
        
        const result = await axios.post(REGISTRATION_URI,{...params})
        console.log("Debug: registerUser -> result", result)
        
    } catch( error){
        console.log(error);
        throw new Error({ error : {
            name: "register-user",
            message : " Error registering the user"
        }})
    }
       

}