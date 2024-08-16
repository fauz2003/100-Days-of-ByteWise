import {createContext, useContext} from 'react';
import toast, {Toaster} from 'react-hot-toast';
import axios from 'axios';
import {useState} from 'react';


const UserContext = createContext();

const UserProvider = ({children}) =>{
    const [btn, setBtn] = useState(false);


    
    async function loginUser({email, password}, navigate){
        setBtn(true);
        try {
            
            const {data} = await axios.post('http://localhost:5000/api/users/login', {email, password});
            localStorage.clear();  
            localStorage.setItem("token", data.token);
            navigate("/");
            toast.success('Logged in successfully');
            setBtn(false);
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
    
    async function registerUser({email, password}, navigate){
        setBtn(true);
        try {
            const {data} = await axios.post('http://localhost:5000/api/users/register', {email, password});
            toast.success('Registered successfully');
            localStorage.setItem("token", data.token);
            navigate("/login");
            setBtn(false);
        } catch (error) {
            setBtn(false);
            toast.error(error.response.data.message);
        }
    }

    return <UserContext.Provider value={{loginUser,registerUser, btn}}>{children}</UserContext.Provider>
}

export const UserData = () => useContext(UserContext);

export default UserProvider;