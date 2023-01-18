import {useTheme} from '@react-navigation/native';
import React from 'react';

import {SafeAreaView, StyleSheet, View} from 'react-native';
import Buttons from '../components/Profile/Buttons';
import HeaderSection from '../components/Profile/HeaderSection';

const ProfileScreen = ({navigation}) => {
    const {colors} = useTheme();

    const styles = StyleSheet.create({
        MainContainer: {
            flex: 1,
            backgroundColor: colors.mainBackgroundColor,
        },
        Container: {
            width: '100%',
        },
    });
    return (
        <SafeAreaView style={styles.MainContainer}>
            <View style={styles.Container}>
                <HeaderSection />
                <Buttons navigation={navigation} />
            </View>
        </SafeAreaView>
    );
};

export default ProfileScreen;
