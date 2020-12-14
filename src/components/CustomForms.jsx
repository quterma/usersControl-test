import React from "react";
import styles from "./../css/CustomForms.module.css";

export const TextError = props => {
	return <div className={styles.textError}>{props.children}</div>;
};

export const CustomInput = ({
	field, // { name, value, onChange, onBlur }
	form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
	...props
}) => (
	<div className={styles.inputWrapper}>
		<label className={styles.label}>
			<div className={styles.caption}>{field.name + ": "}</div>
			<input {...field} {...props} className={`${styles.input} ${touched[field.name] && errors[field.name] && styles.inputError}`} />
		</label>
	</div>
);
