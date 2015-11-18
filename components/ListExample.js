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
    Icon,
    Subheader
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
                <Subheader text="Text only single-line list" />
                {data.single.text.map(list => (
                    <List
                        primaryText={list.primaryText}/>
                ))}

                <Subheader text="Icon with text single-line list"/>
                {data.single.iconText.map(list => (
                    <List
                        leftIcon={
                            <Icon name={list.leftIcon} size={24}/>
                        }
                        primaryText={list.primaryText}/>
                ))}
                <List
                    leftIcon={googleIcon}
                    onLeftIconClicked={()=>{console.log('left Icon Clicked')}}
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
                    rightIcon={googleIcon}
                />
                <List
                    primaryText="List with Avatar"
                    leftAvatar={avatar}
                    rightIcon={googleIcon}
                />
                <List
                    primaryText="List with Avatar"
                    leftAvatar={avatar}
                    rightIcon={googleIcon}
                />
                <List
                    primaryText="List with Avatar"
                    leftAvatar={avatar}
                    rightIcon={googleIcon}
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

const data = {
    single:{
        text:[
            {
                primaryText: 'Inbox'
            },
            {
                primaryText: 'Starred'
            },
            {
                primaryText: 'Sent mail'
            },
            {
                primaryText: 'Drafts'
            }
        ],
        iconText:[
            {
                primaryText: 'Inbox',
                leftIcon: 'inbox'
            },
            {
                primaryText: 'Outbox',
                leftIcon: 'outbox'
            },
            {
                primaryText: 'Trash',
                leftIcon: 'delete'
            },
            {
                primaryText: 'Spam',
                leftIcon: 'block-helper'
            }
        ]
    }
};