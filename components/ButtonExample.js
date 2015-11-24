import React, {
    Component,
    StyleSheet,
    PropTypes,
    View,
    ScrollView,
    Text,
    InteractionManager
} from 'react-native';
import {
    Button,
    TYPO,
    COLOR,
    Subheader
} from 'react-native-material-design-components';

var typographyStyle = StyleSheet.create(TYPO);

export default class ButtonExample extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {};
    static propTypes = {};
    state = {
        renderPlaceholderOnly: true
    };

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.setState({renderPlaceholderOnly: false});
        });
    }

    render = () => {
        var { primary } =  this.props;

        if (this.state.renderPlaceholderOnly) {
            return this._renderPlaceholderView();
        }

        return (
            <View>
                <Subheader text="Light Theme"/>
                <View style={styles.content}>
                    <Button value="NORMAL FLAT" primary={primary} onPress={()=> console.log(this.refs)}/>
                    <Button value="DISABLED FLAT" disabled={true} primary={primary}/>
                    <Button value="NORMAL RAISED" raised={true} primary={primary}/>
                    <Button value="DISABLED RAISED" disabled={true} raised={true} primary={primary}/>
                </View>
                <Subheader text="Dark Theme"/>
                <View style={{
                        backgroundColor: COLOR.paperGrey900.color,
                        padding: 16,

                    }}>
                    <Button value="NORMAL FLAT" theme="dark" primary={primary}/>
                    <Button value="DISABLED FLAT" disabled={true} theme="dark" primary={primary}/>
                    <Button value="NORMAL RAISED" theme="dark" raised={true} primary={primary}/>
                    <Button value="DISABLED RAISED" disabled={true} theme="dark" raised={true} primary={primary}/>
                </View>
            </View>
        );
    };

    _renderPlaceholderView = () => (
        <View>
        </View>
    )


}

const styles = StyleSheet.create({
    content: {
        padding: 16,
    },
});