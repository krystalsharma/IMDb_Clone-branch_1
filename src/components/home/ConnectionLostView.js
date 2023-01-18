import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {Strings} from '../../assets/values/Strings';

const ConnectionLostView = () => {
    const {colors} = useTheme();

    const {width, height} = Dimensions.get('window');
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.componentsBackgroundColor,
            alignItems: 'center',
            paddingTop: height * 0.15,
        },
        ImageContainer: {
            width: height * 0.2,
            height: height * 0.2,
            borderRadius: height * 0.2,
            overflow: 'hidden',
        },
        Images: {
            width: height * 0.2,
            height: height * 0.2,
            borderRadius: height * 0.2,
        },
        TextContainer: {
            width: width * 0.8,
            marginTop: 30,
            alignItems: 'center',
        },
        HeaderText: {
            fontSize: height * 0.03,
        },
        TextStyle: {
            textAlign: 'center',
            fontSize: height * 0.015,
            lineHeight: height * 0.035,
        },
    });

    return (
        <View style={styles.container}>
            <View style={styles.ImageContainer}>
                <Image
                    source={require('../../assets/images/IMDb_App_Icon.png')}
                    style={styles.Images}
                />
            </View>
            <View style={styles.TextContainer}>
                <Text style={styles.HeaderText}>"{Strings.inconceivable}"</Text>
                <Text style={styles.TextStyle}>
                    {Strings.inconceivable_Text}
                </Text>
                <Text style={[styles.TextStyle, {marginTop: height * 0.01}]}>
                    {Strings.inconceivable_text_2}
                </Text>
            </View>
        </View>
    );
};

export default ConnectionLostView;
