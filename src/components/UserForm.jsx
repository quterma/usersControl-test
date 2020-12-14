import React from 'react'
import style from "./../css/UserForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { CustomInput, TextError } from "./CustomForms";
import { useDispatch } from 'react-redux';
import { updateUser, setMainMode } from '../redux/usersControlSlice';

const UserForm = ({ user }) => {
  const dispatch = useDispatch();

  const onHandleSubmit = (data) => {
		dispatch(updateUser(data));
		dispatch(setMainMode({ mode: "userPage" }));
  }

  const validationSchema = yup.object().shape({
    login: yup.string().min(5, "Too Short!").max(25, "Too Long!").required("Required!"),
    email: yup.string().email().required("Required!"),
    password: yup.string().min(8, "Too Short!").max(20, "Too Long!").matches(/[A-Za-z0-9]/, 'Password can only contain numbers, symbols and Latin letters.').required("Required!"),
    phone: yup.number().required("Required!"),
    firstName: yup.string().min(2, "Too Short!").max(16, "Too Long!").required("Required!"),
    secondName: yup.string().min(2, "Too Short!").max(16, "Too Long!"),
    lastName: yup.string().min(2, "Too Short!").max(16, "Too Long!").required("Required!"),
  });
  
  return (
    <div className={style.container}>
      
      <Formik initialValues={user} onSubmit={onHandleSubmit} validationSchema={validationSchema}>
        <Form>
          <Field name="login" placeholder="login..." component={CustomInput} />
          <ErrorMessage name="login" component={TextError} />
          <Field name="email" placeholder="email..." component={CustomInput} />
          <ErrorMessage name="email" component={TextError} />
          <Field name="password" placeholder="password..." component={CustomInput} />
          <ErrorMessage name="password" component={TextError} />
          <Field name="phone" placeholder="phone number..." component={CustomInput} />
          <ErrorMessage name="phone" component={TextError} />
          <Field name="firstName" placeholder="first name..." component={CustomInput} />
          <ErrorMessage name="firstName" component={TextError} />
          <Field name="secondName" placeholder="second name..." component={CustomInput} />
          <ErrorMessage name="secondName" component={TextError} />
          <Field name="lastName" placeholder="last name..." component={CustomInput} />
          <ErrorMessage name="lastName" component={TextError} />
          <button className={style.button} type="submit">Submit</button>
        </Form>
      </Formik>

    </div>
  );
}

export default UserForm;
