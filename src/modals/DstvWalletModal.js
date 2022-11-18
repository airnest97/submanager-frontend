import React from "react";
import Modal from "react-modal";
import NewInput from "../components/reuseables/NewInput";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DstvWalletModal = ({ dstvWalletAccessOpen, closeDstvWalletAccess }) => {
  const navigate = useNavigate();

  const [values, setValues] = useState({});
  const [fieldError, setFieldError] = useState({
    subscriptionId: { message: "", error: false },
    priceOfSubscription: { message: "", error: false },
    walletID: { message: "", error: false },
    fullName: { message: "", error: false },
    phoneNumber: { message: "", error: false },
    dstvSmartCardNumber: { message: "", error: false },
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

      case "walletID":
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
      case "dstvSmartCardNumber":
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
        isOpen={dstvWalletAccessOpen}
        onRequestClose={() => closeDstvWalletAccess()}
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
          inputLabel="dstvSmartCardNumber"
          label="dstvSmartCardNumber"
          handleChange={handleChange}
          fieldError={fieldError}
        />
       
        <button
          onClick={() => closeDstvWalletAccess()}
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

export default DstvWalletModal;
