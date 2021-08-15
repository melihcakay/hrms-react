import React from 'react'
import { Formik } from "formik";
import * as Yup from "yup";
import "./Form.css"

export default function CreateJobExperience() {
    return (
        <div className="form">
        <Formik
        initialValues={{
            workplaceName: "",
            position: "",
            startDate: "",
            endDate: ""
        }}
        validationSchema={
            Yup.object({
                workplaceName: Yup.string().required("İş Yeri Adı Boş Bırakılamaz."),
                position: Yup.string().required("Pozisyon Boş Bırakılamaz."),
                startDate: Yup.date().required("Başlama Tarihi Giriniz."),
                endDate: Yup.date().required("Bitiş Tarihi Giriniz.")
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
                    <h3>İş Deneyimi Oluştur</h3>
                    
                    <label htmlFor="workplaceName">İş Yeri Adı</label>
                    <input id="workplaceName"
                    type="text" 
                    className="input" 
                    value={values.workplaceName} 
                    onChange={handleChange}
                    />

                    {
                        errors.workplaceName && touched.workplaceName && (
                            <div className="input-feedback">
                                {errors.workplaceName}
                            </div>
                        )
                    }

                    <label htmlFor="position">Pozisyon</label>
                    <input id="position"
                    type="text" 
                    className="input" 
                    value={values.position} 
                    onChange={handleChange}
                    />

                    {
                        errors.position && touched.position && (
                            <div className="input-feedback">
                                {errors.position}
                            </div>
                        )
                    }

                   
                    <label htmlFor="startDate">Başlama Tarihi</label>
                    <input id="startDate"
                    type="date" 
                    className="input" 
                    value={values.startDate} 
                    onChange={handleChange}
                    />

                    {
                        errors.startDate && touched.startDate && (
                            <div className="input-feedback">
                                {errors.startDate}
                            </div>
                        )
                    }

                    <label htmlFor="endDate">Bitiş Tarihi</label>
                    <input id="endDate"
                    type="date" 
                    className="input" 
                    value={values.endDate} 
                    onChange={handleChange}
                    />

                    {
                        errors.endDate && touched.endDate && (
                            <div className="input-feedback">
                                {errors.endDate}
                            </div>
                        )
                    }

                    <button type="submit" disabled={!dirty || isSubmitting}>Oluştur</button>


                </form>
            )
        }
        

         </Formik>


    </div>
    )
}
