import React from "react";
import style from "./css/App.module.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
	return (
		<div className={style.container}>
			<Header />
			<Main />
		</div>
	);
}

export default App;
