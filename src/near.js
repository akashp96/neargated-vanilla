import ToggleWindow from "./components/mainDiv.js";

const CONTRACT_NAME = "rtb_v10.liv1.testnet";
const testnetserver = "https://rpc.testnet.near.org";

const NearLoad = (Bot) => {
  function getConfig() {
    return {
      keyStore: new nearApi.keyStores.BrowserLocalStorageKeyStore(),
      networkId: "testnet",
      contractName: CONTRACT_NAME,
      nodeUrl: testnetserver,
      walletUrl: "https://wallet.testnet.near.org",
      helperUrl: "https://helper.testnet.near.org",
      explorerUrl: "https://explorer.testnet.near.org",
    };
  }

  function getMethods() {
    return {
      viewMethods: ["view_accounts_info"],
      changeMethods: ["init"],
    };
  }

  async function initContract() {
    const nearConfig = getConfig();
    //const nearMethods = getMethods();

    // Initializing connection to the NEAR testnet
    const near = await nearApi.connect({
      deps: {
        keyStore: new nearApi.keyStores.BrowserLocalStorageKeyStore(),
      },
      ...nearConfig,
    });

    // Needed to access wallet
    const wallet = new nearApi.WalletConnection(near);

    // Load in account data
    let currentAccount;
    if (wallet.getAccountId()) {
      currentAccount = {
        accountId: wallet.getAccountId(),
        balance: (await wallet.account().state()).amount,
        lockedBalance: (await wallet.account().state()).locked,
      };
    }

    // Initializing our contract APIs by contract name and configuration
    const contract = await new nearApi.Contract(
      wallet.account(),
      nearConfig.contractName,
      getMethods()
    );

    return { contract, currentAccount, nearConfig, wallet };
  }

  window.nearInitPromise = initContract().then(
    ({ contract, currentAccount, nearConfig, wallet }) => {
      // console.log("contract ->", contract);
      // console.log("currentAccount ->", currentAccount);
      // console.log("nearConfig ->", nearConfig);
      // console.log("wallet ->", wallet);

      if (!wallet.isSignedIn()) {
        ToggleWindow(false, wallet, currentAccount, Bot);
      } else {
        ToggleWindow(true, wallet, currentAccount, Bot);
      }
    }
  );
};

export default NearLoad;
