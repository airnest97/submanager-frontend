import React from "react";
import Modal from "react-modal";
import NewInput from "../components/reuseables/NewInput";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const GotvCardModal = ({ GotvCardAccessOpen, closeGotvCardAccess }) => {
  const navigate = useNavigate();

  const [values, setValues] = useState({});
  const [fieldError, setFieldError] = useState({
    subscriptionId: { message: "", error: false },
    priceOfSubscription: { message: "", error: false },
    cardNumber: { message: "", error: false },
    cVV: { message: "", error: false },
    fullName: { message: "", error: false },
    phoneNumber: { message: "", error: false },
    goTv_IUC_Number: { message: "", error: false },
    cardExpiryDate: { message: "", error: false },
  });

  const submit = () => {
    navigate(`/dashboard/${values.eventID}`);
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    checkIfFieldIsEmpty(e);
  };
  const checkIfFieldIsEmpty = (e) => {
    switch (e.target.name) {
      case "subscriptionId":
        if (e.target.value === "") {
          setFieldError({
            ...fieldError,
            [e.target.name]: {
              message: "enter token",
              error: true,
            },
          });
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
              message: "enter token",
              error: true,
            },
          });
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

      case "cardNumber":
        if (e.target.value === "") {
          setFieldError({
            ...fieldError,
            [e.target.name]: {
              message: "enter token",
              error: true,
            },
          });
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
      case "cVV":
        if (e.target.value === "") {
          setFieldError({
            ...fieldError,
            [e.target.name]: {
              message: "enter token",
              error: true,
            },
          });
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
      case "fullName":
        if (e.target.value === "") {
          setFieldError({
            ...fieldError,
            [e.target.name]: {
              message: "enter token",
              error: true,
            },
          });
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
      case "phoneNumber":
        if (e.target.value === "") {
          setFieldError({
            ...fieldError,
            [e.target.name]: {
              message: "enter token",
              error: true,
            },
          });
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
      case "goTv_IUC_Number":
        if (e.target.value === "") {
          setFieldError({
            ...fieldError,
            [e.target.name]: {
              message: "enter token",
              error: true,
            },
          });
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
      case "cardExpiryDate":
        if (e.target.value === "") {
          setFieldError({
            ...fieldError,
            [e.target.name]: {
              message: "enter token",
              error: true,
            },
          });
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
  };

  return (
    <div>
      <Modal
        isOpen={GotvCardAccessOpen}
        onRequestClose={() => closeGotvCardAccess()}
        className="modal-content"
        overlayClassName="overlay"
      >
        <NewInput
          text="text"
          inputLabel="subscriptionId"
          label="Subscription ID"
          handleChange={handleChange}
          fieldError={fieldError}
        />
        <NewInput
          text="text"
          inputLabel="cardNumber"
          label="Card Number"
          handleChange={handleChange}
          fieldError={fieldError}
        />
         <NewInput
          text="date"
          inputLabel="cardExpiryDate"
          label="Card Expiry Date"
          handleChange={handleChange}
          fieldError={fieldError}
        />
        <NewInput
          text="text"
          inputLabel="cVV"
          label="CVV"
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
        <NewInput
          text="text"
          inputLabel="fullName"
          label="Full Name"
          handleChange={handleChange}
          fieldError={fieldError}
        />
        <NewInput
          text="text"
          inputLabel="phoneNumber"
          label="Phone Number"
          handleChange={handleChange}
          fieldError={fieldError}
        />
        <NewInput
          text="text"
          inputLabel="goTv_IUC_Number"
          label="goTv IUC Number"
          handleChange={handleChange}
          fieldError={fieldError}
        />
       
        <button
          onClick={() => closeGotvCardAccess()}
          style={{
            cursor: "pointer",
            paddingTop: "1%",
            paddingBottom: "1%",
            color: "white",
            marginTop: "5%",
            backgroundColor: "#dc4d01",
            fontWeight: "bold",
            textAlign: "center",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Close
        </button>
        <button
          style={{
            cursor: "pointer",
            padding: "1%",
            color: "white",
            marginLeft: "70%",
            backgroundColor: "#dc4d01",
            fontWeight: "bold",
            textAlign: "center",
            border: "none",
            borderRadius: "4px",
          }}
          onClick={submit}
        >
          Submit
        </button>
      </Modal>
    </div>
  );
};

export default GotvCardModal;
