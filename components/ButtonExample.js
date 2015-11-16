import React, {
    Component,
    StyleSheet,
    PropTypes,
    View,
    ScrollView,
    Text
} from 'react-native';
import { Button, TYPO, COLOR  } from 'react-native-material-design-components';

var typographyStyle = StyleSheet.create(TYPO);

export default class ButtonExample extends Component {
    constructor(props) {
        super(props);
        // Operations usually carried out in componentWillMount go here
    }

    static defaultProps = {};
    static propTypes = {};
    state = {};

    render = () => {
        var { primary } =  this.props;
        var primaryColor = COLOR[`${primary}500`];
        return (
            <View>
                <View style={styles.content}>
                    <Text style={[typographyStyle.paperFontHeadline, primaryColor]}>Button</Text>
                </View>

                <View style={styles.content} onPress={()=> console.log(this.refs)}>
                    <Text style={typographyStyle.paperFontSubhead}>Light Theme1</Text>
                </View>
                <View style={{
                        padding: 16,
                    }} onPress={()=> console.log(this.refs)}>
                    <Button value="NORMAL FLAT" primary={primary} onPress={()=> console.log(this.refs)}/>
                    <Button value="DISABLED FLAT" disabled={true} primary={primary}/>
                    <Button value="NORMAL RAISED" raised={true} primary={primary}/>
                    <Button value="DISABLED RAISED" disabled={true} raised={true} primary={primary}/>
                </View>
                <View style={styles.content}>
                    <Text style={typographyStyle.paperFontSubhead}>Dark Theme</Text>
                </View>
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
    }
}

const styles = StyleSheet.create({
    content: {
        padding: 16,
    },
});