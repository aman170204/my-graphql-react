import React, { useState, useEffect } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./styles.css";
import { Link, useNavigate } from 'react-router-dom';
import api from "../../api/axios";

const LoginPage = () => {
    const navigate = useNavigate();
    const [requestResponse, setRequestResponse] = useState({
        message: "",
        alertClass: "",
    });
    const initialValues = {
        email: "",
        password: "",
    };
    const onSubmit = (values) => {
        //new implementation with api
        api
            .post("/auth/login", values)
            .then(
                (response) => {
                    //success
                    // localStorage.setItem("token",response.data.access_token);    //old implementation
                    localStorage.setItem("token", response.data.token);


                    setRequestResponse({
                        message: response.data.message,
                        alertClass: "alert alert-success"
                    });
                    navigate("/");
                },
                (error) => {
                    setRequestResponse({
                        message: error.response.data.message,
                        alertClass: "alert alert-danger"
                    });
                }
            )
            .catch((error) => console.log(error));

        //Old implementatiion where axios is used in each file or page

        // axios
        // // .post("https://api.escuelajs.co/api/v1/auth/login",values)
        // .post("http://localhost:4000/api/v1/auth/login",values)
        // .then(
        //     (response) => {
        //         //success
        //         // localStorage.setItem("token",response.data.access_token);    //old implementation
        //         localStorage.setItem("token",response.data.token);


        //         setRequestResponse({
        //             message:"Login Successful",
        //             alertClass:"alert alert-success"
        //         });
        //         navigate("/");
        //         },
        //     (error) => {
        //         setRequestResponse({
        //             message:"Login Failed",
        //             alertClass:"alert alert-danger"
        //         });
        //     }
        // )
        // .catch((error) => console.log(error));
    }

    const validationSchema = Yup.object({
        email: Yup.string()
            .email("email should be valid")
            .required("email is required"),
        password: Yup.string()
            .min(6, "password must be at least 6 characters")
            .required("password is required"),
    });

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
                        <h2>Login</h2>
                        <hr />
                        <Formik
                            initialValues={initialValues}
                            onSubmit={onSubmit}
                            validationSchema={validationSchema}
                            validateOnMount
                        >
                            {(formik) =>
                                <Form >
                                    <div className="form-group">
                                        <label htmlFor="">Email</label>
                                        <Field type="text" name="email" className={
                                            formik.errors.email && formik.touched.email ?
                                                "form-control is-invalid"
                                                : "form-control"
                                        } />
                                        <ErrorMessage name="email">
                                            {(errorMessage) =>
                                                <small className="text-danger">{errorMessage}</small>
                                            }
                                        </ErrorMessage>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Password</label>
                                        <Field type="password" name="password"
                                            className={
                                                formik.errors.password && formik.touched.password ?
                                                    "form-control is-invalid"
                                                    : "form-control"} />
                                        <ErrorMessage name="password">
                                            {(errorMessage) =>
                                                <small className="text-danger">{errorMessage}</small>
                                            }
                                        </ErrorMessage>
                                    </div>
                                    <input type="Submit" value="login" className="btn btn-primary btn-block"
                                        disabled={!formik.isValid} />
                                </Form>
                            }

                        </Formik>
                        <br />
                        <p className="text-center">
                            New User ? <a href="/register" >Click Here</a>
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;