import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Header, Segment } from 'semantic-ui-react';
import RequestOptionComponent from '../../helpers/RequestOption';
import BreadcrumbComponent from '../../helpers/breadcrumb';
import Styles from '../../../styles/pipeline/requestSelection';
import mower from '../../../images/pipeline/mower.png';
import rake from '../../../images/pipeline/rake.png';
import snowBlower from '../../../images/pipeline/snowBlower.png';
import custom from '../../../images/pipeline/custom.png';

export const requestSelection = props => (
  <Grid container style={Styles.grid} verticalAlign="middle">
    <Grid.Row style={Styles.breadrow}>
      <Segment style={Styles.segment}>
        <BreadcrumbComponent selection={props.pageInProgress} current={0} />
      </Segment>
    </Grid.Row>
    <Segment style={Styles.segment}>
      <Header as="h2">
        Choose Your Service
        <Header.Subheader>Choose a Service for someone to perform</Header.Subheader>
      </Header>
    </Segment>
    <Segment style={Styles.buttonSegment}>
      <RequestOptionComponent
        style={Styles.buttonComponent}
        imageURL={mower}
        title="Lawn Mowing"
        onClick={() => {
          props.requestInProgress(1);
          props.setTypeOfRequest('Lawn Mowing');
        }}
      />
    </Segment>
    <Segment style={Styles.buttonSegment}>
      <RequestOptionComponent
        style={Styles.buttonComponent}
        imageURL={rake}
        title="Leaf Raking"
        onClick={() => {
          props.requestInProgress(1);
          props.setTypeOfRequest('Leaf Raking');
        }}
      />
    </Segment>
    <Segment style={Styles.buttonSegment}>
      <RequestOptionComponent
        style={Styles.buttonComponent}
        imageURL={snowBlower}
        title="Snow Clearing"
        onClick={() => {
          props.requestInProgress(1);
          props.setTypeOfRequest('Snow Clearing');
        }}
      />
    </Segment>
    <Segment style={Styles.buttonSegment}>
      <RequestOptionComponent
        style={Styles.buttonComponent}
        imageURL={custom}
        title="Custom Request"
        onClick={() => {
          props.requestInProgress(1);
          props.setTypeOfRequest('Custom Request');
        }}
      />
    </Segment>
  </Grid>
);

requestSelection.propTypes = {
  pageInProgress: PropTypes.number,
  setTypeOfRequest: PropTypes.func,
  requestInProgress: PropTypes.number,
};

requestSelection.defaultProps = {
  pageInProgress: 0,
  setTypeOfRequest: PropTypes.func,
  requestInProgress: 0,
};

export default requestSelection;
