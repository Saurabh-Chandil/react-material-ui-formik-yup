import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'
import './ReusableControl.css'

function FormikContainer() {
    const initialValues ={
        email: '',
        description: ''
    }
    const validationSchema = Yup.object({
        email: Yup.string().required('Required'),
        description: Yup.string().required('Required')
    })
    const onSubmit = (values) => {
        console.log('Form data : ', values)
    }
    return (
        <div>
            <Formik initialValues={initialValues} 
            validationSchema={validationSchema} onSubmit={onSubmit}>
                {
                    (formik) => {
                        return(
                            <Form className='form-div-one'>
                                
                                <FormikControl control='input' type='email' 
                                label='Email' name='email'/>
                                
                                <FormikControl control='textarea' label='Description' name='description'/>
                                <div>
                                    <button type='submit'>Submit</button>
                                </div> 
                            </Form>
                        )
                    } 
                }
            </Formik>
        </div>
    )
}

export default FormikContainer