"use client";

import { useEffect, useState } from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Nav from "./components/layout/Nav";
import Projects from "./sections/Projects";
import DeFi from "./sections/DeFi";
import Author from "./sections/Author";
import Skills from "./sections/Skills";
import Footer from "./sections/Footer";

export default function Home() {
  const [userAddress, setUserAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentNetworkId, setCurrentNetworkId] = useState("");

  useEffect(() => {
    const fetchNetwork = async () => {
      if (window.ethereum) {
        try {
          const networkId = await window.ethereum.request({
            method: "net_version",
          });
          setCurrentNetworkId(networkId); // This is likely a string
        } catch (error) {
          console.error("Failed to fetch network ID:", error);
        }
      }
    };

    fetchNetwork();

    const handleNetworkChanged = (hexChainId) => {
      const networkId = parseInt(hexChainId, 16).toString(); // Convert to decimal string
      setCurrentNetworkId(networkId);
    };

    window.ethereum?.on("chainChanged", handleNetworkChanged);

    return () => {
      window.ethereum?.removeListener("chainChanged", handleNetworkChanged);
    };
  }, []);

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      setIsLoading(true);
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setUserAddress(accounts[0]);
        console.log("Connected", accounts[0]);

        const networkId = await window.ethereum.request({
          method: "net_version",
        });
        setCurrentNetworkId(networkId);

        console.log("Current network id:", networkId);
      } catch (error) {
        console.error(error);
        alert("Failed to connect wallet.");
      } finally {
        setIsLoading(false);
      }
    } else {
      alert("Metamask is not installed. Please install Metamask.");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between  max-w-[2200px] mx-auto hero-bg2 overflow-hidden ">
      <Nav
        connectWallet={connectWallet}
        userAddress={userAddress}
        isLoading={isLoading}
      />
      <Hero
        connectWallet={connectWallet}
        userAddress={userAddress}
        currentNetworkId={currentNetworkId}
      />
      <About />
      <Projects />
      <DeFi />
      <Author />
      <Skills />
      <Footer />
    </main>
  );
}
