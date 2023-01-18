import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';

const VideosScreen = () => {
    const {colors} = useTheme();
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: colors.mainBackgroundColor,
            }}>
            <Text>VideosScreen</Text>
        </View>
    );
};

export default VideosScreen;
