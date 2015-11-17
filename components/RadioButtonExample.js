import React, {
    Component,
    StyleSheet,
    PropTypes,
    View,
    ScrollView,
    Text
} from 'react-native';
import { RadioButton, RadioButtonGroup, TYPO, COLOR  } from 'react-native-material-design-components';

var typographyStyle = StyleSheet.create(TYPO);

export default class RadioButtonExample extends Component {
    constructor(props) {
        super(props);
        // Operations usually carried out in componentWillMount go here
    }

    static defaultProps = {};
    static propTypes = {};
    state = {};

    render = () => {
        var { primary } =  this.props;
        console.log(primary);
        return (
            <View>
                <View style={styles.content}>
                    <Text style={typographyStyle.paperFontSubhead}>Light Theme</Text>
                </View>
                <View style={{
                        padding: 16,
                        flex:1
                    }}>
                    <RadioButtonGroup ref="Group1" primary={primary} name="group1" onSelect={(value) => {
                            this.setState({group1Selected: value});
                        }}>
                        <RadioButton value="1" label="RadioButton On" checked={true}/>
                        <RadioButton value="2" label="RadioButton Off"/>
                        <RadioButton value="3" label="RadioButton Disabled" disabled={true}/>
                        <RadioButton value="4" label="RadioButton Disabled" disabled={true}/>
                        <RadioButton value="5"/>
                        <RadioButton value="6"/>
                    </RadioButtonGroup>

                    <Text>Selected {this.state.group1Selected}</Text>
                    <Text onPress={()=>{this.refs.Group1.value = 2}}>Press to select 2</Text>
                </View>

                <View style={styles.content}>
                    <Text style={typographyStyle.paperFontSubhead}>Dark Theme</Text>
                </View>
                <View style={{
                        backgroundColor: COLOR.paperGrey900.color,
                        padding: 16,
                        flex:1
                    }}>
                    <RadioButtonGroup checked="1" theme="dark" name="group2" primary={primary}>
                        <RadioButton value="1" label="RadioButton On" checked={true}/>
                        <RadioButton value="2" label="RadioButton Off"/>
                        <RadioButton value="3" label="RadioButton Disabled" disabled={true}/>
                        <RadioButton value="4" label="RadioButton Disabled" disabled={true}/>
                        <RadioButton value="5"/>
                        <RadioButton value="6"/>
                    </RadioButtonGroup>
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