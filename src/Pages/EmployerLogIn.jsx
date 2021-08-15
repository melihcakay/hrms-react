import React from 'react'
import { Formik } from "formik";
import * as Yup from "yup";
import "./Form.css"

export default function EmployerLogIn() {
    return (
        <div className="form">
            <Formik
            initialValues={{
                companyName: "",
                websiteAddress: "",
                phoneNumber: "",
                email: "",
                password: ""
            }}
            validationSchema={
                Yup.object({
                    companyName: Yup.string().required("Şirket İsmi Boş Bırakılamaz.."),
                    websiteAddress: Yup.string().required("Website Adresi Boş Bırakılamaz."),
                    phoneNumber: Yup.string().required("Telefon Numarası Boş Bırakılamaz."),
                    email: Yup.string().email().required("Email Boş Bırakılamaz."),
                    password: Yup.string().required("Şifre Boş Bırakılamaz.")
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
                        <h3>Giriş Yap</h3>
                        <label htmlFor="companyName">Şirket İsmi</label>
                        <input id="companyName"
                        type="text" 
                        className="input" 
                        value={values.companyName} 
                        onChange={handleChange}
                        />

                        {
                            errors.companyName && touched.companyName && (
                                <div className="input-feedback">
                                    {errors.companyName}
                                </div>
                            )
                        }

                        <label htmlFor="websiteAddress">Website Adresi</label>
                        <input id="websiteAddress"
                        type="text" 
                        className="input" 
                        value={values.websiteAddress} 
                        onChange={handleChange}
                        />

                        {
                            errors.websiteAddress && touched.websiteAddress && (
                                <div className="input-feedback">
                                    {errors.websiteAddress}
                                </div>
                            )
                        }



                        <label htmlFor="phoneNumber">Telefon Numarası</label>
                        <input id="phoneNumber"
                        type="text" 
                        className="input" 
                        value={values.phoneNumber} 
                        onChange={handleChange}
                        />

                        {
                            errors.phoneNumber && touched.phoneNumber && (
                                <div className="input-feedback">
                                    {errors.phoneNumber}
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

                        <button type="submit" disabled={!dirty || isSubmitting}>Giriş Yap</button>


                    </form>
                )
            }
            

             </Formik>


        </div>
    )
}
