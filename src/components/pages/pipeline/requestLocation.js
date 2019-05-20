import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import styles from '../../../styles/pipeline/requestLocation.module.css';
import RequestLocationForm from './requestLocationForm';
import BreadcrumbComponent from '../../helpers/breadcrumb';

export const requestLocation = (props) => {
  if (props.pageInProgress < 0) {
    return <Redirect to="/pipeline/requestInformation" />;
  }
  return (
    <Grid
      md={9}
      lg={8}
      xl={7}
      alignItems="center"
      alignContent="center"
      justify="center"
      container
      spacing={24}
      className={styles.grid}
      verticalAlign="middle"
    >
      <Grid item sm={12} className={styles.breadRow}>
        <BreadcrumbComponent selection={props.pageInProgress} current={2} />
      </Grid>
      <Grid item xs={12} sm={10} md={9} lg={8} xl={7} className={styles.formRow}>
        <RequestLocationForm />
      </Grid>
    </Grid>
  );
};
requestLocation.propTypes = {
  pageInProgress: PropTypes.number,
};

requestLocation.defaultProps = {
  pageInProgress: 0,
  requestInProgress: 0,
  history: PropTypes.func,
};
export default requestLocation;
