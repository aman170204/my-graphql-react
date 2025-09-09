const Person = () => {
    const names = ["john", "ram", "shyam", "Smith", "Balram"];
    return (
        <div>
            <h2>List of names</h2>
            <ul>
                {names.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Person;

