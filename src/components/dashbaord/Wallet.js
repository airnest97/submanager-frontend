import React from 'react';
import wallet from "../../assets/Plain-credit card-amico.svg"

const Wallet = () => {
    return (
      <div className="walletBody">
          <div className="wallet">
              <div className="balance">
                  <p>Total Balance</p>
                  <h1>₦100,000</h1>
              </div>
              <button>Fund Wallet</button>
          </div>

      </div>

    );
};

export default Wallet;