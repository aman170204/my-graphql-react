const Greet = () =>
{
    let user = 'aman';
    let response;
    if(user){
        response= <h1>Welcome {user}</h1>
    }else{
        response=<h1>Welcome Guest</h1>
    }
    return response;
};

export default Greet;