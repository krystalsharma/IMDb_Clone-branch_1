import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Strings} from '../../assets/values/Strings';

const UserButtons = ({navigation}) => {
    const {colors} = useTheme();

    return (
        <View
            style={{
                borderTopWidth: 1,
                borderTopColor: colors.overlayColor,
            }}>
            <Text
                style={{
                    color: colors.plusIconBackgroundColor,
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    fontSize: 17,
                    letterSpacing: 2,
                }}>
                {Strings.USER}
            </Text>
            <Button
                title={Strings.Account}
                colors={colors}
                onPress={() => {
                    navigation.navigate('ProfileSecondScreen', {
                        type: Strings.Account,
                    });
                }}
            />
            <Button
                title={Strings.Watch_preferences}
                colors={colors}
                onPress={() => {
                    navigation.navigate('ProfileSecondScreen', {
                        type: Strings.Watch_preferences,
                    });
                }}
            />
            <Button
                title={Strings.Notification}
                colors={colors}
                onPress={() => {
                    navigation.navigate('ProfileSecondScreen', {
                        type: Strings.Notification,
                    });
                }}
            />
            <Text
                style={{
                    color: colors.plusIconBackgroundColor,
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    fontSize: 17,
                    letterSpacing: 2,
                }}>
                {Strings.GENERAL}
            </Text>
            <Button
                title={Strings.Display}
                colors={colors}
                onPress={() => {
                    navigation.navigate('ProfileSecondScreen', {
                        type: Strings.Display,
                    });
                }}
            />
            <Button
                title={Strings.Storage}
                colors={colors}
                onPress={() => {
                    navigation.navigate('ProfileSecondScreen', {
                        type: Strings.Storage,
                    });
                }}
            />
            <Button
                title={Strings.About}
                colors={colors}
                onPress={() => {
                    navigation.navigate('ProfileSecondScreen', {
                        type: Strings.About,
                    });
                }}
            />
        </View>
    );
};

export default UserButtons;

const Button = ({title, colors, onPress}) => (
    <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.5}
        style={{
            backgroundColor: colors.componentsBackgroundColor,
            marginBottom: 1.5,
        }}>
        <Text
            style={{
                color: colors.textColor,
                paddingVertical: 10,
                paddingHorizontal: 20,
                fontSize: 18,
            }}>
            {title}
        </Text>
    </TouchableOpacity>
);
