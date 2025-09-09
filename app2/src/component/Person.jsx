const Person = (props) =>{
    console.log(props);
    return(
        <h1>My Name is {props.name}</h1>
    )
}
export default Person;