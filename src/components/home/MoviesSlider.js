import {useTheme} from '@react-navigation/native';
import React from 'react';
import {
    Dimensions,
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Swiper from 'react-native-swiper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {CustomColors} from '../../assets/values/CustomColors';
import {CustomFonts} from '../../assets/values/CustomFonts';
import {Strings} from '../../assets/values/Strings';

const MoviesSlider = props => {
    const {colors} = useTheme();

    const {height, width} = Dimensions.get('window');
    const styles = StyleSheet.create({
        SwiperContainer: {
            height: height * 0.366,
            width: width,
        },
        TouchableContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.componentsBackgroundColor,
        },
        ImageBackgroundStyle: {
            width: width,
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
        },
        TextContainer: {
            padding: 20,
            backgroundColor: colors.componentsBackgroundColor,
            elevation: 3,
        },
        TextStyle: {
            fontSize: 14,
            fontWeight: '900',
            color: colors.headingTextColor,
            fontFamily: CustomFonts.Regular,
        },
        TextStyle2: {
            fontSize: 13,
            fontWeight: '400',
            color: colors.headingTextColor,
        },
    });

    return (
        <View style={styles.SwiperContainer}>
            <Swiper autoplay={true} showsPagination={false} autoplayTimeout={5}>
                {props.data.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        activeOpacity={0.5}
                        style={styles.TouchableContainer}
                        onPress={() => console.log(`Clicked ${index} `)}>
                        <ImageBackground
                            source={{uri: item}}
                            style={styles.ImageBackgroundStyle}>
                            <AntDesign
                                name="playcircleo"
                                size={height * 0.1}
                                color={CustomColors.white}
                            />
                        </ImageBackground>
                    </TouchableOpacity>
                ))}
            </Swiper>
            <View style={styles.TextContainer}>
                <Text style={styles.TextStyle}>
                    {Strings.IMDb_Spotlight}
                    <Text style={styles.TextStyle2}>
                        {Strings.IMDb_Spotlight_Text}
                    </Text>
                </Text>
            </View>
        </View>
    );
};

export default MoviesSlider;
