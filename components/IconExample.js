import React, {
    Component,
    StyleSheet,
    PropTypes,
    View,
    ScrollView,
    Text,
    ListView,
    InteractionManager
} from 'react-native';
import { TYPO, COLOR, ICON_NAME, Icon  } from 'react-native-material-design-components';

export default class IconExample extends Component {
    constructor(props) {
        super(props);
        // Operations usually carried out in componentWillMount go here
    }

    static defaultProps = {};
    static propTypes = {};
    state = {
        dataSource: new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        }).cloneWithRows(ICON_NAME),
        renderPlaceholderOnly: true
    };

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.setState({renderPlaceholderOnly: false});
        });
    }

    render = () => {
        if (this.state.renderPlaceholderOnly) {
            this._renderPlaceholderView();
        }

        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderIconItem}
            />
        );
    };

    renderIconItem = (rowData) => {
        const { primary } = this.props;
        return (
            <View style={styles.iconItem} key={rowData}>
                <Icon name={rowData}
                      size={24}
                      color={COLOR[`${primary}500`].color}
                      style={
                        styles.icon
                      }
                />
                <Text style={[TYPO.paperFontBody1,styles.text,{color: 'rgba(0,0,0,.87)'}]}>
                    {rowData}
                </Text>
            </View>
        )
    };

    _renderPlaceholderView = () => (
        <View>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        padding: 16,
    },
    iconItem: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        margin: 16
    },
    text: {
        marginLeft: 16
    }
});