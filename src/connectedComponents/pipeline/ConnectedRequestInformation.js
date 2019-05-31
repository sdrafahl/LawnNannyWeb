import { connect } from 'react-redux';
import Actions from '../../reducers/Actions';
import requestInformationComponent from '../../components/pages/pipeline/requestInformation';

const mapStateToProps = state => ({
  requests: state.requests,
  requestInformation: state.requests.requestInformation,
  pageInProgress: state.requests.requestInProgress,
});

const mapDispatchToProps = dispatch => ({
  setRequestInformation: (data) => {
    const action = {
      type: Actions.requests.setRequestInformation,
      data,
    };
    dispatch(action);
  },
  requestInProgress: (data) => {
    const action = {
      type: Actions.requests.requestInProgress,
      data,
    };
    dispatch(action);
  },
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(requestInformationComponent);