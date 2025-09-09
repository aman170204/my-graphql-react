import React, {useState} from 'react';

const Header =() =>{
    const[name,setName] = useState('Guest');


    const onSubmitHandler= () =>{
        setName('Aman');
    }
    return (
        <div>
            <h2>Welcome from functional component {name}</h2>
            <button onClick={onSubmitHandler}>Login functionalComponent</button>

        </div>
    );

};

export default Header;