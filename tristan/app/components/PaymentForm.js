"use client";
import { ethers, BrowserProvider } from "ethers";

import { useState, useEffect } from "react";

import { Button } from "../ui/Button";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//payment form sends money to the address below
const contractAddress = "0xAaD2BBE21a4350ede505638DB04fED7514425982";
const contractABI = [
  {
    inputs: [],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "getAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "transferEther",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

// Assuming you have set up a provider or are using MetaMask

export default function PaymentForm() {
  const [amount, setAmount] = useState("");
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const initEthers = async () => {
      if (
        typeof window.ethereum !== "undefined" ||
        typeof window.web3 !== "undefined"
      ) {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const contractInstance = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        setContract(contractInstance);
      } else {
        toast.error("MetaMask is not installed!");
      }
    };

    initEthers();
  }, []);

  const handleSendFTM = async (event) => {
    event.preventDefault();

    if (!contract) {
      toast.error("Contract not loaded or MetaMask is not installed!");
      return;
    }

    if (!amount) {
      toast.error("No amount entered!");
      return;
    }

    try {
      const transactionResponse = await contract.transferEther(
        contractAddress, // Assuming you want to send to the contract itself or replace with recipient address
        ethers.parseEther(amount.toString()), // Convert the amount to wei
        { value: ethers.parseEther(amount.toString()) } // The value field is needed for payable transactions
      );

      await transactionResponse.wait(); // Wait for the transaction to be mined
      toast.success("FTM sent successfully!");
      setAmount("");
    } catch (error) {
      console.error("Error sending FTM:", error);
      toast.error(error.message);
    }
  };
  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <form
        className="bg-[#01011d] md:h-[50vh]  flex flex-col items-center justify-around text-white p-2
      xs:w-[80vw] xs:h-[80vh]
      xs3:h-[60vh]
      sm:w-[75vw] 
      lg:w-[28vw]
      xl:h-[64vh]
      2xl:h-[60vh]
      5xl:w-[28vw]

      "
        onSubmit={handleSendFTM}
      >
        <div className="flex flex-col items-center">
          <h3
            className="pb-2
          xs:text-xl
          sm:text-3xl
          md:text-4xl 
          lg:text-2xl
          xl:text-2xl
        5xl:text-4xl
        "
          >
            Want to send me FTM?
          </h3>
          <h4
            className="p-2 text-center
          md:text-2xl 
          lg:text-xl
          xl:text-lg
        5xl:text-xl
        "
          >
            <span className="text-red-400">WARNING:</span> Only{" "}
            <span className="text-green-400">FTM</span> is accepted! Any other
            type of cryptocurrency sent will be lost!
          </h4>
          <p
            className="text-center pt-2 px-2
          xs:pt-0
          sm:pt-4
          md:text-2xl md:pt-14
          lg:text-xl lg:pt-2
          xl:text-base
          
        5xl:text-xl
        "
          >
            Enter in the amount of FTM you wish to send and click the button.
            The funds will then automatically be sent to the correct wallet
            address on the Fantom Blockchain!
          </p>
        </div>
        <div
          className="flex flex-col items-center 
        xs:gap-4
        sm:gap-8
        md:gap-10
      lg:gap-4
      xl:gap-8"
        >
          <div
            className="flex gap-1 
          sm:text-2xl
          lg:pt-4 lg:text-xl
          xl:pt-0
        5xl:text-xl
        "
          >
            <label>Amount: </label>
            <input
              type="number"
              className="rounded-md text-[#01011d] indent-1"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <Button
            type="submit"
            className="bg-sky-800 px-4 py-2 hover:scale-105 hover:bg-sky-600 hover:border-sky-300 active:bg-sky-400 active:scale-100 border-4 border-sky-400
          md:text-2xl
          lg:text-xl
          
          5xl:text-xl"
          >
            Send FTM
          </Button>
        </div>
      </form>
    </>
  );
}
