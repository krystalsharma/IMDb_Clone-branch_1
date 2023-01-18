import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {CustomFonts} from '../../assets/values/CustomFonts';
import {Strings} from '../../assets/values/Strings';
import PlusButton from '../Custom/PlusButton';
import TitleContainer from '../Custom/TitleContainer';

const WhatToWatch = props => {
    const {colors} = useTheme();

    return (
        <>
            <Text
                style={{
                    marginTop: 20,
                    fontSize: 25,
                    paddingHorizontal: 10,
                    fontFamily: CustomFonts.Bold,
                    color: colors.textColor,
                }}>
                {props.outTitle}
            </Text>
            <View
                style={{
                    marginTop: 15,
                    backgroundColor: colors.componentsBackgroundColor,
                    padding: 10,
                    elevation: 5,
                }}>
                <TitleContainer title={props.title} />
                <View
                    style={{
                        height: 220,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <PlusButton />
                    
                    <Text
                        style={{
                            color: colors.themeColor,
                            fontFamily: CustomFonts.Bold,
                            fontSize: 18,
                            marginTop:30,
                        }}>
                        {Strings.Your_Watchlist_Empty}
                    </Text>
                    
                    <Text
                        style={{
                            color: colors.themeColor,
                            fontFamily: CustomFonts.Regular,
                            marginVertical:10,
                        }}>
                        {Strings.Your_Watchlist_Empty_Text}
                    </Text>

                    <Pressable
                        style={{
                            borderWidth: .5,
                            borderColor: colors.SocialButtonColor,
                            padding: 5,
                        }}>
                        <Text
                            style={{
                                color: colors.headingTextColor,
                                fontFamily: CustomFonts.Bold,
                            }}>
                            {Strings.Browse_popular_movies}
                        </Text>
                    </Pressable>
                </View>
            </View>
        </>
    );
};

export default WhatToWatch;
