import AsyncStorage from '@react-native-async-storage/async-storage';
import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Strings} from '../assets/values/Strings';
import {GlobalVariables} from '../Context/AppContext';

const ProfileSecondScreen = ({navigation, route}) => {
    const {colors} = useTheme();
    const {user, logout} = GlobalVariables();
    const {type} = route.params;
    return (
        <View style={{flex: 1, backgroundColor: colors.mainBackgroundColor}}>
            <View
                style={{
                    marginHorizontal: 20,
                    paddingVertical: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                    alignContent: 'center',
                }}>
                <Icon
                    name="arrow-left"
                    color={colors.textColor}
                    size={26}
                    onPress={() => navigation.goBack()}
                />
                <Text
                    style={{
                        color: colors.textColor,
                        fontSize: 22,
                        marginLeft: 20,
                    }}>
                    {type}
                </Text>
            </View>

            <View
                style={{
                    alignItems: 'center',
                    marginHorizontal: 10,
                    marginTop: 10,
                }}>
                {type === Strings.Account ? (
                    <Text>User id - {user.uid}</Text>
                ) : type === Strings.Watch_preferences ? (
                    <Text>{Strings.Don_have_any_watch_preferences}</Text>
                ) : type === Strings.Notification ? (
                    <Text>{Strings.NO_notification_right_now}</Text>
                ) : type === Strings.Display ? (
                    <Text>{Strings.Nothing_to_display}</Text>
                ) : type === Strings.Storage ? (
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={{
                            borderColor: colors.primary,
                            borderWidth: 1,
                            width: 200,
                            alignItems: 'center',
                            paddingVertical: 10,
                        }}
                        onPress={() => {
                            AsyncStorage.clear();
                            logout();
                        }}>
                        <Text>Clear App Data</Text>
                    </TouchableOpacity>
                ) : type === Strings.About ? (
                    <Text>{Strings.About_Text}</Text>
                ) : null}
            </View>
        </View>
    );
};

export default ProfileSecondScreen;
