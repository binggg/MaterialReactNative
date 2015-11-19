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
    Subheader,
    Avatar
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
                <Subheader text="Text only single-line list"/>
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

                <Subheader text="Avatar with text single-line list"/>
                {data.single.avatarText.map(user =>(
                    <List
                        leftAvatar={
                            <Avatar src={user.avatar}/>
                        }
                        primaryText={user.name}
                        rightIcon={
                            <Icon name="message" size={24}/>
                        }
                    />
                ))}

                <Subheader text="Text only two-line list"/>
                {data.two.text.map(list => (
                    <List
                        lines={2}
                        primaryText={list.primaryText}
                        secondaryText={list.secondaryText}
                    />
                ))}
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
    single: {
        text: [
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
        iconText: [
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
        ],
        avatarText: [
            {name: 'jsa', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg'},
            {name: 'pixeliris', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/pixeliris/128.jpg'},
            {name: 'ok', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ok/128.jpg'},
            {name: 'marcosmoralez', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/marcosmoralez/128.jpg'},
            {name: 'sindresorhus', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/sindresorhus/128.jpg'}
        ]
    },
    two: {
        text: [
            {
                primaryText: 'Profile photo',
                secondaryText:'Change your Google+ profile photo'
            },
            {
                primaryText: 'Show your status',
                secondaryText: 'Your status is visible to everyone you use with'
            }
        ]
    }
};