import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../screens/ProfileScreen';
import ProfileSecondScreen from '../screens/ProfileSecondScreen';

const Profile = createStackNavigator();

export const ProfileStackScreen = () => {
    return (
        <Profile.Navigator screenOptions={{headerShown: false}}>
            <Profile.Screen name="ProfileScreen" component={ProfileScreen} />
            <Profile.Screen
                name="ProfileSecondScreen"
                component={ProfileSecondScreen}
            />
        </Profile.Navigator>
    );
};
