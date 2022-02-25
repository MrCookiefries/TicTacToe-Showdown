import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<CssBaseline />
			<AppRoutes />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
