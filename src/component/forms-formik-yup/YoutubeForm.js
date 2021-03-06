import { Grid, Paper } from '@material-ui/core'
import React from 'react'
import './YoutubeForm.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'

function YoutubeForm() {
    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        channel: Yup.string().required('Required')
    })

    const formik = useFormik({
        initialValues: {
            name: 'SA',
            email: '',
            channel: ''
        },
        // validate: (values) => {
        //     let errors = {}
        //     if(!values.name) errors.name = 'Required'
            
        //     if(!values.email) errors.email = 'Required'
        //     if (!/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(values.email)) errors.email='Invalid email format'
            
        //     if(!values.channel) errors.channel = 'Required'
        //     return errors
        // },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log('form data : ', values)
        }
    })

    console.log('Formik error : ', formik.errors)
    /**
     * There is 4 components of formik for code refactoring
     *  - Formik
     *  - Form
     *  - Field
     *  - Error
     */
    return (
        <div>
            <Grid container className='grid-container' justifyContent="center" alignContent="center">
                <form onSubmit={formik.handleSubmit}>
                    <Grid item className='form-div'>
                        <div className='label-div'>
                            <label htmlFor='name'>Name</label>
                            <label htmlFor='email'>E-mail</label>
                            <label htmlFor='channel'>Channel</label>
                        </div>

                        <div className='input-div'>
                            <div className='form-control'>
                                <input type='text' id='name' name='name' 
                                // onChange={formik.handleChange} 
                                // value={formik.values.name}
                                // onBlur={formik.handleBlur} 
                                {...formik.getFieldProps('name')}/>
                                {formik.touched.name && formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}
                            </div>

                            <div className='form-control'>
                                <input type='text' id='email' name='email'
                                // onChange={formik.handleChange} 
                                // value={formik.values.email} 
                                // onBlur={formik.handleBlur} 
                                {...formik.getFieldProps('email')} placeholder={'email'}/>
                                {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
                            </div>

                            <div className='form-control'>
                                <input type='text' id='channel' name='channel'
                                // onChange={formik.handleChange} 
                                // value={formik.values.channel}
                                // onBlur={formik.handleBlur} 
                                {...formik.getFieldProps('channel')}/>
                                {formik.touched.channel && formik.errors.channel ? <div className='error'>{formik.errors.channel}</div> : null}
                            </div>
                        </div>
                    </Grid>
                    
                    <Grid item className='submit-btn-div'>
                        <button type='submit'>Submit</button>
                    </Grid>
                </form>            
            </Grid>
        </div>
    )
}

export default YoutubeForm