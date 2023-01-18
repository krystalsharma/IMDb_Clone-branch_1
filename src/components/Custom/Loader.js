import { useTheme } from '@react-navigation/native';
import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';

const Loader = () => {
    const { colors } = useTheme();
    return (
        <View
            style={{
                position: 'absolute',
                backgroundColor: colors.mainBackgroundColor,
                height: '100%',
                width: '100%',
                zIndex: 10,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <ActivityIndicator size={100} color={colors.primaryColor} />
        </View>
    );
};

export default Loader;
