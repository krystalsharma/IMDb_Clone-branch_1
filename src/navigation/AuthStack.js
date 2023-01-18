import AsyncStorage from '@react-native-async-storage/async-storage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import LoginRoutesScreen from '../screens/AutStack/LoginRoutesScreen';
import LoginScreen from '../screens/AutStack/LoginScreen';
import OnBoardingScreen from '../screens/AutStack/OnBoardingScreen';
import SignupScreen from '../screens/AutStack/SignupScreen';

const AuthNavigationStack = createNativeStackNavigator();

export default AutStack = () => {
    const [isFirstLaunch, setIsFirstLaunch] = useState(null);

    const AlreadyLaunched = async () => {
        try {
            const value = await AsyncStorage.getItem('AlreadyLaunched');
            if (value == null) {
                await AsyncStorage.setItem('AlreadyLaunched', 'true');
                setIsFirstLaunch(true);
            } else {
                setIsFirstLaunch(false);
            }
        } catch (error) {
            console.log('Error in AuthStack => ', error.message);
        }
    };

    useEffect(() => {
        AlreadyLaunched();
    }, []);

    if (isFirstLaunch == null) return null;
    else if (isFirstLaunch === true) {
        return (
            <AuthNavigationStack.Navigator
                initialRouteName="OnBoarding"
                screenOptions={{
                    headerShown: false,
                }}>
                <AuthNavigationStack.Screen
                    name="OnBoarding"
                    component={OnBoardingScreen}
                />
                <AuthNavigationStack.Screen
                    name="LoginRoutes"
                    component={LoginRoutesScreen}
                />
                <AuthNavigationStack.Screen
                    name="Login"
                    component={LoginScreen}
                />
                <AuthNavigationStack.Screen
                    name="Signup"
                    component={SignupScreen}
                />
            </AuthNavigationStack.Navigator>
        );
    } else {
        return (
            <AuthNavigationStack.Navigator
                initialRouteName="LoginRoutes"
                screenOptions={{
                    headerShown: false,
                }}>
                <AuthNavigationStack.Screen
                    name="LoginRoutes"
                    component={LoginRoutesScreen}
                />
                <AuthNavigationStack.Screen
                    name="Login"
                    component={LoginScreen}
                />
                <AuthNavigationStack.Screen
                    name="Signup"
                    component={SignupScreen}
                />
            </AuthNavigationStack.Navigator>
        );
    }
};
