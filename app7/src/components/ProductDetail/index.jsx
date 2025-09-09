import React, {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './styles.css';

const ProductDetail =() => {
    const[product,setProduct] =useState({});
    const {id}=useParams();

    const getProduct = async () =>{
        const response =await axios.get(
            `https://api.escuelajs.co/api/v1/products/${id}`
        );
        setProduct(response.data);
    };

    useEffect(() =>{
        getProduct();
    },[id]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="wrapper">
                    <img src={product.images} alt="" className="img-fluid" />
                    </div>
                </div>
                <div className="wrapper">
                <div className="col-md-6">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">
                        <span className="badge badge-secondary">{product.category?.name}</span>
                    </p>
                    <h2>
                        <span>&#8377;</span> {product.price}
                    </h2>
                    <a href="#" className="btn btn-primary">Add to Cart</a>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;