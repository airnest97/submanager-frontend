import React, {useEffect} from "react";
import {Formik, Field} from "formik";
import CustomInput from "../reuseables/input";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import {TailSpin} from "react-loader-spinner";
import {useState, useContext} from "react";
import eye from '../../assets/eye.svg'
import eyeOff from '../../assets/eye-off.svg'
import {gapi} from 'gapi-script';
import {GoogleLogin} from 'react-google-login';
import {useNavigate} from "react-router";
import {authContext} from "../../store/context";


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
        toast.success("Success", {
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

toast.configure();



function Login() {

    const  navigate = useNavigate();

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
    const { updateAuth } = useContext(authContext);
    const signIn = async (
        email,
        password,
    ) => {
        const loginDetails = {
            email: email,
            password: password,
        };

        console.log(loginDetails)

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(loginDetails),
        };
        let url ="https://submanage.herokuapp.com/api/v1/auth/login"
        try {
            const response = await fetch(url, options);
            const data = await response.json();
            if (response.ok) {
                notify(false, " Successfully logged in ");
                alert(" Successfully logged in" )
                console.log(data)
                const authDetails = {
                    token: data.token,
                    userId: data.id,
                    name: data.name,
                };
                updateAuth(authDetails);
                navigate("/dashboard/");
            } else {
                notify(true, data.message);
            }
        } catch (error) {
            notify(true, error.message);
        }
    };



    return (
        <div className="">
            <ToastContainer/>
            <Formik
                initialValues={{
                     email: "",
                    password: "",
                }}

                validate={(values) => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = "Please enter an email";
                    }
                    if (!values.password) {
                        errors.password = "Please enter a password";
                    }

                    return errors;
                }}
                onSubmit={(values, {setSubmitting}) => {
                    signIn(
                        values.email,
                        values.password,)
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
                                <p className="forgotPassword" onClick={ () => navigate("/reset-auth/")}>Forgot password ?</p>
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
                                    {!isSubmitting && "Login"}
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

export default Login;
