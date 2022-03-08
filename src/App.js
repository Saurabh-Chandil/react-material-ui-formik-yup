import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import { Checkbox } from '@material-ui/core'
import { FormControlLabel, TextField } from '@material-ui/core';
import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core/styles'
import { blue, green, orange } from '@material-ui/core/colors';
import MyContainer from './component/MyContainer';
import YoutubeForm from './component/forms-formik-yup/YoutubeForm';

const useStyles = makeStyles({
  root: {
    color: 'green'
  }
})

function ButtonStyled() {
  const classes = useStyles()
  return <Button className={classes.root}>Stooyle</Button>
}

function CheckboxExample() {
  return (
    <div>
      <FormControlLabel 
      control={<Checkbox 
        icon={<DeleteIcon/>}
        checkedIcon={<SaveIcon />}
        color='primary'/>} 
      label='Allow' />
    </div>
  )
}

const theme = createTheme({
  palette: {
    primary: {
      main: orange[500]
    }
  }
});

function App() {
  return (
        <div className="App">
          <YoutubeForm />



        {/* <header className="App-header"> */}
          {/* <ButtonStyled /> */}
          {/* <TextField />
          <CheckboxExample /> */}
          { /* <MyContainer />
          <ButtonGroup>
            <Button 
            startIcon={<SaveIcon />} variant="contained" color="primary"
            size='large'style={{fontSize: 18, backgroundColor: 'blue'}}
            onClick={() => alert('I am Saurabh')}>Save</Button>

            <Button 
            startIcon={<DeleteIcon />} variant="contained" color="secondary"
            size='large'style={{fontSize: 18}}
            onClick={() => alert('I am Saurabh')}>Discard</Button>
          </ButtonGroup> */}
        {/* <img src={logo} className="App-logo" alt="logo" />
      </header> */}
    </div>      
  );
}

export default App;
