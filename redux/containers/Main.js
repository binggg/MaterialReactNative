import React, {
    Component,
    AppRegistry,
    StyleSheet,
    View,
    Navigator,
    Text,
    DrawerLayoutAndroid,
    ToolbarAndroid,
    ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import configureStore from '../../configureStore';
import {
    Button,
    TYPO,
    COLOR,
    Toolbar
} from 'react-native-material-design-components';
import { CHANGE_PRIMARY, changePrimary } from '../modules/main';
import ButtonExample from '../../components/ButtonExample';
import ChangeTheme from './ChangeTheme';

const store = configureStore();

export default class Main extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(changePrimary('paperGreen'));
    }

    render = () => {
        let initialRoute = {name: 'ChangeTheme'};
        var navigationView = (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <View style={styles.drawerCover}>

                </View>
                <View style={styles.page}>

                </View>
            </View>
        );
        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => navigationView}
                ref={(drawer)=> {this.drawerRef = drawer}}
            >
                <Navigator
                    initialRoute={initialRoute}
                    configureScene={() => Navigator.SceneConfigs.FadeAndroid}
                    renderScene={this.RouteMapper}
                />
            </DrawerLayoutAndroid>
        )
    };

    RouteMapper = (route, navigator) => {
        switch (route.name) {
            case 'main':
                return (
                    <View style={styles.page}>
                        <Toolbar
                            navIconName="menu"
                            title="Material React Native"
                            primary={this.props.main.primary}
                            onIconClicked={()=>this.drawerRef.openDrawer()}
                        />
                        <ScrollView style={styles.page}>
                            <ButtonExample primary={this.props.main.primary}/>
                        </ScrollView>
                    </View>
                );
            case 'Button':
                return (
                    <View style={styles.page}>
                        <Toolbar
                            navIconName="menu"
                            title={route.name}
                            primary={this.props.main.primary}
                            onIconClicked={()=>this.drawerRef.openDrawer()}
                        />
                        <ScrollView style={styles.page}>
                            <ButtonExample primary={this.props.main.primary}/>
                        </ScrollView>
                    </View>
                );
            case 'ChangeTheme':
                return (
                    <View style={styles.page}>
                        <Toolbar
                            navIconName="menu"
                            title={route.name}
                            primary={this.props.main.primary}
                            onIconClicked={()=>this.drawerRef.openDrawer()}
                        />
                        <ScrollView style={styles.page}>
                            <ChangeTheme dispatch={this.props.dispatch} primary={this.props.main.primary}/>
                        </ScrollView>
                    </View>
                );
        }
    }
}

const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    drawerCover: {
        height: 168,
        backgroundColor: 'rgba(0,0,0,.2)'
    }
});


function mapStateToProps(state) {
    return {main} = state;
}

export default connect(mapStateToProps)(Main);