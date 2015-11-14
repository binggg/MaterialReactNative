import React, { Component } from 'react-native';
import { connect } from 'react-redux';
import { CHANGE_PRIMARY, changePrimary } from '../modules/main';
import ButtonExample from '../../components/ButtonExample';


class Main extends Component {
    componentDidMount() {
        const { dispatch, navigator } = this.props;
        dispatch(changePrimary('paperTeal'));
    }

    render() {
        const { main, dispatch, navigator } = this.props;
        return (
            <ButtonExample primary={main.primary}/>
        )
    }

    handleCLick(dispatch, navigator) {
        navigator.push({name: 'analysis'});
        dispatch(finishSplash())
    }
}

function mapStateToProps(state) {
    return { main } = state;
}

export default connect(mapStateToProps)(Main);