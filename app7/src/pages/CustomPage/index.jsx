import React, {useState,useEffect} from 'react';
import axios from 'axios';
import api from '../../api/axios';

const CustomPage =() => {
    useEffect(() =>{
        api
        .get('/products')
        .then(response => console.log(response.data))
        .catch(error => console.log(error));
    },[])

    return(
        <div className="container">
            {/* This page is created for testing the central axios */}
            <h2>Custom page</h2>
            <p>Testing Custom Api</p>
        </div>
    )
}

export default CustomPage;