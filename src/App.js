import { Header } from "antd/lib/layout/layout";
import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
	return (
		<div className="wrapper">
			<Header />
			<Main />
		</div>
	);
}

export default App;
