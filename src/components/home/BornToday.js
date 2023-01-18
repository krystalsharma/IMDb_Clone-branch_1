import {useTheme} from '@react-navigation/native';
import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {CustomFonts} from '../../assets/values/CustomFonts';
import {Strings} from '../../assets/values/Strings';
import TitleContainer from '../Custom/TitleContainer';

const BornToday = props => {
    const {colors} = useTheme();

    return (
        <View
            style={{
                marginTop: 15,
                backgroundColor: colors.componentsBackgroundColor,
                padding: 10,
                elevation: 5,
            }}>
            <TitleContainer title={Strings.Born_Today} />
            <FlatList
                data={props.data}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index}) => {
                    let date = new Date();
                    let monthInShort = date.toLocaleString('default', {
                        month: 'short',
                    });
                    let monthInLong = date.toLocaleString('default', {
                        month: 'long',
                    });
                    if (
                        date.getDate() == item.age.split(' ')[0] &&
                        (monthInShort == item.age.split(' ')[1] ||
                            monthInLong == item.age.split(' ')[1])
                    ) {
                        return (
                            <View
                                style={{
                                    width: 130,
                                    height: 250,
                                    marginVertical: 25,
                                    marginHorizontal: 5,
                                    borderRadius: 10,
                                    elevation: 5,
                                    overflow: 'hidden',
                                    backgroundColor:
                                        colors.componentsBackgroundColor,
                                }}>
                                <View style={{flex: 1}}>
                                    <Image
                                        source={{uri: item.image}}
                                        style={{width: '100%', height: '100%'}}
                                    />
                                </View>
                                <View
                                    style={{
                                        flex: 0.4,
                                        paddingVertical: 10,
                                        paddingHorizontal: 8,
                                    }}>
                                    <Text
                                        style={{
                                            color: colors.textColor,
                                            flex: 1,
                                            fontFamily: CustomFonts.Regular9,
                                            fontSize: 15,
                                        }}>
                                        {item.name}
                                    </Text>
                                    <Text
                                        style={{
                                            color: colors.inActiveIconColor,
                                            flex: 0.45,
                                        }}>
                                        {date.getFullYear() -
                                            item.age.split(' ')[2]}
                                    </Text>
                                </View>
                            </View>
                        );
                    }
                }}
            />
        </View>
    );
};

export default BornToday;
