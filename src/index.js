import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { asyncWithLDProvider } from "launchdarkly-react-client-sdk";
import { deviceType, osName, browserName  } from "react-device-detect";
import getUserId from "./util/getUserId";

const CLIENTKEY = "6565b8f102edff1306dae51d";


let id = getUserId();

(async () => {
  const LDProvider = await asyncWithLDProvider({
    clientSideID: CLIENTKEY,
    context: {
      kind: "device",
      key: id,
      device: deviceType,
      operatingSystem: osName,
      browserName: browserName
      }
  });

  ReactDOM.render(
    <LDProvider>
      <App />
    </LDProvider>,
    document.getElementById("root")
  );
})();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
