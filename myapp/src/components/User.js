//with JSX

// const User = () =>{
//     return (
//         <div>
//             <h1>
//                 Welcome User
//             </h1>
//         </div>
//     )
// }



//without jsx

import React from 'react';

const User = () =>{
    return (
        React.createElement(
            'div',
            null,
            React.createElement(
                'h1',
                null,
                'Welcome User'
            )
        )
    )
}

export default User;