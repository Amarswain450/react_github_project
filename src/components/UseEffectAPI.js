import React, {useState, useEffect} from 'react'
import Loading from './Loading';
import User from './User';

const UseEffectAPI = () => {

    const [users, setUsers] = useState([]);
    const[loading, setLoading] = useState(true)

    const getUsers = async() => {
        try{
            const response = await fetch('https://api.github.com/users');
            setLoading(false);
            setUsers(await response.json());
        }catch(error){
            console.log('The Error is ' + error);
        }
    }

    useEffect(() => {
        getUsers();
    }, []);

    if(loading){
        return <Loading />
    }

    return (
        <>
           <User users={users} />
        </>
    )
}

export default UseEffectAPI
