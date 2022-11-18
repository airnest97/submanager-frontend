import React from 'react';
import {useState} from "react";
import {Field, Formik} from "formik";
import CustomInput from "../reuseables/input";

const UpdateUser = () => {
    const [initialSubDetails, setInitialInvoiceDetails] = useState(null);
    // const [loading, setLoading] = useState(false);


    const updateSub = async () => {
        console.log("h1")
    }

    return (
        <div className="sub">
            <Formik initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                phoneNumber: "",
                // nameOfSubscription: initialSubDetails.nameOfSubscription,
                // priceOfSubscription: initialSubDetails.priceOfSubscription,
                // category: initialSubDetails.category,
                // description: initialSubDetails.description,
                // recurringPayment: initialSubDetails.recurringPayment,


            }}
                    validate={(values) => {
                        const errors = {};
                        if (!values.firstName) {
                            errors.name = "Please enter your first name";
                        }
                        if (!values. lastName) {
                            errors.name = "Please enter your last name";
                        }

                        if (!values.email) {
                            errors.email = "Please enter an email";
                        }

                        const phoneRegex = /(234|0)\d{10}/
                        if (!values.phoneNumber || !phoneRegex.test(values.phoneNumber)) {
                            errors.phoneNumber = "Please enter a valid number";
                        }

                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        updateSub(
                            values.firstName,
                            values.lastName,
                            values.email,
                            values.phoneNumber,
                        )
                            .then(() => {
                                setSubmitting(false);
                            })

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
                                    label="Email"
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={values.email}
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