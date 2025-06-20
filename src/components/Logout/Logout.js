import { state } from 'react';
import { Link, redirect } from "react-router-dom"
import service from "../../services/service";

const logoutAction = () => { 
    const { deleteItem } = service();
        deleteItem({
        key: "userName"
    });
    
    // redirect('/')

    return <h2>logged out</h2>
} 

export default logoutAction;