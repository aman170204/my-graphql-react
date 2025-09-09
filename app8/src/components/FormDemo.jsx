import React, { useState } from 'react';

const FormDemo = () => {
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')


    const onFirstNameChangeHandler= (e) =>{
        console.log(e.target.value);
        setFirstName(e.target.value);
    }
    const onLastNameChangeHandler= (e) =>{
        console.log(e.target.value);
        setLastName(e.target.value);
    }
    const onSubmitHandler = (e) => {
        e.preventDefault()//this will prevent the reloading of page 
        console.log(firstname, lastname)
    }
    return (
        <div>
            <h2>Form Demo</h2>
            <form onSubmit={onSubmitHandler} >
                <div className="form-group">
                    <label htmlFor="">First Name</label>
                    <input type="text" className="text form-control" value={firstname} onChange={onFirstNameChangeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Last Name</label>
                    <input type="text" className="text form-control" value={lastname} onChange={onLastNameChangeHandler} />
                </div>
                <input type="submit" value="Submit" className=" btn btn-primary" />
            </form >
        </div >

    )

}
export default FormDemo;
