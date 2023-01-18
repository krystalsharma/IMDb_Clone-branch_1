import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Linking, Pressable, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Strings} from '../../assets/values/Strings';
import TitleContainer from '../Custom/TitleContainer';

const Social = () => {
    const {colors} = useTheme();

    return (
        <View style={{
            marginTop: 15,
            backgroundColor: colors.componentsBackgroundColor,
            padding: 10,
            elevation: 5,
        }}>
            <TitleContainer title={Strings.Follow_IMDb} />
            <View style={{marginVertical: 0, flexDirection: 'row'}}>
                <SocialButton
                    name="ios-logo-facebook"
                    colors={colors}
                    link="facebook"
                />
                <SocialButton
                    name="ios-logo-instagram"
                    colors={colors}
                    link="instagram"
                />
                <SocialButton
                    name="ios-logo-twitch"
                    colors={colors}
                    link="twitch"
                />
                <SocialButton
                    name="ios-logo-twitter"
                    colors={colors}
                    link="twitter"
                />
                <SocialButton
                    name="ios-logo-youtube"
                    colors={colors}
                    link="youtube"
                />
            </View>
        </View>
    );
};

export default Social;

const SocialButton = props => (
    <Pressable
        onPress={() => {
            console.log(props.link);
            Linking.canOpenURL('https://www.facebook.com/');
        }}
        style={({pressed}) => [
            {
                backgroundColor: pressed
                    ? props.colors.bottomBarOverlay
                    : 'transparent',
                padding: 10,
            },
        ]}>
        <Icon
            name={props.name}
            size={32}
            color={props.colors.SocialButtonColor}
            style={{marginHorizontal: 5}}
        />
    </Pressable>
);
