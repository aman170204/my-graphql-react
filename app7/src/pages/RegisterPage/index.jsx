import React, { useState, useEffect } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./styles.css";
import api from "../../api/axios";

const RegisterPage = () => {

    const [requestResponse, setRequestResponse] = useState({
        message: "",
        alertClass: "",
    });

    const initialValues = {
        firstName: "",
        email: "",
        username: "",
        password: "",
    };

    const onSubmit = (values) => {
        //New implementation with central axios
        api
            .post("/auth/register", values)
            .then((response) => {
                console.log(response.data);
                setRequestResponse({
                    message: response.data.message,
                    alertClass: "alert alert-success",
                });
            }, (error) => {
                console.log(error.response.data);
                setRequestResponse({
                    message: error.response.data.message,
                    alertClass: "alert alert-danger",
                });
            })
            .catch((error) => console.log(error));

        //  Old implementation 

        //     axios.post('http://localhost:4000/api/v1/auth/register',values)
        //     .then((response) => {
        //         console.log(response.data);
        //         setRequestResponse({
        //             message: response.data.message,
        //             alertClass:"alert alert-success",
        //         });
        //     },(error) => {
        //         console.log(error.response.data);
        //         setRequestResponse({
        //             message: error.response.data.message,
        //             alertClass:"alert alert-danger",
        //     });
        //    })
        //    .catch((error) => console.log(error));
    };

    const validationSchema = Yup.object({
        firstName: Yup.string().required("first name is required"),
        email: Yup.string().email("Invalid email format")
            .required("Email is required"),
        username: Yup.string().required("username is required"),
        password: Yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),


    });

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        validateOnMount: true,
    })


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                </div>
                <div className="col-md-6">
                    <div className="wrapper">
                        <div className={requestResponse.alertClass} role="alert">
                            {requestResponse.message}
                        </div>
                        <h2>Register</h2>
                        <hr />
                        <form onSubmit={formik.handleSubmit}>
                            <div className="form-group">
                                <label >firstName</label>
                                <input type="text" className="form-control" name="firstName" value={formik.values.firstName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />

                                {formik.errors.firstName && formik.touched.firstName ? (
                                    <small className="text-danger">{formik.errors.firstName}</small>
                                ) : null}


                            </div>
                            <div className="form-group">
                                <label >Email</label>
                                <input type="text" name="email"
                                    className="form-control" value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur} />
                                {formik.errors.email && formik.touched.email ? (
                                    <small className="text-danger">{formik.errors.email}</small>
                                ) : null}
                            </div>
                            <div className="form-group">
                                <label >username</label>
                                <input type="text" name="username"
                                    className="form-control" value={formik.values.username}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur} />
                                {formik.errors.username && formik.touched.username ? (
                                    <small className="text-danger">{formik.errors.username}</small>
                                ) : null}
                            </div>
                            <div className="form-group">
                                <label >Password</label>
                                <input type="password" name="password"
                                    className="form-control" value={formik.handler}
                                    onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                {formik.errors.password && formik.touched.password ? (
                                    <small className="text-danger">{formik.errors.password}</small>
                                ) : null}
                            </div>
                            <input type="submit" value="Register"
                                className="  btn btn-priary btn-block"
                                disabled={!formik.isValid} />
                        </form>
                        <br />
                        <p className="text-center">Already Register ?
                            <a href="/login" >Login</a>
                        </p>

                    </div>
                </div>
                <div className="col-md-3">
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;