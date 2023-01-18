import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Pressable, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {CustomFonts} from '../../assets/values/CustomFonts';
import {Strings} from '../../assets/values/Strings';
import PlusButton from '../Custom/PlusButton';
import TitleContainer from '../Custom/TitleContainer';

const TopBoxOffice = props => {
    const {colors} = useTheme();

    return (
        <View
            style={{
                marginTop: 15,
                backgroundColor: colors.componentsBackgroundColor,
                padding: 10,
                elevation: 5,
            }}>
            <TitleContainer title={props.title} />
            <Text
                style={{
                    marginVertical: 10,
                }}>
                {Strings.Weekend}
            </Text>
            <View style={{}}>
                {props.data.map((item, index) => (
                    <Pressable
                        key={index}
                        style={({pressed}) => [
                            {
                                flex: 1,
                                backgroundColor: pressed
                                    ? 'rgba(0, 0, 0,0.2)'
                                    : 'transparent',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                marginBottom: 10,
                                paddingTop: 5,
                                paddingVertical: 15,
                            },
                        ]}>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                            <Text
                                style={{
                                    paddingTop: 5,
                                    marginHorizontal: 10,
                                    marginRight: 15,
                                    fontSize: 20,
                                    color: colors.textColor,
                                    fontFamily: CustomFonts.Regular,
                                }}>
                                {index + 1}
                            </Text>
                            <PlusButton />
                            <View style={{marginHorizontal: 20}}>
                                <Text
                                    style={{
                                        fontFamily: CustomFonts.Bold,
                                        fontSize: 16,
                                        color: colors.textColor,
                                    }}>
                                    {item.title}
                                </Text>
                                <Text
                                    style={{
                                        color: colors.textColor,
                                    }}>
                                    ${item.price}
                                </Text>
                            </View>
                        </View>

                        <View
                            style={{
                                borderWidth: 3,
                                borderColor: colors.headingTextColor,
                                height: 35,
                                width: 35,
                                borderRadius: 20,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginRight: 10,
                            }}>
                            <Icon
                                name="ticket"
                                color={colors.headingTextColor}
                                size={20}
                            />
                        </View>
                    </Pressable>
                ))}
            </View>
        </View>
    );
};

export default TopBoxOffice;
