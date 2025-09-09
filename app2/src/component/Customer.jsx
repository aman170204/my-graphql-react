const Customer = (props) => {
    console.log(props);
    const { id, name, email } = props.data; //here we have destructure
    return (
        <h1>Id: {id}, Name:{name},Email:{email}</h1>    //here we don't have to assign from prop
    )


}

export default Customer;
