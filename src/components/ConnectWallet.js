import React, { useState } from "react";
import {
    Button,
  } from "reactstrap";
  import Web3 from 'web3'
  import { ethers } from "ethers";


const ConnectWallet = ({walletLogin,isConnected}) => {
  console.log('wal logins',walletLogin)

  //state hook for provider connection, default set to false
  //specifically to improve UX by showing on the button whether it is loading
  const [isConnecting, setIsConnecting] = useState(false);

  //method to fetch and detect the library that will enable
  //interaction and send requests to metamask
  //the library/provider is automatically injected into our 
  //browser by metamask
  const detectProvider = () => {
    let provider;
    //check the the library injected by metamask is ethereum
    //(all newer versions inject ethereum)
    if (window.ethereum) {
      provider = window.ethereum;
    } else if (window.web3) {
      provider = window.web3.currentProvider;
    } else {
      //send alert if nothing is detected
      window.alert("No Ethereum browser detected! Check out MetaMask");
    }
    //return provider so we can use in the login handler method
    return provider;
  };

  const onLoginHandler = async () => {
    //check if we have provider
    const provider = detectProvider();
    //if there is a provider
    if (provider) {
      //if the provider is not ethereum, send error message
      if (provider !== window.ethereum) {
        console.error(
          "Not window.ethereum provider. Do you have multiple wallet installed ?"
        );
      }
      //otherwise, set connecting state to true while it connects
      setIsConnecting(true);
      //send request to metamask using the provider to get accounts
      //metamask will respond by opening its login window
      await provider.request({
        method: "eth_requestAccounts",
      });
      //once response returned, it is no longer connecting
      setIsConnecting(false);
    }
    //call onLogin method passed thru props(in Pyramid.js component)
    //and pass thru the provider
    walletLogin(provider);
  };

  return (
    <div>
      
        {!isConnecting &&(
            <Button
            className="btn-neutral btn-icon mb-2"
            color="default"
            onClick={onLoginHandler} type="submit"
          >
                <span className="btn-inner--icon">
                  <img
                    alt="..."
                    src={
                      require("../views/images/mm.svg")
                        .default
                    }
                  />
                </span>
                <span className="btn-inner--text">Connect Metamask</span>
                </Button>
              )}
              {isConnecting && (<Button
                className="btn-neutral btn-icon mb-2"
                color="default"
                onClick={onLoginHandler} type="submit"
              ><span className="btn-inner--text">Loading</span></Button>)}
       
    </div>
  );
};

export default ConnectWallet;