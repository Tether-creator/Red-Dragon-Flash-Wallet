document.getElementById("connectWallet").addEventListener("click", async () => {
  if (typeof window.ethereum !== "undefined") {
    try {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      alert(Wallet connected: ${accounts[0]});
    } catch (error) {
      alert("Connection failed.");
    }
  } else {
    alert("Please install a Web3 wallet like MetaMask or Trust Wallet.");
  }
});
