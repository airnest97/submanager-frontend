import React from "react";
import { useState, useContext } from "react";
import NewInput from "../reuseables/NewInput";
import { authContext } from "../../store/context";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Button from "../reuseables/Button";

const CreateSubscription = () => {
  const { auth } = useContext(authContext);
  const navigate = useNavigate();
  const [values, setValues] = useState({});
  const [formValid, setFormValid] = useState(true);
  const [fieldError, setFieldError] = useState({
    nameOfSubscription: { message: "", error: false },
    priceOfSubscription: { message: "", error: false },
    category: { message: "", error: false },
    recurringPayment: { message: "", error: false },
    description: { message: "", error: false },
    nextPayment: { message: "", error: false },
    paymentCycle: { message: "", error: false },
  });

  const validateValues = () => {
    if (
      values.nameOfSubscription &&
      values.priceOfSubscription &&
      values.category &&
      values.description &&
      values.recurringPayment &&
      values.nextPayment &&
      values.paymentCycle
    ) {
      if (
        values.nameOfSubscription !== "" &&
        values.priceOfSubscription !== "" &&
        values.category !== "" &&
        values.description !== "" &&
        values.recurringPayment !== "" &&
        values.nextPayment !== "" &&
        values.paymentCycle !== ""
      ) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  };

  const checkIfFieldIsEmpty = (e) => {
    setFormValid(true);
    switch (e.target.name) {
      case "nameOfSubscription":
        if (e.target.value === "") {
          setFieldError({
            ...fieldError,
            [e.target.name]: {
              message: "Required",
              error: true,
            },
          });
          setFormValid(false);
        } else {
          setFieldError({
            ...fieldError,
            [e.target.name]: {
              message: "",
              error: false,
            },
          });
        }
        break;

      case "priceOfSubscription":
        if (e.target.value === "") {
          setFieldError({
            ...fieldError,
            [e.target.name]: {
              message: "Required",
              error: true,
            },
          });
          setFormValid(false);
        } else {
          setFieldError({
            ...fieldError,
            [e.target.name]: {
              message: "",
              error: false,
            },
          });
        }
        break;

      case "category":
        if (e.target.value === "") {
          setFieldError({
            ...fieldError,
            [e.target.name]: {
              message: "Required",
              error: true,
            },
          });
          setFormValid(false);
        } else {
          setFieldError({
            ...fieldError,
            [e.target.name]: {
              message: "",
              error: false,
            },
          });
        }
        break;

      case "description":
        if (e.target.value === "") {
          setFieldError({
            ...fieldError,
            [e.target.name]: {
              message: "Required",
              error: true,
            },
          });
          setFormValid(false);
        } else {
          setFieldError({
            ...fieldError,
            [e.target.name]: {
              message: "",
              error: false,
            },
          });
        }
        break;

      case "recurringPayment":
        if (e.target.value === "") {
          setFieldError({
            ...fieldError,
            [e.target.name]: {
              message: "Required",
              error: true,
            },
          });
          setFormValid(false);
        } else {
          setFieldError({
            ...fieldError,
            [e.target.name]: {
              message: "",
              error: false,
            },
          });
        }
        break;

      case "nextPayment":
        if (e.target.value === "") {
          setFieldError({
            ...fieldError,
            [e.target.name]: {
              message: "Required",
              error: true,
            },
          });
          setFormValid(false);
        } else {
          setFieldError({
            ...fieldError,
            [e.target.name]: {
              message: "",
              error: false,
            },
          });
        }
        break;

      case "paymentCycle":
        if (e.target.value === "") {
          setFieldError({
            ...fieldError,
            [e.target.name]: {
              message: "Required",
              error: true,
            },
          });
          setFormValid(false);
        } else {
          setFieldError({
            ...fieldError,
            [e.target.name]: {
              message: "",
              error: false,
            },
          });
        }
        break;

      default:
        break;
    }

    if (e.target.value === " ") return true;
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    checkIfFieldIsEmpty(e);
  };

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

  const newSub = async () => {
    const newSubscriptionDetails = {
      nameOfSubscription: values.nameOfSubscription,
      priceOfSubscription: values.priceOfSubscription,
      category: values.category,
      description: values.description,
      recurringPayment: values.recurringPayment,
      nextPayment: values.nextPayment,
      paymentCycle: values.paymentCycle,
    };

    if (!values.nameOfSubscription ||
      !values.priceOfSubscription ||
      !values.category ||
      !values.description ||
      !values.recurringPayment ||
      !values.nextPayment ||
      !values.paymentCycle) {
      return
    }

    console.log("values of sub body", newSubscriptionDetails);
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
      const formValid = validateValues();
      if (formValid) {
        notify(false, "Subscription was  sucessfully created");
      } else {
        setFormValid(false);
      }
    } catch (error) {
      notify(true, error.message);
    }
  };

  return (
    <div className="inputs">
      <NewInput
        text="text"
        inputLabel="nameOfSubscription"
        label="Name Of Subscription"
        handleChange={handleChange}
        fieldError={fieldError}
      />

      <NewInput
        text="text"
        inputLabel="priceOfSubscription"
        label="Price Of Subscription"
        handleChange={handleChange}
        fieldError={fieldError}
      />

      <div className="options">
        <label htmlFor="category">Choose a Category</label>
        <select
          name="category"
          id="category"
          className="options"
          onChange={handleChange}
        >
          <option >select</option>
          <option value="BILL">Bill</option>
          <option value="ENTERTAINMENT">Entertainment</option>
          <option value="SOFTWARE">Sofware</option>
          <option value="FOOD_DRINK">Food & Drinks</option>
          <option value="OTHERS">Others</option>
        </select>
      </div>

      <NewInput
        text="text"
        inputLabel="description"
        label="Decription"
        handleChange={handleChange}
        fieldError={fieldError}
      />

      <div className="options">
        <label htmlFor="recurringPayment">Reccurring Payment:</label>
        <select
          name="recurringPayment"
          id="recurringPayment"
          className="options"
          onChange={handleChange}
        >
          <option>select</option>
          <option value="RECURRING_PAYMENT">Reccurring Payment</option>
          <option value="ONE_TIME_PAYMENT">One Time Payment</option>
        </select>
      </div>

      <NewInput
        text="date"
        inputLabel="nextPayment"
        label="Next Payment"
        handleChange={handleChange}
        fieldError={fieldError}
      />

      <div className="options">
        <label htmlFor="paymentCycle">Choose a Payment Cycle</label>
        <select name="paymentCycle" id="paymentCycle" onChange={handleChange}>
          <option>select</option>
          <option value="DAILY">Daily</option>
          <option value="WEEKLY">Weekly</option>
          <option value="MONTHLY">Monthly</option>
          <option value="QUARTERLY">Quarterly</option>
          <option value="HALF_QUARTERLY">Half Quarterly</option>
          <option value="YEARLY"></option>
        </select>
      </div>

      <Button
        disabled={!formValid}
        onClick={newSub}
        type={"button"}
        buttonStyle={formValid ? "solid" : "disabled"}
      >
        Add Subscription
      </Button>
    </div>
  );
};

export default CreateSubscription;
