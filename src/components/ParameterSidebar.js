import { resetParams, setCurrentPatients, setDoublingTime, setHospitalMarket, setRegionalPopulation, setSocialDistancing } from '../redux/actions';

import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import InfoIcon from '@material-ui/icons/Info';
import ParameterInput from './ParameterInput';
import React from 'react';
import Typography from '@material-ui/core/Typography'
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    padding: '0 10px',
  },
  toolbar: theme.mixins.toolbar,
  sidebarHeader: {
    marginTop: '20px',
  }
}));

const ParameterSidebar = (props) => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      anchor="left"
      classes={{ paper: classes.drawerPaper }}
    >
      <div className={classes.toolbar}>
        <Typography align={"center"} className={classes.sidebarHeader}>CHIME <a href="https://github.com/CodeForPhilly/chime/releases/tag/v1.1.1">v1.1.2</a> (2020-04-01)</Typography>
      </div>
      <Divider />
      <Typography variant="subtitle1">
        Hospital Parameters
          <a href="https://code-for-philly.gitbook.io/chime/what-is-chime/parameters#hospital-parameters" target="_blank" rel="noopener noreferrer">
          <InfoIcon fontSize="small" />
        </a>
      </Typography>
      <ParameterInput
        id="regional-population"
        label="Regional Population"
        value={props.regionalPopulation}
        minValue={1}
        onInputChange={props.setRegionalPopulation}
      />
      <ParameterInput
        id="hospital-market"
        label="Hospital Market Share (%)"
        value={props.hospitalMarket}
        minValue={0.001}
        maxValue={100.0}
        onInputChange={props.setHospitalMarket}
      />
      <ParameterInput
        id="current-covid-patients"
        label="Currently Hospitalized COVID-19 Patients"
        value={props.currentPatients}
        minValue={0}
        onInputChange={props.setCurrentPatients}
      />
      <Divider />
      <Typography variant="subtitle1">
        Spread and Contact Parameters
        <a href="https://code-for-philly.gitbook.io/chime/what-is-chime/parameters#spread-and-contact-parameters" target="_blank" rel="noopener noreferrer">
          <InfoIcon fontSize="small" />
        </a>
      </Typography>
      <ParameterInput
        id="doubling-time"
        label="Doubling time in days (up to today)"
        value={props.doublingTime}
        minValue={0}
        onInputChange={props.setDoublingTime}
      />
      <ParameterInput
        id="social-distancing"
        label="Social distancing (% reduction in social contact going forward"
        value={props.socialDistancing}
        minValue={0}
        maxValue={100}
        onInputChange={props.setSocialDistancing}
      />
      <Button onClick={() => props.resetParams()}>Reset</Button>
    </Drawer>
  )
}

const mapStateToProps = state => {
  return {
    regionalPopulation: state.regionalPopulation,
    hospitalMarket: state.hospitalMarket,
    currentPatients: state.currentPatients,
    doublingTime: state.doublingTime,
    socialDistancing: state.socialDistancing
  }
}


export default connect(mapStateToProps, { setRegionalPopulation, setHospitalMarket, setCurrentPatients, setDoublingTime, setSocialDistancing, resetParams })(ParameterSidebar);
