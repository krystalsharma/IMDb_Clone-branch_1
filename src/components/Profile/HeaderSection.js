import {useTheme} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Pressable, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {CustomFonts} from '../../assets/values/CustomFonts';
import {Strings} from '../../assets/values/Strings';
import {GlobalVariables} from '../../Context/AppContext';

const HeaderSection = () => {
    const {colors} = useTheme();
    const {user, logout, getUser, allUser} = GlobalVariables();

    useEffect(() => {
        getUser(user.uid);
    }, []);

    return (
        <View
            style={{
                flexDirection: 'row',
                paddingHorizontal: 15,
                paddingVertical: 20,
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
            <View
                style={{
                    flexDirection: 'row',
                }}>
                <Icon
                    name="account-circle"
                    color={colors.primaryColor}
                    size={35}
                />
                <Text
                    style={{
                        marginLeft: 10,
                        color: colors.textColor,
                        fontSize: 22,
                        fontFamily: CustomFonts.Bold,
                    }}>
                    {allUser.name}
                </Text>
            </View>
            <Pressable
                onPress={() => logout()}
                style={({pressed}) => [
                    {
                        paddingVertical: 10,
                        paddingHorizontal: 15,
                        borderRadius: 5,
                        borderWidth: 1,
                        borderColor: colors.inActiveIconColor,
                        backgroundColor: pressed ? colors.overlayColor : null,
                    },
                ]}>
                <Text
                    style={{
                        color: colors.headingTextColor,
                        letterSpacing: 2,
                    }}>
                    {Strings.SIGN_OUT}
                </Text>
            </Pressable>
        </View>
    );
};

export default HeaderSection;