import { connect } from 'react-redux';
import App from './components';
import * as Actions from './actions';

function mapProps(state) {
    return state;
}

function mapDispatch(dispatch) {
    return {
        onServiceStop: id => dispatch(Actions.serviceStop(id)),
        onServiceStart: id => dispatch(Actions.serviceStart(id)),
        onServiceRestart: id => dispatch(Actions.serviceRestart(id)),
        onServiceTraceFlip: id => dispatch(Actions.serviceTraceFlip(id)),
    }
}

let ServiceListApp = connect(mapProps, mapDispatch)(App);
export default ServiceListApp;
