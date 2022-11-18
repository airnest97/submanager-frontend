import React, {useState} from 'react';
import { Formik, Field } from "formik";
import CustomInput from "../reuseables/input";


const UpdateSubscription = () => {

    const [initialSubDetails, setInitialInvoiceDetails] = useState(null);
    // const [loading, setLoading] = useState(false);


    const updateSub = async () => {
        console.log("h1")
    }

    return (
        <div className="sub">
            <Formik initialValues={{
                nameOfSubscription: "",
                priceOfSubscription: "",
                category:"",
                description:"",
                recurringPayment: "",
                // nameOfSubscription: initialSubDetails.nameOfSubscription,
                // priceOfSubscription: initialSubDetails.priceOfSubscription,
                // category: initialSubDetails.category,
                // description: initialSubDetails.description,
                // recurringPayment: initialSubDetails.recurringPayment,


            }}
                    validate={(values) => {
                        const errors = {};
                        if (!values.nameOfSubscription) {
                            errors.nameOfSubscription = "this field is required";
                        }
                        if (!values.priceOfSubscription) {
                            errors.priceOfSubscription = "Please enter a price";
                        }
                        if (!values.category) {
                            errors.category = "Please enter a category";
                        }
                        if (!values.description) {
                            errors.description = "Please enter a description"
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        updateSub(
                            values.nameOfSubscription,
                            values.priceOfSubscription,
                            values.category,
                            values.description,
                            values.nextPayment,
                            values.paymentCycle,
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
                                    label="Name of subscription"
                                    id="nameOfSubscription"
                                    name="nameOfSubscription"
                                    type="text"
                                    value={values.nameOfSubscription}
                                    inputBodyClassName={"input-body"}
                                    labelStyle={"labelStyleSub"}
                                    inputStyle={"inputStyleSub"}
                                    component={CustomInput}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />

                                <Field
                                    label="Price of subscription"
                                    id="priceOfSubscription"
                                    name="priceOfSubscription"
                                    type="number"
                                    value={values.priceOfSubscription}
                                    placeholder="Enter email"
                                    inputBodyClassName={"input-body"}
                                    labelStyle={"labelStyleSub"}
                                    inputStyle={"inputStyleSub"}
                                    component={CustomInput}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />

                                <Field
                                    label="Category "
                                    id="category"
                                    name="category"
                                    type="text"
                                    value={values.category}
                                    inputBodyClassName={"input-body"}
                                    labelStyle={"labelStyleSub"}
                                    inputStyle={"inputStyleSub"}
                                    component={CustomInput}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />

                                <Field
                                    label="Description"
                                    id="description"
                                    name="description"
                                    type="text"
                                    inputBodyClassName={"input-body"}
                                    labelStyle={"labelStyleSub"}
                                    inputStyle={"inputStyleSub"}
                                    value={values.description}
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

export default UpdateSubscription;