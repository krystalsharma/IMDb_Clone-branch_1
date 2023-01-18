import auth from '@react-native-firebase/auth';
import {
    DarkTheme,
    DefaultTheme,
    NavigationContainer,
} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {useColorScheme} from 'react-native';
import {
    CustomDarkColors,
    CustomLightColors,
} from '../assets/values/CustomColors';
import {GlobalVariables} from '../Context/AppContext';
import AppStack from './AppStack';
import AuthStack from './AuthStack';

const customDarkTheme = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        ...CustomDarkColors,
    },
};

const customLightTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        ...CustomLightColors,
    },
};

const Routes = () => {
    const colorScheme = useColorScheme();
    const {user, setUser, setUserDataInAsyncStorage} = GlobalVariables();
    const [initializing, setInitializing] = useState(true);

    const onAuthStateChanged = userValue => {
        setUser(userValue);
        setUserDataInAsyncStorage(userValue);
        if (initializing) setInitializing(false);
    };

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null;

    return (
        <NavigationContainer
            theme={colorScheme === 'dark' ? customDarkTheme : customLightTheme}>
            {user ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    );
};

export default Routes;
