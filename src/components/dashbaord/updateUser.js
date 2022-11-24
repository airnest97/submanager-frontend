import React, { useContext } from 'react';
import { useState } from "react";
import { Field, Formik } from "formik";
import CustomInput from "../reuseables/input";
import { authContext } from '../../store/context';

const UpdateUser = () => {
    const { auth } = useContext(authContext);

    return (
        <div className="sub">
            <Formik initialValues={{
                firstName: "",
                lastName: "",
                phoneNumber: "",
            }}
                validate={(values) => {
                    const errors = {};
                    if (!values.firstName) {
                        errors.name = "Please enter your first name";
                    }
                    if (!values.lastName) {
                        errors.name = "Please enter your last name";
                    }
                    const phoneRegex = /(234|0)\d{10}/
                    if (!values.phoneNumber || !phoneRegex.test(values.phoneNumber)) {
                        errors.phoneNumber = "Please enter a valid number";
                    }

                    return errors;
                }}
                onSubmit={async (values, { setSubmitting }) => {
                    let url = `https://submanage.herokuapp.com/api/v1/user/updateUser/${auth.userId}`
                    const options = {
                        method: "PATCH",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${auth.token}`,
                        },
                        body: JSON.stringify(values),
                    };
                    try {
                        const response = await fetch(url, options);
                        const data = await response.json();
                    } catch (error) {
                        throw new Error(error.message)
                    }

                }}>

                {({
                    isValid,
                    values,
                    handleChange,
                    handleSubmit,
                    handleBlur,
                    isSubmitting,
                }) => (
                    <>
                        <div className="sub-form">
                            <form onSubmit={handleSubmit}>
                                <Field
                                    label="First Name"
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    value={values.firstName}
                                    inputBodyClassName={"input-body"}
                                    labelStyle={"labelStyleSub"}
                                    inputStyle={"inputStyleSub"}
                                    component={CustomInput}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />

                                <Field
                                    label="Last Name"
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    value={values.lastName}
                                    placeholder="Enter email"
                                    inputBodyClassName={"input-body"}
                                    labelStyle={"labelStyleSub"}
                                    inputStyle={"inputStyleSub"}
                                    component={CustomInput}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />

                                <Field
                                    label="Phone Number"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    type="text"
                                    value={values.phoneNumber}
                                    inputBodyClassName={"input-body"}
                                    labelStyle={"labelStyleSub"}
                                    inputStyle={"inputStyleSub"}
                                    component={CustomInput}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />

                                <button
                                    disabled={!isValid}
                                    type="submit"
                                    className={isValid ? "submitSub" : "disabled"}
                                >
                                    {isSubmitting && "Loading"}
                                    {!isSubmitting && "Update"}
                                </button>
                            </form>
                        </div>
                    </>
                )}
            </Formik>
        </div>
    );
};

export default UpdateUser;