import React from "react";
import { AppBar, Typography, Toolbar, Tab } from "@material-ui/core";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import { fade, makeStyles, useTheme } from "@material-ui/styles";
import SwipeableViews from 'react-swipeable-views';
import Blog from './Blog'
import Projects from './Projects'
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  appbar: {
    alignItems: "center",
    background: "#1D2D40"
  },
  logo: {
    fontSize: 24,
    padding: 8,
  },
  tab: {
    fontSize: 24
  },
}));

const TopBar = props => {
  const classes = useStyles();
  const { title, sections } = props;
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <TabContext value={value}> 
        <AppBar position="sticky" className={classes.appbar}> 
          <TabList onChange={handleChange}  aria-label="simple tabs example">
            {sections.map((section, key) => {
              return <Tab label={section} key={key} value={section} />;
            })}
          </TabList>
        </AppBar>
 
        <TabPanel value="Home"  >1</TabPanel>
        <TabPanel value="Blog"  ><Blog/></TabPanel>
        <TabPanel value="Projects"  ><Projects/></TabPanel>
        <TabPanel value="About" >4</TabPanel>

        {/* {sections.map((section, key) => {
          return (
            <TabPanel value={key} key={key}>{key}</TabPanel>
          );
        })} */}
      </TabContext>
    </div>
  );
};

export default TopBar;
