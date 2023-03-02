import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import axios from "axios";
import { AuthProvider } from "./context/auth.provider";

import { Provider } from "react-redux";
import { store } from "./redux";

{
	/* Base Url Of Every request */
}
axios.defaults.baseURL =
	"http://localhost:3000/api/v1/";

ReactDOM.createRoot(
	document.getElementById(
		"root"
	)
).render(
	<React.StrictMode>
		<Provider
			store={
				store
			}
		>
			<BrowserRouter>
				<AuthProvider>
					<App />
				</AuthProvider>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);
