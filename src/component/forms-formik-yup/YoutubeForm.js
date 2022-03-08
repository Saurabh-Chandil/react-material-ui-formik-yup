import { Grid, Paper } from '@material-ui/core'
import React from 'react'
import './YoutubeForm.css'

function YoutubeForm() {
  return (
    <div>
        <Grid container className='grid-container' justifyContent="center" alignContent="center">
            <form>
                <Grid item className='form-div'>
                    <div className='label-div'>
                        <label htmlFor='name'>Name</label>
                        <label htmlFor='email'>E-mail</label>
                        <label htmlFor='channel'>Channel</label>
                    </div>

                    <div className='input-div'>
                        <input type='text' id='name' name='name'/>
                        <input type='text' id='email' name='email'/>
                        <input type='text' id='channel' name='channel'/>
                    </div>
                </Grid>
                
                <Grid item className='submit-btn-div'>
                    <button>Submit</button>
                </Grid>
            </form>            
        </Grid>
    </div>
  )
}

export default YoutubeForm