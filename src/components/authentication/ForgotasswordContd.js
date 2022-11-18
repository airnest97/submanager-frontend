import React from 'react';
import '../../pages/authntication/password/reset.css'
import {Formik, Field} from "formik";
import CustomInput from "../reuseables/input";
import {TailSpin} from "react-loader-spinner";
import {useState} from "react";
import eye from '../../assets/eye.svg'
import eyeOff from '../../assets/eye-off.svg'


const ForgotPasswordContd = () => {
    const [passwordVisible, setPasswordVisible] = useState(false)

    const passwordVisibility = () => {
        setPasswordVisible(!passwordVisible)
    }
    const reset = async (
        // name,
        // email,
        // phoneNumber,
        // password,
        // confirmPassword
    ) => {
        // const registrationDetails = {
        //     name: name,
        //     email: email,
        //     phoneNumber: phoneNumber,
        //     password: password,
        //     confirmPassword: confirmPassword,
        // };
        //
        console.log("created!")

        // const options = {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(registrationDetails),
        // };
        //
        // let url =
        //     process.env.NODE_ENV === "production"
        //         ? "https://invoice-management-systemapi-production.up.railway.app/user/create"
        //         : `http://localhost:4000/user/create`;
        //
        // try {
        //     const response = await fetch(url, options);
        //     const data = await response.json();
        //
        //
        //     if (response.ok) {
        //         notify(false, "your account was created successfully ");
        //     } else {
        //         notify(true, data.message);
        //     }
        // } catch (error) {
        //     notify(true, error.message);
        // }
    };


    return (
        <div className="resetPassword">

            <div className="logo">
                <h1 style={{color: "var(--orange"}}>SUB MANAGER</h1>
            </div>
            <div className="form">
                <Formik
                    initialValues={{
                        password: "",
                        confirmPassword: ""
                    }}

                    validate={(values) => {
                        const errors = {};

                        if (!values.password) {
                            errors.password = "Please enter a password";
                        }

                        if (!values.confirmPassword || values.confirmPassword !== values.password) {
                            errors.confirmPassword = "Passwords don't match";
                        }
                        return errors;
                    }}
                    onSubmit={(values, {setSubmitting}) => {
                        reset(
                            values.password,
                            values.confirmPassword
                        )
                            .then(() => {
                                setSubmitting(false);
                            })
                            .catch(console.log);
                    }}
                >
                    {({
                          isValid,
                          values,
                          handleChange,
                          handleSubmit,
                          handleBlur,
                          isSubmitting,
                      }) => (
                        <>
                            <form onSubmit={handleSubmit}>
                                <Field
                                    label=" New Password"
                                    id="password"
                                    name="password"
                                    type={passwordVisible ? "text" : "password"}
                                    value={values.password}
                                    component={CustomInput}
                                    inputBodyClassName={"input-body"}
                                    labelStyle={"labelStyle"}
                                    inputStyle={"inputStyle"}
                                    hasIcon={true}
                                    onChange={handleChange}
                                    togglePassword={passwordVisibility}
                                    icon={passwordVisible ? eye : eyeOff}
                                    onBlur={handleBlur}
                                />

                                <Field
                                    label="Confirm Password"
                                    id="password"
                                    name="confirmPassword"
                                    type={passwordVisible ? "text" : "password"}
                                    value={values.confirmPassword}
                                    component={CustomInput}
                                    inputBodyClassName={"input-body"}
                                    labelStyle={"labelStyle"}
                                    inputStyle={"inputStyle"}
                                    onChange={handleChange}
                                    hasIcon={true}
                                    togglePassword={passwordVisibility}
                                    icon={passwordVisible ? eye : eyeOff}
                                    onBlur={handleBlur}
                                />
                                <button
                                    disabled={!isValid}
                                    type="submit"
                                    className={isValid ? "submit" : "disabled"}
                                >
                                    {isSubmitting && (
                                        <TailSpin
                                            color="white"
                                            height={10}
                                            width={60}
                                            radius="9"
                                            wrapperStyle={{marginTop: "-5%", marginBottom: "-5%"}}
                                        />
                                    )}
                                    {!isSubmitting && "Reset"}
                                </button>


                            </form>
                        </>
                    )}

                </Formik>

            </div>

        </div>
    );
};

export default ForgotPasswordContd;