import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import ParameterInput from './ParameterInput';
import InfoIcon from '@material-ui/icons/Info';
import { setRegionalPopulation, resetParams } from '../redux/actions';

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
        <Typography>CHIME <a href="https://github.com/CodeForPhilly/chime/releases/tag/v1.1.1">v1.1.2</a> (2020-04-01)</Typography>
      </div>
      <Divider />
        <Typography variant="subtitle1">
          Hospital Parameters
          <a href="https://code-for-philly.gitbook.io/chime/what-is-chime/parameters#hospital-parameters" target="_blank" rel="noopener noreferrer">
            <InfoIcon fontSize="small"/>
          </a>
          </Typography>
        <ParameterInput 
          id="regional-population" 
          label="Regional Population"
          defaultValue={props.regionalPopulation}
          onInputChange={ e => props.setRegionalPopulation(e.target.value)} 
        />
        <ParameterInput 
          id="hospital-market" 
          label="Hospital Market Share (%)"
          defaultValue={props.hospitalMarket} 
        />
        <ParameterInput 
          id="current-covid-patients" 
          label="Currently Hospitalized COVID-19 Patients"
          defaultValue={props.currentPatients} 
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
        defaultValue={props.doublingTime} 
      />
      <ParameterInput 
        id="social-distancing" 
        label="Social distancing (% reduction in social contact going forward"
        defaultValue={props.socialDistancing} 
      />
      <Button onClick={e => { props.resetParams(e) }}>Reset</Button>
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


export default connect(mapStateToProps, { setRegionalPopulation, resetParams })(ParameterSidebar);
