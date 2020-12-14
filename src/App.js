import React from "react";
import style from "./css/App.module.css";
import Header from "./components/Header";
import Main from "./components/Main";

import { useSelector } from "react-redux";
import { selectMainMode } from "./redux/usersControlSlice";

function App() {
	const mainMode = useSelector(selectMainMode);

	return (
		<div className={style.container}>
			<Header mainMode={mainMode} />
			<Main mainMode={mainMode} />
		</div>
	);
}

export default App;
