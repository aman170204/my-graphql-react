import React,{useState} from 'react';

const Header = () =>{

    const[user,setUser] = useState({
        
        name:'Guest',
        email:'guest@gmail.com'
    })

    const onSubmitHandler =() =>{
        setUser({
            ...user,
            name:'Mark',
            // email:'mark@gmail.com'
        })
    };

    return (
        <div>
            <h3> Welcome {user.name},{user.email}</h3>
            <button onClick={onSubmitHandler}>submit with StateObject</button>
        </div>
    )
}

export default Header;