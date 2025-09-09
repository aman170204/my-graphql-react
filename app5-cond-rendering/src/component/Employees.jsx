// import React, {useState} from "react";
import Employee from "./Employee";

const Employees =() =>{
    
    const employeeData =[
        {id:1, name: "Alice", position:"Developer"},
        {id:2, name: "Blice", position:"Developer"},
        {id:3, name: "Clice", position:"Developer"},
        {id:4, name: "Dlice", position:"Developer"},
        {id:5, name: "Elice", position:"Developer"},

    ];

    return(
        <div>
            <h2 className="text-center">Employee List</h2>
            <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Position</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeData.map((emp) =>(
                        <Employee key={emp.id} data={emp} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Employees;