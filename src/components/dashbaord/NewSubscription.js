import React, { useContext, useEffect, useState } from "react";
import { Formik, Field } from "formik";
import CustomInput from "../reuseables/input";
import { authContext } from "../../store/context";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import SelectComoponent from "../reuseables/Select";

const NewSubscription = () => {
  const { auth } = useContext(authContext);
  const navigate = useNavigate();
  const [selectCategory, setSelectCategory] = useState(null);
  const [selectRecurring, setSelectRecurring] = useState(null);
  const [selectPaymentCycle, setSelectPaymentCycle] = useState(null);

  const categortyOptions = [
    // {value: ' ', label: "Select"},
    { value: "BILL", label: "Bill" },
    { value: "ENTERTAINMENT", label: "Entertainment" },
    { value: "SOFTWARE", label: "Sofware" },
    { value: "FOOD_DRINK", label: "Food & Drink" },
    { value: "OTHERS", label: "Others" },
  ];

  const cycleOptions = [
    // {value: ' ', label: "Select"},
    { value: "DAILY", label: "Daily" },
    { value: "WEEKLY", label: "Weekly" },
    { value: "MONTHLY", label: "Monthly" },
    { value: "QUARTERLY", label: "Quarterly" },
    { value: "HALF_QUARTERLY", label: "Half Quarterly" },
    { value: "YEARLY", label: "Yearly" },
  ];

  const reccuringOption = [
    // {value: ' ', label: "Select"},
    { value: "RECURRING_PAYMENT", label: "Reccuring Payment" },
    { value: "ONE_TIME_PAYMENT", label: "One Time Payment" },
  ];

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
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        onClose: () => {
          navigate({ pathname: "/dashboard/" });
        },
      });
    }
  }
  const newSub = async (
    nameOfSubscription,
    priceOfSubscription,
    category,
    description,
    recurringPayment,
    nextPayment,
    date,
    paymentCycle,
    
  ) => {
    const newSubscriptionDetails = {
      nameOfSubscription,
      priceOfSubscription,
      category: selectCategory.value,
      description,
      recurringPayment: selectRecurring.value,
      nextPayment,
      date,
      paymentCycle: selectPaymentCycle.value,
    };

    console.log(newSubscriptionDetails);
    console.log(auth);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.token}`,
      },
      body: JSON.stringify(newSubscriptionDetails),
    };
    let url = `https://submanage.herokuapp.com/api/v1/user/addSubscription/${auth.userId}`;

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      if (response.ok) {
        notify(false, "Subscription was  sucessfully created");
      } else {
        notify(true, data.message);
      }
    } catch (error) {
      notify(true, error.message);
    }
  };
  return (
    <div className="sub">
      <Formik
        initialValues={{
          nameOfSubscription: "",
          priceOfSubscription: "",
          category: selectCategory,
          description: "",
          recurringPayment: selectRecurring,
          nextPayment: "",
          paymentCycle: selectPaymentCycle,
          date: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.nameOfSubscription) {
            errors.nameOfSubscription = "Required";
          }
          if (!values.priceOfSubscription) {
            errors.priceOfSubscription = "Required";
          }
          //   if (!values.category ) {
          //     errors.category = "Required";
          //   }
          if (!values.description) {
            errors.description = "Required";
          }

          if (!values.nextPayment) {
            errors.nextPayment = "Required";
          }

          if (!values.date) {
            errors.date = "Required";
          }

          //   if (!values.recurringPayment) {
          //     errors.recurringPayment = "Required";
          //   }

          //   if (!values.paymentCycle) {
          //     errors.paymentCycle = "Required";
          //   }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          newSub(
            values.nameOfSubscription,
            values.priceOfSubscription,
            values.category,
            values.description,
            values.nextPayment,
            values.recurringPayment,
            values.paymentCycle,
            values.date
          ).then(() => {
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
                  type="text git"
                  value={values.category?.value}
                  inputBodyClassName={"input-body"}
                  customStyle={"inputStyleSub"}
                  component={SelectComoponent}
                  options={categortyOptions}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  selectOption={selectCategory}
                  setSelectedOption={setSelectCategory}
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

                <Field
                  label="Next Payment"
                  id="nextPayment"
                  name="nextPayment"
                  type="date"
                  inputBodyClassName={"input-body"}
                  labelStyle={"labelStyleSub"}
                  inputStyle={"inputStyleSub"}
                  value={values.nextPayment}
                  component={CustomInput}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <Field
                  label="Date"
                  id="date"
                  name="date"
                  type="date"
                  inputBodyClassName={"input-body"}
                  labelStyle={"labelStyleSub"}
                  inputStyle={"inputStyleSub"}
                  value={values.date}
                  component={CustomInput}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <Field
                  label="Recurring Payment"
                  id="recurringPayment"
                  name="recurringPayment"
                  type="text"
                  inputBodyClassName={"input-body"}
                  customStyles={"inputStyleSubselect"}
                  value={values.recurringPayment?.value}
                  component={SelectComoponent}
                  options={reccuringOption}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  selectOption={selectRecurring}
                  setSelectedOption={setSelectRecurring}
                />
                <Field
                  label="Payment Cycle"
                  id="paymentCycle"
                  name="paymentCycle"
                  type="text"
                  inputBodyClassName={"input-body"}
                  customStyles={"inputStyleSubselect"}
                  value={values.paymentCycle?.value}
                  component={SelectComoponent}
                  options={cycleOptions}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  selectOption={selectPaymentCycle}
                  setSelectedOption={setSelectPaymentCycle}
                />
                <button
                  disabled={!isValid}
                  type="submit"
                  className={isValid ? "submitSub" : "disabled"}
                >
                  {isSubmitting && "Loading"}
                  {!isSubmitting && "Create"}
                </button>
              </form>
            </div>
          </>
        )}
      </Formik>
    </div>
  );
};

export default NewSubscription;
