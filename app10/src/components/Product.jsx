import React, { useState, useEffect } from "react";

const Products = () => {
    const [products, setProduct] = useState([]);
    const fetchData = () => {
    fetch("http://localhost:5002/graphql", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: `{
            getAllProduct{
                id
                title
                description
                price
                category
                thumbnail
                image
            }
            }`,
        })
    })
        .then((response) => response.json())
        .then((data) => {
            setProduct(data.data.getAllProduct);
            console.log(data.data.getAllProduct);
        })
        .catch((error) => console.error("Error fetching data", error));
    };

useEffect(() => { fetchData(); }, []);

return (
    <div>
        <h2 className="text-center">All Product</h2>
        <ul>
            {   
                products.map((product) => <li key={product.id}>{product.title}x
                </li>)
            }
        </ul>
    </div>

)

};

export default Products;