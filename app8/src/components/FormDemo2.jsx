import React, { useState } from 'react';

const FormDemo = () => {

    const [user,setUser] =useState({
        firstName: '',
        lastName:  ''
    })

    const onChangeHandler= (e) =>{
        console.log(e.target.name);
        console.log(e.target.value);
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    
    const onSubmitHandler = (e) => {
        e.preventDefault()//this will prevent the reloading of page 
        console.log(user.firstName, user.lastName)
    }
    return (
        <div>
            <h2>Form Demo</h2>
            <form onSubmit={onSubmitHandler} >
                <div className="form-group">
                    <label htmlFor="">First Name</label>
                    <input type="text" className="text form-control" value={firstName} onChange={onChangeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Last Name</label>
                    <input type="text" className="text form-control" value={lastName} onChange={onChangeHandler} />
                </div>
                <input type="submit" value="Submit" className=" btn btn-primary" />
            </form >
        </div >

    )

}
export default FormDemo;
