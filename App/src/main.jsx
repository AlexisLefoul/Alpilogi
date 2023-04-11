import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import "../src/style/index.css";
import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    2: "#C67430",
    1: "#497174",
    3: "#D6E4E5",
    4: "#EFF5F5",
  },
  black: "#303030",
};

const fonts = {
  body: "Roboto, sans-serif",
  heading: "DIN Alternate Bold, sans-serif",
};

const theme = extendTheme({ colors, fonts });

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
