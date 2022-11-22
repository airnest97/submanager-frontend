/* eslint-disable no-unused-vars */
import React, { useState, useContext, useCallback, useEffect, } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { authContext } from "../../store/context";
import { CiSearch } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { TailSpin } from "react-loader-spinner";

const Subscriptions = () => {
  const { auth } = useContext(authContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [subscriptionList, setSubscriptionList] = useState([]);
  const [originalList, setOriginalList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isSuccessModal, setIsSuccessModal] = useState(false);

  const [searchPhrase, setSearchPhrase] = useState("");
  const updateSearchPhrase = (event) => {
    const value = event.target.value;
    setSearchPhrase(value);
    if (value.length === 0) {
      setSubscriptionList(originalList)
    }
  };

  const deleteSub = async () => {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.token}`,
      },
    };
    let url = `https://submanage.herokuapp.com/api/v1/user/${id}`

    console.log("id is ", id)

    const response = await fetch(url, options);

    if (response.ok) {
      navigate("/dashboard");
      alert("Successfully Deleted ");
    } else {
      alert("Something went wrong");
    }
  };

  const search = async () => {
    setLoading(true)
    const value = searchPhrase
    const res = await fetch(`https://submanage.herokuapp.com/v1/user/search?userId=1&subscriptionName/${value}`, {
      method: 'GET'
    })

    if (res.ok) {
      const data = await res.json();
      setSubscriptionList(data)
      setLoading(false);
      console.log(data)
    }

  }

  const getSubscriptions = useCallback(async () => {
    setLoading(true);
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.token}`,
      },
    };
    let url = `https://submanage.herokuapp.com/api/v1/user/subscription/${auth.userId}`;

    const response = await fetch(url, options);
    if (response.ok) {
      const data = await response.json();
      setSubscriptionList(data);
      setOriginalList(data);
      console.log(data);
      setLoading(false);
    }
  }, [auth.token, auth.userId]);


  useEffect(() => {
    getSubscriptions();
  }, [getSubscriptions]);

  if (loading) {
    return (
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TailSpin color="red" height={100} width={100} />
      </div>
    );
  }

  if (subscriptionList.length === 0) {
    return (
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>You Have No Subscription yet</h1>
      </div>
    );
  }



  return (
    <div className="subscriptions">
      <div className="search">
        <input
          type="search"
          id="search"
          name="search"
          value={searchPhrase}
          placeholder="search for a subscription...."
          onKeyDown={e => e.key === 'Enter' && search()}
          onChange={(e) => updateSearchPhrase(e)}
        />
        <CiSearch />
      </div>
      {subscriptionList.map((subObj, index) => (
        <div className="subscription-cards" key={index}>
          <div className="card">
            <h1>{subObj.nameOfSubscription}</h1>
            <p>Expires: {subObj.nextPayment}</p>
            <p>Category: {subObj.category}</p>
            <div className="details-delete-edit">
              <MdDelete
                fontSize={23}
                color="#dc4d01"
                style={{ cursor: "pointer" }}
              />
              <div className="edit" style={{ cursor: "pointer" }}>
                <h3 onClick={() => navigate("./edit-subscription")}>Edit</h3>
              </div>
              <div className="details" style={{ cursor: "pointer" }}>
                <h3 onClick={() => setIsSuccessModal(true)}>Details</h3>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Subscriptions;
