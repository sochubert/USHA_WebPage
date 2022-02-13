import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Admin = () => {
    const [users, setUsers] = useState([])

    const getUsers = async () => {
        try {
            const { data } = await axios.get("http://localhost:3000/api/users")
            console.log(data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div>
            <h1>Admin page</h1>
        </div>
    );
};

export default Admin;