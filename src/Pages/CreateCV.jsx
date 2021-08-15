import React from 'react'
import { Formik } from "formik";
import * as Yup from "yup";
import "./Form.css"

export default function CreateCV() {
    return (
        <div className="form">
        <Formik
        initialValues={{
            photo: "",
            githubLink: "",
            linkedLink: "",
            coverLetter: "",
            schools: "",
            jobExperiences: "",
            technologies: "",
            languages: "",
        }}
        validationSchema={
            Yup.object({
                photo: Yup.string().required("Fotoğraf YÜkleyiniz."),
                githubLink: Yup.string().required("Github Linkinizi Giriniz.."),
                linkedLink: Yup.string().required("LinkedIn Linkinizi Giriniz."),
                coverLetter: Yup.string().required("Ön Yazı Giriniz."),
                schools: Yup.string().required("Okul Seçiniz."),
                jobExperiences: Yup.string().required("İş Tecrübesi Seçiniz."),
                technologies: Yup.string().required("Teknoloji Seçiniz."),
                languages: Yup.string().required("Dil Seçiniz.")
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
                    <h3>Özgeçmiş Oluştur</h3>
                    
                    <label htmlFor="photo">Fotoğraf</label>
                    <input id="photo"
                    type="text"
                    className="input" 
                    value={values.photo} 
                    onChange={handleChange}
                    />

                    {
                        errors.photo && touched.photo && (
                            <div className="input-feedback">
                                {errors.photo}
                            </div>
                        )
                    }

                    <label htmlFor="githubLink">Github Linki</label>
                    <input id="githubLink"
                    type="text" 
                    className="input" 
                    value={values.githubLink} 
                    onChange={handleChange}
                    />

                    {
                        errors.githubLink && touched.githubLink && (
                            <div className="input-feedback">
                                {errors.githubLink}
                            </div>
                        )
                    }

                   
                    <label htmlFor="linkedLink">LinkedIn Linki</label>
                    <input id="linkedLink"
                    type="text" 
                    className="input" 
                    value={values.linkedLink} 
                    onChange={handleChange}
                    />

                    {
                        errors.linkedLink && touched.linkedLink && (
                            <div className="input-feedback">
                                {errors.linkedLink}
                            </div>
                        )
                    }

                    <label htmlFor="coverLetter">Ön Yazı</label>
                    <input id="coverLetter"
                    type="text" 
                    className="input" 
                    value={values.coverLetter} 
                    onChange={handleChange}
                    />

                    {
                        errors.coverLetter && touched.coverLetter && (
                            <div className="input-feedback">
                                {errors.coverLetter}
                            </div>
                        )
                    }

                    <label htmlFor="schools">Okullar</label>
                    <input id="schools"
                    type="text" 
                    className="input" 
                    value={values.schools} 
                    onChange={handleChange}
                    />

                    {
                        errors.schools && touched.schools && (
                            <div className="input-feedback">
                                {errors.schools}
                            </div>
                        )
                    }

                    <label htmlFor="jobExperiences">İş Tecrübeleri</label>
                    <input id="jobExperiences"
                    type="text" 
                    className="input" 
                    value={values.jobExperiences} 
                    onChange={handleChange}
                    />

                    {
                        errors.jobExperiences && touched.jobExperiences && (
                            <div className="input-feedback">
                                {errors.jobExperiences}
                            </div>
                        )
                    }

                    <label htmlFor="technologies">Teknolojiler</label>
                    <input id="technologies"
                    type="text" 
                    className="input" 
                    value={values.technologies} 
                    onChange={handleChange}
                    />

                    {
                        errors.technologies && touched.technologies && (
                            <div className="input-feedback">
                                {errors.technologies}
                            </div>
                        )
                    }

                    <label htmlFor="languages">Diller</label>
                    <input id="languages"
                    type="text" 
                    className="input" 
                    value={values.languages} 
                    onChange={handleChange}
                    />

                    {
                        errors.languages && touched.languages && (
                            <div className="input-feedback">
                                {errors.languages}
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
