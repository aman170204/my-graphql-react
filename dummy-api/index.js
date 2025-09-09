const express = require('express')
const app = express()

//middleware
app.use(express.json());

let users = [
    {
        id: 1,
        name: "john",
        email: "john@example.com"
    },
    {
        id: 2,
        name: "jane",
        email: "jane@example.com"
    },
    {
        id: 3,
        name: "Alice",
        email: "alice@example.com"
    },
]

//Get all User
app.get('/users', (req, res) => {
    res.status(200).json({
        error: false,
        message: "Users retrieved successfully",
        data: users,

    })
})

//get user by id 
app.get('/users/:id', (req, res) => {
    //get the id from the array
    let userId = req.params.id;
    //find the user from the array
    let userIndex = users.findIndex(user => user.id == userId);
    let userResult = users[userIndex];

    if (userResult == undefined) {
        return res.status(404).json({
            error: true,
            message: 'user not found with id: ' + userId,
            data: null
        })
    }
    res.status(200).json({
        error: false,
        message: 'user found',
        data: userResult
    })

})
//create users 


//create a new user 
app.post('/users', (req, res) => {
    let newUser = req.body;
    console.log(newUser);
    users.push(newUser);
    res.status(201).json({
        error: false,
        message: 'User Created successfully',
        data: newUser
    });
})

//update the user
app.put('/users/:id', (req, res) => {
    //get the id from the route parameter
    let userId = parseInt(req.params.id);
    let userIndex = users.findIndex(user => user.id == userId);

    if (userIndex === -1) {
        return res.status(404).json({
            error: true,
            message: 'User not found',
            data: null
        })
    }

    users[userIndex] = {
        ...users[userIndex], // keep existing properties
        ...req.body // overwrite with new ones
    };
    res.status(201).json({
        error: false,
        message: 'User updated successfully',
        data: users[userIndex]
    });

    

})

//delete a record
app.delete('/users/:id', (req, res) => {
    let userId = parseInt(req.params.id);
    let userIndex = users.findIndex(user => user.id == userId);

    if (userIndex === -1) {
        return res.status(404).json({
            error: true,
            message: 'User not found',
            data: null
        })
    }

    const deletedUser = users.splice(userIndex, 1); // Remove one user at the found index

    res.status(200).json({
        error: false,
        message: 'User deleted successfully',
        data: deletedUser[0] // Return the deleted user
    });

})


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`)
})