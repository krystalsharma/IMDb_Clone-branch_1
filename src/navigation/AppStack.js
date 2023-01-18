import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation, useTheme} from '@react-navigation/native';
import React from 'react';
import {Dimensions, Pressable, StatusBar} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SearchScreen from '../screens/SearchScreen';
import VideosScreen from '../screens/VideosScreen';
import { ProfileStackScreen } from './StackScreen';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    const navigation = useNavigation();
    const {colors} = useTheme();
    const {height, width} = Dimensions.get('window');
    return (
        <>
            <StatusBar
                barStyle="light-content"
                backgroundColor={colors.statusbarColor}
            />
            <Tab.Navigator
                initialRouteName="Profile"
                screenOptions={({route}) => ({
                    headerShown: false,
                    tabBarActiveTintColor: colors.activeIconColor,
                    tabBarInactiveTintColor: colors.inActiveIconColor,

                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        if (route.name === 'Home') iconName = 'home';
                        else if (route.name === 'Search') iconName = 'magnify';
                        else if (route.name === 'Videos')
                            iconName = 'play-circle';
                        else if (route.name === 'Profile')
                            iconName = 'account-circle';
                        return (
                            <Pressable
                                style={({pressed}) => [
                                    {
                                        backgroundColor: pressed
                                            ? colors.bottomBarOverlay
                                            : null,
                                    },
                                    {
                                        height: height * 0.18,
                                        width: height * 0.17,
                                        borderRadius: height * 0.8,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        zIndex: 1,
                                    },
                                ]}
                                onPress={() => {
                                    if (route.name === 'Home')
                                        navigation.navigate('Home');
                                    else if (route.name === 'Search')
                                        navigation.navigate('Search');
                                    else if (route.name === 'Videos')
                                        navigation.navigate('Videos');
                                    else if (route.name === 'Profile')
                                        navigation.navigate('Profile');
                                }}>
                                <MaterialCommunityIcons
                                    name={iconName}
                                    color={color}
                                    size={size}
                                />
                            </Pressable>
                        );
                    },

                    tabBarStyle: {
                        height: 55,
                        paddingBottom: 5,
                        backgroundColor: colors.bottomBarColor,
                        overflow: 'hidden',
                    },
                })}>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Search" component={SearchScreen} />
                <Tab.Screen name="Videos" component={VideosScreen} />
                <Tab.Screen name="Profile" component={ProfileStackScreen} />
            </Tab.Navigator>
        </>
    );
};

export default BottomTabs;
