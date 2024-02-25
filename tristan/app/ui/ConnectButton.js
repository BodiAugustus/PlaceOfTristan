import { useState, useEffect } from "react";
import clsx from "clsx";

const buttonStyles =
  "flex items-center justify-center rounded-lg transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 aria-disabled:cursor-not-allowed aria-disabled:opacity-50";

export function ConnectButton({
  children,
  className,
  isLoading,
  connectWallet,
  userAddress,
  ...rest
}) {
  // State to track the availability of window.ethereum
  const [isEthereumAvailable, setIsEthereumAvailable] = useState(false);

  useEffect(() => {
    // Check for Ethereum provider only on client side
    setIsEthereumAvailable(typeof window.ethereum !== "undefined");
  }, []);

  return (
    <>
      {isLoading ? (
        <button disabled {...rest} className={clsx(buttonStyles, className)}>
          Loading...
        </button>
      ) : userAddress ? (
        <button {...rest} disabled className={clsx(buttonStyles, className)}>
          {`${userAddress.slice(0, 4)}..${userAddress.slice(38)}`}
        </button>
      ) : isEthereumAvailable ? (
        <button
          {...rest}
          onClick={connectWallet}
          className={clsx(buttonStyles, className)}
        >
          {children}
        </button>
      ) : (
        <button
          {...rest}
          onClick={() => {
            window.open("https://metamask.io/download.html", "_blank");
          }}
          className={clsx(buttonStyles, className)}
        >
          Install 🦊
        </button>
      )}
    </>
  );
}

export default ConnectButton;
