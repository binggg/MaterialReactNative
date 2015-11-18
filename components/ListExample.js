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
    List,
    Icon
} from 'react-native-material-design-components';

const googleIcon = (<Icon name="google" size={24}/>)
const avatar = (<Icon name="google" size={40}/>)

export default class ListExample extends Component {
    constructor(props) {
        super(props);
        // Operations usually carried out in componentWillMount go here
    }

    static defaultProps = {};
    static propTypes = {};
    state = {};

    render = () => {
        const {
            primaryColor
            } = this.props;
        return (
            <View>
                <List
                    leftIcon={googleIcon}
                    primaryText="Hello List"/>
                <List
                    leftIcon={googleIcon}
                    primaryText="Hello List"
                    rightIcon={googleIcon}
                />
                <List
                    primaryText="Hello List"
                />
                <List
                    primaryText="Hello List"
                    rightIcon={googleIcon}
                />
                <List
                    primaryText="List with Avatar"
                    leftAvatar={avatar}
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