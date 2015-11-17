import React, {
    Component,
    StyleSheet,
    PropTypes,
    View,
    ScrollView,
    Text
} from 'react-native';
import { Checkbox, CheckboxGroup, Button, TYPO, COLOR  } from 'react-native-material-design-components';

var typographyStyle = StyleSheet.create(TYPO);

export default class CheckboxExample extends Component {
    constructor(props) {
        super(props);
        // Operations usually carried out in componentWillMount go here
    }

    static defaultProps = {};
    static propTypes = {};
    state = {
        group2Selected: []
    };

    render = () => {
        var { primary } =  this.props;
        return (
            <View>
                <View style={styles.content}>
                    <Text style={typographyStyle.paperFontSubhead}>Light Theme</Text>
                </View>
                <View>
                    <CheckboxGroup ref="CheckboxGroup1" name="group2" onSelect={(value) => {
                            this.setState({group2Selected: value});
                        }} primary={primary}>
                        <Checkbox value="1" label="Checkbox On" checked={true}/>
                        <Checkbox value="2" label="Checkbox Off"/>
                        <Checkbox value="3" label="Checkbox On Disabled" checked={true} disabled={true}/>
                        <Checkbox value="4" label="Checkbox Off Disabled" disabled={true}/>
                        <Checkbox value="5" checked={true}/>
                        <Checkbox value="6"/>
                    </CheckboxGroup>
                    <View style={[styles.content,styles.action]}>
                        <Text style={{flex:1}}>Selected {this.state.group2Selected.join(',')}</Text>
                        <Button raised={true} value="Press to select 1,2,6" onPress={()=>{this.refs.CheckboxGroup1.value = ['1','2','6']}} />
                    </View>

                </View>

                <View style={styles.content}>
                    <Text style={typographyStyle.paperFontSubhead}>Dark Theme</Text>
                </View>
                <View style={{
                        backgroundColor: COLOR.paperGrey900.color,
                    }}>
                    <CheckboxGroup checked="1" theme="dark" name="group2" primary={primary}>
                        <Checkbox value="1" label="Checkbox On" checked={true}/>
                        <Checkbox value="2" label="Checkbox Off"/>
                        <Checkbox value="3" label="Checkbox On Disabled" checked={true} disabled={true}/>
                        <Checkbox value="4" label="Checkbox Off Disabled" disabled={true}/>
                        <Checkbox value="5" checked={true}/>
                        <Checkbox value="6"/>
                    </CheckboxGroup>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        padding: 16,
    },
    action: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});