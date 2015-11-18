import React, {
    Component,
    StyleSheet,
    PropTypes,
    View,
    ScrollView,
    Text
} from 'react-native';
import {
    TYPO,
    COLOR,
    Subheader
} from 'react-native-material-design-components';

export default class SubheaderExample extends Component {
    constructor(props) {
        super(props);
        // Operations usually carried out in componentWillMount go here
    }

    static defaultProps = {};
    static propTypes = {};
    state = {};

    render = () => {
        const {
            primary
            } = this.props;
        return (
            <View>
                <Subheader text="Subheader normal"/>
                <Subheader text="Subheader with color" primaryColor={COLOR[`${primary}500`].color}/>
                <Subheader text="Subheader normal, has FAB"
                           hasFAB={true}
                />
                <Subheader text="Subheader with color, has FAB"
                           primaryColor={COLOR[`${primary}500`].color}
                           hasFAB={true}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        padding: 16,
    }
});