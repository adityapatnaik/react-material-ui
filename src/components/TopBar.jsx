import React from "react";
import { AppBar, Typography, Toolbar, Grid,Tab,Tabs,Paper} from "@material-ui/core";
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import { makeStyles } from "@material-ui/styles";


const useStyles = makeStyles((theme)=>({
  root: {
    flexGrow: 1,
  },
  appbar: {
    alignItems: "center",
    background: '#1D2D40',
  }
}));

const TopBar = (props) => {
  const classes = useStyles();
  const {title,sections} = props;
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <div className={classes.root}>
    <TabContext value={value}>
      <AppBar position="static" className={classes.appbar}>
        <TabList onChange={handleChange} aria-label="simple tabs example">
          {
            sections.map((section,key)=>{
              return <Tab label={section} value={section} />
            })
          }
        </TabList>
      </AppBar>
      {
          sections.map((section,key)=>{
              return  <TabPanel value={section}>{key+1}</TabPanel>
            })
          }
    </TabContext>
  </div>

  );
};



export default TopBar;

