import React from "react";
import {Formik, Field} from "formik";
import CustomInput from "../reuseables/input";
// import "react-toastify/dist/ReactToastify.css";
import {TailSpin} from "react-loader-spinner";
import '../../pages/authntication/password/reset.css'



const ForgotPassword = () => {

    const send = async (
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

    // const ErrorSchema = Yup.object().shape({
    //     phoneNumber: Yup.string()
    //         .matches(
    //             /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
    //             "Not a Phone number"
    //         )
    //         .required("Required"),
    //     message: Yup.string()
    //         .min(5, "Too Short!")
    //         .max(20, "Too Long!")
    //         .required("Required"),
    //     })

    return (
        <div className="resetPassword">

            <div className="logo">
                <h1 style={{color: "var(--orange"}}>SUB MANAGER</h1>
            </div>

            <div className="form">
                <Formik
                    initialValues={{
                        email: "",
                    }}

                    validate={(values) => {
                        const errors = {};

                        if (!values.email) {
                            errors.email = "Please enter an email";
                        }
                        return errors;
                    }}
                    onSubmit={(values, {setSubmitting}) => {
                        send(
                            values.email,
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
                                    {!isSubmitting && "Submit"}
                                </button>
                            </form>
                        </>
                    )}
                </Formik>
            </div>

        </div>
    );
};

export default ForgotPassword;