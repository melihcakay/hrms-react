import React from 'react'
import { Formik } from "formik";
import * as Yup from "yup";
import "./Form.css"


export default function CandidateRegister() {
    return (
        <div className="form">
            <Formik
            initialValues={{
                nationalIdentity: "",
                firstName: "",
                lastName: "",
                dateOfBirth: "",
                email: "",
                emailAgain: "",
                password: "",
                passwordAgain: ""
            }}
            validationSchema={
                Yup.object({
                    nationalIdentity: Yup.string().required("TC Kimlik Numarası Boş Bırakılamaz."),
                    firstName: Yup.string().required("İsim Boş Bırakılamaz."),
                    lastName: Yup.string().required("Soyisim Boş Bırakılamaz."),
                    dateOfBirth: Yup.date().required("Doğum Tarihi Boş Bırakılamaz."),
                    email: Yup.string().email().required("Email Boş Bırakılamaz."),
                    emailAgain: Yup.string().email().required("Emailinizi Tekrar Giriniz."),
                    password: Yup.string().required("Şifre Boş Bırakılamaz."),
                    passwordAgain: Yup.string().required("Şifrenizi Tekrar Giriniz.")
                })
            }

            onSubmit={(values, {resetForm, setSubmitting}) => {
                console.log(values)
                setTimeout(() => {
                    resetForm()
                    setSubmitting(false)
                }, 2000)
            }
        }

             >
            {
                ({values, errors, handleSubmit, handleReset, handleChange, dirty, isSubmitting, touched}) => (
                    <form onSubmit={handleSubmit}>
                        <h3>Kayıt Ol</h3>
                        <label htmlFor="nationaldentity">TC Kimlik Numarası</label>
                        <input id="nationalIdentity"
                        type="text" 
                        className="input" 
                        value={values.nationalIdentity} 
                        onChange={handleChange}
                        />

                        {
                            errors.nationalIdentity && touched.nationalIdentity && (
                                <div className="input-feedback">
                                    {errors.nationalIdentity}
                                </div>
                            )
                        }

                        <label htmlFor="firstName">İsim</label>
                        <input id="firstName"
                        type="text" 
                        className="input" 
                        value={values.firstName} 
                        onChange={handleChange}
                        />

                        {
                            errors.firstName && touched.firstName && (
                                <div className="input-feedback">
                                    {errors.firstName}
                                </div>
                            )
                        }



                        <label htmlFor="lastName">Soyisim</label>
                        <input id="lastName"
                        type="text" 
                        className="input" 
                        value={values.lastName} 
                        onChange={handleChange}
                        />

                        {
                            errors.lastName && touched.lastName && (
                                <div className="input-feedback">
                                    {errors.lastName}
                                </div>
                            )
                        }


                        <label htmlFor="dateOfBirth">Doğum Tarihi</label>
                        <input id="dateOfBirth"
                        type="date" 
                        className="input" 
                        value={values.dateOfBirth} 
                        onChange={handleChange}
                        />

                        {
                            errors.dateOfBirth && touched.dateOfBirth && (
                                <div className="input-feedback">
                                    {errors.dateOfBirth}
                                </div>
                            )
                        }


                        <label htmlFor="email">Email</label>
                        <input id="email"
                        type="email" 
                        className="input" 
                        value={values.email} 
                        onChange={handleChange}
                        />

                        {
                            errors.email && touched.email && (
                                <div className="input-feedback">
                                    {errors.email}
                                </div>
                            )
                        }

                        <label htmlFor="emailAgain">Email Tekrarı</label>
                        <input id="emailAgain"
                        type="email" 
                        className="input" 
                        value={values.emailAgain} 
                        onChange={handleChange}
                        />

                        {
                            errors.emailAgain && touched.emailAgain && (
                                <div className="input-feedback">
                                    {errors.emailAgain}
                                </div>
                            )
                        }



                        <label htmlFor="password">Şifre</label>
                        <input id="password"
                        type="password" 
                        className="input" 
                        value={values.password} 
                        onChange={handleChange}
                        />

                        {
                            errors.password && touched.password && (
                                <div className="input-feedback">
                                    {errors.password}
                                </div>
                            )
                        }

                        <label htmlFor="passwordAgain">Şifre Tekrarı</label>
                        <input id="passwordAgain"
                        type="password" 
                        className="input" 
                        value={values.passwordAgain} 
                        onChange={handleChange}
                        />

                        {
                            errors.passwordAgain && touched.passwordAgain && (
                                <div className="input-feedback">
                                    {errors.passwordAgain}
                                </div>
                            )
                        }



                        <button type="submit" disabled={!dirty || isSubmitting}>Kayıt Ol</button>


                    </form>
                )
            }
            

             </Formik>


        </div>
    )
}
