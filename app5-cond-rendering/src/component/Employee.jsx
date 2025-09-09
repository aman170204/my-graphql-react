const Employee = (props) =>{
    const{id,name,position} =props.data;
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{position}</td>
        </tr>
    );
};

export default Employee;