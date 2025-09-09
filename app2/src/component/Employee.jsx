const Employee = (props) =>{
    console.log(props);
    return(
        <h1>Id: {props.id},
        Name:{props.name},
        Email:{props.email}</h1>
    )
}

export default Employee;