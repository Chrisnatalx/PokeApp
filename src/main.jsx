import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { ContextProvider } from "./Context/ContextProvider";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ContextProvider>
			<ChakraProvider>
				<App />
			</ChakraProvider>
		</ContextProvider>
	</React.StrictMode>
);
