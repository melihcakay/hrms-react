import React from 'react'
import { Formik } from "formik";
import * as Yup from "yup";
import "./Form.css"

export default function CreateJobAdvertisement() {
    return (
        <div className="form">
        <Formik
        initialValues={{
            city: "",
            companySector: "",
            positionLevel: "",
            department: "",
            employmentType: "",
            jobTitle: "",
            jobExplanation: "",
            minWage: "",
            maxWage: "",
            amountOfPositions: "",
            applicationDeadline: ""
        }}
        validationSchema={
            Yup.object({
                city: Yup.string().required("Şehir Adı Seçiniz."),
                companySector: Yup.string().required("Şirket Sektörünü Seçiniz."),
                positionLevel: Yup.string().required("Pozisyon Seviyesi Seçiniz."),
                department: Yup.string().required("Departman Seçiniz."),
                jobTitle: Yup.string().required("İş Seçiniz."),
                jobExplanation: Yup.string().required("İş Açıklaması Boş Bırakılamaz."),
                minWage: Yup.number().required("Asgari Ücret Giriniz."),
                maxWage: Yup.number().required("Azami Ücret Giriniz."),
                amountOfPositions: Yup.number().required("Açık Pozisyon Sayısını Giriniz."),
                applicationDeadline: Yup.date().required("Son Başvuru Tarihini Giriniz.")
 
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
                    <h3>İş İlanı Oluştur</h3>
                    
                    <label htmlFor="city">Şehir</label>
                    <input id="city"
                    type="text"
                    className="input" 
                    value={values.city} 
                    onChange={handleChange}
                    />

                    {
                        errors.city && touched.city && (
                            <div className="input-feedback">
                                {errors.city}
                            </div>
                        )
                    }

                    <label htmlFor="companySector">Şirketin Sektörü</label>
                    <input id="companySector"
                    type="text" 
                    className="input" 
                    value={values.companySector} 
                    onChange={handleChange}
                    />

                    {
                        errors.companySector && touched.companySector && (
                            <div className="input-feedback">
                                {errors.companySector}
                            </div>
                        )
                    }

                   
                    <label htmlFor="positionLevel">Pozisyon Seviyesi</label>
                    <input id="positionLevel"
                    type="text" 
                    className="input" 
                    value={values.positionLevel} 
                    onChange={handleChange}
                    />

                    {
                        errors.positionLevel && touched.positionLevel && (
                            <div className="input-feedback">
                                {errors.positionLevel}
                            </div>
                        )
                    }

                    <label htmlFor="department">Departman</label>
                    <input id="department"
                    type="text" 
                    className="input" 
                    value={values.department} 
                    onChange={handleChange}
                    />

                    {
                        errors.department && touched.department && (
                            <div className="input-feedback">
                                {errors.department}
                            </div>
                        )
                    }

                    <label htmlFor="jobTitle">İş</label>
                    <input id="jobTitle"
                    type="text" 
                    className="input" 
                    value={values.jobTitle} 
                    onChange={handleChange}
                    />

                    {
                        errors.jobTitle && touched.jobTitle && (
                            <div className="input-feedback">
                                {errors.jobTitle}
                            </div>
                        )
                    }

                    <label htmlFor="jobExplanation">İş Açıklaması</label>
                    <input id="jobExplanation"
                    type="text" 
                    className="input" 
                    value={values.jobExplanation} 
                    onChange={handleChange}
                    />

                    {
                        errors.jobExplanation && touched.jobExplanation && (
                            <div className="input-feedback">
                                {errors.jobExplanation}
                            </div>
                        )
                    }

                    <label htmlFor="minWage">Asgari Ücret</label>
                    <input id="minWage"
                    type="number" 
                    className="input" 
                    value={values.minWage} 
                    onChange={handleChange}
                    />

                    {
                        errors.minWage && touched.minWage && (
                            <div className="input-feedback">
                                {errors.minWage}
                            </div>
                        )
                    }

                    <label htmlFor="maxWage">Azami Ücret</label>
                    <input id="maxWage"
                    type="number" 
                    className="input" 
                    value={values.maxWage} 
                    onChange={handleChange}
                    />

                    {
                        errors.maxWage && touched.maxWage&& (
                            <div className="input-feedback">
                                {errors.maxWage}
                            </div>
                        )
                    }

                    <label htmlFor="amountOfPositions">Açık Pozisyon Sayısı</label>
                    <input id="amountOfPositions"
                    type="number" 
                    className="input" 
                    value={values.amountOfPositions} 
                    onChange={handleChange}
                    />

                    {
                        errors.amountOfPositions && touched.amountOfPositions && (
                            <div className="input-feedback">
                                {errors.amountOfPositions}
                            </div>
                        )
                    }

                    <label htmlFor="applicationDeadline">Son Başvuru Tarihi</label>
                    <input id="applicationDeadline"
                    type="date" 
                    className="input" 
                    value={values.applicationDeadline} 
                    onChange={handleChange}
                    />

                    {
                        errors.applicationDeadline && touched.applicationDeadline&& (
                            <div className="input-feedback">
                                {errors.applicationDeadline}
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
