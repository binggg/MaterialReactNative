import React, {
    Navigator,
    View,
    Text,
    StyleSheet,
    DrawerLayoutAndroid
} from 'react-native';
import Main from './redux/containers/Main';

export default store => {
    let initialRoute = {name: 'main'};
    var navigationView = (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
            <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
        </View>
    );
    return (
        <DrawerLayoutAndroid
            drawerWidth={300}
            drawerPosition={DrawerLayoutAndroid.positions.Left}
            renderNavigationView={() => navigationView}>
            <Navigator
                initialRoute={initialRoute}
                configureScene={() => Navigator.SceneConfigs.FadeAndroid}
                renderScene={RouteMapper}
            />
        </DrawerLayoutAndroid>
    );

    function RouteMapper(route, navigator) {
        switch (route.name) {
            case 'splash':
                return (
                    <SplashContainer dispatch={store.dispatch} navigator={navigator}/>
                );
            case 'main':
                return (
                    <Main dispatch={store.dispatch} navigator={navigator}/>
                );
            case 'analysis':
                return (
                    <AnalysisContainer dispatch={store.dispatch} navigator={navigator}/>
                );
            case 'test':
                return (
                    <MaterialDesign />
                );
        }
    }
}