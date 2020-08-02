import React from "react";
import TopBar from './components/TopBar'
import Main from './components/Main'
import NewApp from './components/NewApp'
import Footer from './components/Footer'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles({
  root:{
    background: '#1B2A40',
  }

})

export default function App() {     

  const classes = useStyles()

  return (
     <div className={classes.root}>
      <NewApp/>
      <Main/>
      <Footer/>
     </div>
   
  );
}


