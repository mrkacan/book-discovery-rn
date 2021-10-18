import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';

import useCachedResources from './src/hooks/useCachedResources';
import Navigation from './src/navigation';
import configureStore from './src/store';

const {store} = configureStore();

export default function App() {
    const isLoadingComplete = useCachedResources();

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <Provider store={store}>
                <SafeAreaProvider>
                    <Navigation />
                    <StatusBar/>
                </SafeAreaProvider>
            </Provider>
        );
    }
}
