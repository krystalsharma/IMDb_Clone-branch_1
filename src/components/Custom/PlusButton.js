import {useTheme} from '@react-navigation/native';
import React, {useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';

const PlusButton = () => {
    const {colors} = useTheme();
    const [icon, setIcon] = useState(false);

    const styles = StyleSheet.create({
        container: {
            height: 45,
            width: 40,
            backgroundColor: icon
                ? colors.primaryColor
                : colors.plusIconBackgroundColor,
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 10,
        },
        triangleStyle: {
            position: 'absolute',
            bottom: -10,
            transform: [{rotate: '180deg'}],
            borderStyle: 'solid',
            borderTopWidth: 0,
            borderRightWidth: 0,
            borderLeftWidth: 0,
            borderBottomWidth: 10,
            borderTopColor: 'transparent',
            borderRightColor: 'transparent',
            borderLeftColor: 'transparent',
            borderBottomColor: icon
                ? colors.primaryColor
                : colors.plusIconBackgroundColor,
        },
        rightStyle: {},
    });

    return (
        <Pressable
            onPress={() => {
                let i = !icon;
                setIcon(i);
                console.log(i ? 'Checked' : 'Unchecked');
            }}
            style={styles.container}>
            <View
                style={[
                    styles.triangleStyle,
                    {
                        left: 0,
                        borderLeftWidth: 20,
                    },
                ]}
            />
            <View
                style={[
                    styles.triangleStyle,
                    {
                        right: 0,
                        borderRightWidth: 20,
                    },
                ]}
            />
            {icon ? (
                <Icon name="check" size={25} color={colors.black} />
            ) : (
                <Icon name="plus" size={25} color={colors.white} />
            )}
        </Pressable>
    );
};

export default PlusButton;
