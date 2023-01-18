import {useTheme} from '@react-navigation/native';
import React from 'react';
import {
    Dimensions,
    FlatList,
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import {CustomFonts} from '../../assets/values/CustomFonts';
import {Strings} from '../../assets/values/Strings';
import TitleContainer from '../Custom/TitleContainer';

const TopNewsSection = props => {
    const {colors} = useTheme();

    const styles = StyleSheet.create({
        Container: {
            marginTop: 15,
            backgroundColor: colors.componentsBackgroundColor,
            padding: 10,
            elevation: 5,
        },
    });

    return (
        <View style={styles.Container}>
            <TitleContainer title={Strings.Top_News} />
            <News data={props.data} colors={colors} />
        </View>
    );
};

export default TopNewsSection;

const {width} = Dimensions.get('window');
let w = 0;

if (width > 500) w = width / 2 - 20;
else w = width;

const News = ({data, colors}) => {
    return (
        <View
            style={{
                flex: 1,
                marginVertical: 20,
            }}>
            <FlatList
                data={data}
                horizontal
                scrollEnabled={false}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => `key-${index}`}
                renderItem={({item, index}) => (
                    <View
                        style={{
                            flex: 1,
                            width: w,
                            height: 130,
                            marginRight: 20,
                            flexDirection: 'row',
                        }}>
                        <View style={{flex: 1}}>
                            <Text
                                style={{
                                    fontFamily: CustomFonts.Regular,
                                    fontWeight: '600',
                                    color: colors.textColor,
                                    flex: 0.49,
                                    lineHeight: 17,
                                    fontSize: 17,
                                    paddingRight: 10,
                                }}>
                                {item.title}
                            </Text>
                            <Text
                                style={{
                                    flex: 1,
                                    marginVertical: 6,
                                    fontSize: 14,
                                    paddingRight: 10,
                                    fontFamily: CustomFonts.Regular,
                                    color: colors.SocialButtonColor,
                                }}>
                                {item.description}
                            </Text>
                            <View
                                style={{
                                    flexDirection: 'row',
                                }}>
                                <Text
                                    style={{
                                        fontSize: 12,
                                        color: colors.SocialButtonColor,
                                    }}>
                                    {item.time} |{' '}
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 12,
                                        color: colors.SocialButtonColor,
                                    }}>
                                    {item.by.slice(0, 20)}..
                                </Text>
                            </View>
                        </View>

                        <View style={{flex: 0.4}}>
                            <Image
                                source={{uri: item.image}}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                }}
                            />
                        </View>
                    </View>
                )}
            />
        </View>
    );
};
