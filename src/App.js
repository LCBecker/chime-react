import React from 'react';
import { connect } from 'react-redux';
import ParameterSidebar from './components/ParameterSidebar';
import { makeStyles, CssBaseline, Typography, AppBar, Toolbar } from '@material-ui/core';
import LineGraph from './components/LineGraph';

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

function App(props) {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
          Penn Medicine COVID-19 Hospital Impact Model for Epidemics (CHIME)
          </Typography>
        </Toolbar>
      </AppBar>
      <ParameterSidebar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
        This tool was developed by the Predictive Healthcare team at Penn Medicine 
        to assist hospitals and public health officials with hospital capacity planning.
        </Typography>
        <Typography paragraph>
        Notice: There is a high degree of uncertainty about the details of COVID-19 infection, 
        transmission, and the effectiveness of social distancing measures. Long-term projections 
        made using this simplified model of outbreak progression should be treated with extreme caution.
        </Typography>
        <Typography paragraph>
          The estimated number of currently infected individuals is {props.infected}. This is based on current inputs for 
  Hospitalizations ({props.currentPatients}), Hospitalization rate ({props.doublingTime}%), Region size ({props.regionalPopulation}), and Hospital market share ({props.hospitalMarket}%).
        </Typography>
        <LineGraph />
      </main>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    regionalPopulation: state.regionalPopulation,
    hospitalMarket: state.hospitalMarket,
    currentPatients: state.currentPatients,
    doublingTime: state.doublingTime,
    socialDistancing: state.socialDistancing,
    infected: state.infected
  }
}

export default connect(mapStateToProps)(App);
