import React, {
    Component,
    StyleSheet,
    PropTypes,
    View,
    ScrollView,
    Text
} from 'react-native';
import { Checkbox, CheckboxGroup, TYPO, COLOR  } from 'react-native-material-design-components';

const colorTypes = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', 'A100', 'A200', 'A400', 'A700'];
export default class ColorExample extends Component {
    constructor(props) {
        super(props);
        // Operations usually carried out in componentWillMount go here
    }

    static defaultProps = {};
    static propTypes = {};
    state = {};

    render = () => {
        var { primary } =  this.props;
        return (
            <View>
                <View style={styles.content}>
                    <Text style={TYPO.paperFontSubhead}>Text color</Text>
                </View>
                <View style={styles.content}>
                    {colorTypes.map(type => (
                        COLOR[`${primary}${type}`] &&
                        <Text style={[TYPO.paperFontTitle, COLOR[`${primary}${type}`]]}>{primary}{type}</Text>
                    ))}
                </View>
                <View style={styles.content}>
                    <Text style={TYPO.paperFontSubhead}>Background color</Text>
                </View>
                <View style={{height:600}}>
                    {colorTypes.map(type => (
                        COLOR[`${primary}${type}`] &&
                        <View style={[styles.colorItem,{backgroundColor: COLOR[`${primary}${type}`].color}]}>
                            <Text>{primary}{type}</Text>
                        </View>
                    ))}
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        padding: 16,
    },
    colorItem: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 16
    }
});