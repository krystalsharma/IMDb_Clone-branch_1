import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {CustomFonts} from '../../assets/values/CustomFonts';
import {Images} from '../../assets/values/Images';
import {Strings} from '../../assets/values/Strings';

const LoginRoutesScreen = ({navigation}) => {
    const {colors} = useTheme();
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                padding: 20,
            }}>
            <Text
                style={{
                    fontSize: 28,
                    color: colors.textColor,
                    fontFamily: CustomFonts.Regular,
                    marginTop: 35,
                }}>
                {Strings.Unlock_all_that_IMDb_has_to_offer}
            </Text>
            <View
                style={{
                    height: 2,
                    width: 150,
                    backgroundColor: colors.primaryColor,
                    marginVertical: 5,
                }}
            />
            <SocialButton
                colors={colors.black}
                text={Strings.SIGN_IN_WITH_IMDb}
                backgroundColor={colors.white}
                image={Images.IMDb_App_Icon}
                onPress={() => navigation.navigate('Login')}
            />
            <SocialButton
                colors={colors.white}
                text={Strings.SIGN_WITH_GOOGLE}
                backgroundColor={colors.googleIcon}
                image={Images.google}
                onPress={() => console.log('Google')}
            />
            <SocialButton
                colors={colors.white}
                text={Strings.SIGN_WITH_FACEBOOK}
                backgroundColor={colors.facebookIcon}
                image={Images.facebook}
                onPress={() => console.log('Facebook')}
            />
            <Text
                style={{
                    fontSize: 22,
                    color: colors.textColor,
                    fontFamily: CustomFonts.Regular,
                }}>
                {Strings.or}
            </Text>
            <SocialButton
                colors={colors.black}
                text={Strings.CREATE_AN_ACCOUNT}
                backgroundColor={colors.primaryColor}
                image={null}
                onPress={() => navigation.navigate('Signup')}
            />
            <Text
                style={{
                    fontSize: 12,
                    color: colors.textColor,
                    fontFamily: CustomFonts.Regular,
                }}>
                {Strings.By_signing_in_you_agree_to}
                <Text
                    style={{
                        fontSize: 12,
                        color: colors.headingTextColor,
                        fontFamily: CustomFonts.Regular,
                    }}>
                    {Strings.IMDb_Condition_of_Use}
                </Text>
            </Text>
        </View>
    );
};

export default LoginRoutesScreen;

const SocialButton = ({colors, onPress, text, backgroundColor, image}) => (
    <TouchableOpacity
        onPress={onPress}
        style={{
            height: 50,
            width: 350,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: backgroundColor,
            elevation: 5,
            borderRadius: 3,
            overflow: 'hidden',
            marginVertical: 12,
        }}>
        {image ? (
            <Image
                source={image}
                resizeMode="contain"
                style={{
                    width: 44,
                    height: 44,
                    position: 'absolute',
                    left: 2,
                    backgroundColor: '#fff',
                }}
            />
        ) : null}
        <Text
            style={{
                fontSize: 18,
                color: colors,
                fontFamily: CustomFonts.Regular,
            }}>
            {text}
        </Text>
    </TouchableOpacity>
);
