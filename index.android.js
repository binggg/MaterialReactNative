import React, {
    Component,
    AppRegistry,
    StyleSheet,
    View
} from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './configureStore.js';
import getRoute from './routers.js';

const store = configureStore();

export default class MaterialReactNative extends Component {
    render = () => {
        let component = getRoute(store);
        return (
            <Provider store={store}>
                {component}
            </Provider>
        )
    }
}

AppRegistry.registerComponent('MaterialReactNative', () => MaterialReactNative);
