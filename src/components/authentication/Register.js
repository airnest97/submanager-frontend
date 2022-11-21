import React, {useEffect} from "react";
import {Formik, Field} from "formik";
import CustomInput from "../reuseables/input";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import 'react-toastify/dist/ReactToastify.css';
import {TailSpin} from "react-loader-spinner";
import {useState} from "react";
import eye from '../../assets/eye.svg'
import eyeOff from '../../assets/eye-off.svg'
import {gapi} from 'gapi-script';
import {GoogleLogin} from 'react-google-login';
toast.configure();



function notify(isError, message) {
    if (isError) {
        toast.error(message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    } else {
        toast.success(message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
}
const Register = ({change}) => {

    const [passwordVisible, setPasswordVisible] = useState(false)

    const clientId = "928512642163-vrbfcf0ul6672ronv928jqf5g66mq77l.apps.googleusercontent.com"
    const SCOPES = 'profile email https://www.googleapis.com/auth/calendar.readonly';

    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: clientId,
                scope: SCOPES
            });
        };
        gapi.load('client:auth2', initClient);
    });

    const passwordVisibility = () => {
        setPasswordVisible(!passwordVisible)
    }

    const onSuccess = (res) => {
        console.log('success:', res);
    };
    const onFailure = (err) => {
        console.log('failed:', err);
    };

    const signUp = async (
        firstName,
        lastName,
        email,
        password,
        phoneNumber,
    ) => {
        const registrationDetails = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            phoneNumber: phoneNumber,
        };


        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(registrationDetails),
        };

        let url = "https://submanage.herokuapp.com/api/v1/auth/signup"
        try {
            const response = await fetch(url, options);
            const data = await response.json();
            console.log(data);

            if (response.ok) {
                notify(false, "your account was created successfully ", data.message);
                alert("your account was created successfully ")
                return data
            } else {
                notify(true, data.message);
                return data.message
            }
        } catch (error) {
            notify(true, error.message);
            return error.message
        }
    };



    return (
        <div>
            <ToastContainer/>
            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    phoneNumber: "",
                    password: "",
                    confirmPassword:""
                }}

                validate={(values) => {
                    const errors = {};
                    if (!values.firstName) {
                        errors.firstName = "Please enter your first name";
                    }
                    if (!values. lastName) {
                        errors.lastName = "Please enter your last name";
                    }

                    if (!values.email) {
                        errors.email = "Please enter an email";
                    }

                    if (!values.password) {
                        errors.password = "Please enter a password";
                    }
                    const phoneRegex = /(234|0)\d{10}/
                    if (!values.phoneNumber || !phoneRegex.test(values.phoneNumber)) {
                        errors.phoneNumber = "Please enter a valid number";
                    }
                    if (!values.confirmPassword || values.confirmPassword !== values.password) {
                        errors.confirmPassword = "Passwords don't match";
                    }
                    return errors;
                }}
                onSubmit={(values, {setSubmitting}) => {
                    console.log(values)
                    signUp(
                        values.firstName,
                        values.lastName,
                        values.email,
                        values.password,
                        values.phoneNumber,
                    )
                        .then((res) => {
                            setSubmitting(false);
                            notify(false, "your account was created successfully ")
                            change(true);



                        })
                        .catch((res) => {
                            setSubmitting(false);


                        });
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
                                    label="First Name"
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    value={values.firstName}
                                    component={CustomInput}
                                    inputBodyClassName={"input-body"}
                                    labelStyle={"labelStyle"}
                                    inputStyle={"inputStyle"}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />


                                <Field
                                    label="Last Name"
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    value={values.lastName}
                                    component={CustomInput}
                                    inputBodyClassName={"input-body"}
                                    labelStyle={"labelStyle"}
                                    inputStyle={"inputStyle"}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />

                                <Field
                                    label="Email"
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={values.email}
                                    component={CustomInput}
                                    inputBodyClassName={"input-body"}
                                    labelStyle={"labelStyle"}
                                    inputStyle={"inputStyle"}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />

                                <Field

                                    label="Phone Number"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    type="text"
                                    value={values.phoneNumber}
                                    placeholder="Enter email"
                                    component={CustomInput}
                                    inputBodyClassName={"input-body"}
                                    labelStyle={"labelStyle"}
                                    inputStyle={"inputStyle"}
                                    onChange={handleChange}
                                    onBlur={handleBlur}

                                />

                                <Field
                                    label="Password"
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
                                <div className="buttons">
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
                                        {!isSubmitting && "Register"}
                                    </button>

                                    <GoogleLogin
                                        clientId={clientId}
                                        buttonText="Sign up with Google"
                                        onSuccess={onSuccess}
                                        onFailure={onFailure}
                                        cookiePolicy={'single_host_origin'}
                                        isSignedIn={true}
                                        className={"google"}
                                    />
                                </div>
                            </form>
                    </>
                )}

            </Formik>

        </div>
    );
}

export default Register;
