import React from 'react'
import { Formik } from "formik";
import * as Yup from "yup";
import "./Form.css"

export default function EmployeeLogin() {
    return (
        <div className="form">
        <Formik
        initialValues={{
            email: "",
            password: ""
        }}
        validationSchema={
            Yup.object({
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
