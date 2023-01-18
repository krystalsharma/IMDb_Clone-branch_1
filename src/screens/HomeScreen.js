import {useTheme} from '@react-navigation/native';
import React, {useState} from 'react';
import {
    RefreshControl,
    SafeAreaView,
    ScrollView,
    StyleSheet,
} from 'react-native';
import {
    bornToDay,
    comedyData,
    fanFavorites,
    movieData,
    MovieTypeData,
    slideData,
    TopBox,
    topNews,
    TVData,
    TVTypeData,
    TypeData,
} from '../../StaticData';
import {Strings} from '../assets/values/Strings';
import BornToday from '../components/home/BornToday';
import MoviesSlider from '../components/home/MoviesSlider';
import Section from '../components/home/Section';
import Social from '../components/home/Social';
import TopBoxOffice from '../components/home/TopBoxOffice';
import TopNewsSection from '../components/home/TopNewsSection';
import WhatToWatch from '../components/home/WhatToWatch';

const HomeScreen = ({navigation}) => {
    const {colors} = useTheme();
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => setRefreshing(false), 3000);
    };

    const styles = StyleSheet.create({
        MainContainer: {
            flex: 1,
            backgroundColor: colors.mainBackgroundColor,
        },
        Container: {
            width: '100%',
            paddingTop: 8,
            paddingBottom: 30,
        },
    });

    return (
        <SafeAreaView style={styles.MainContainer}>
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        tintColor={colors.primaryColor}
                        colors={[colors.primaryColor, colors.headingTextColor]}
                    />
                }
                contentContainerStyle={styles.Container}>
                {/* Movie SLider */}
                <MoviesSlider data={slideData} />

                {/* Popular Indian Movie Section */}
                <Section
                    title={Strings.Popular_Movies}
                    TypeData={MovieTypeData}
                    data={movieData}
                />

                {/* Popular Indian TV Shows Section */}
                <Section
                    title={Strings.Popular_TV}
                    TypeData={TVTypeData}
                    data={TVData}
                />

                {/* Featured today Section */}

                {/* What to watch Section */}
                <WhatToWatch
                    outTitle={Strings.What_to_Watch}
                    title={Strings.From_your_Watchlist}
                />

                {/* Popular Indian Comedy picks Section */}
                <Section
                    title={Strings.Popular_Indian_Comedy_Picks}
                    TypeData={TypeData}
                    data={comedyData}
                />

                {/* Fan Favorites  Section */}
                <Section
                    title={Strings.Fan_Favorites}
                    TypeData={TypeData}
                    data={fanFavorites}
                />

                {/* Top box office */}
                <TopBoxOffice title={Strings.Top_Box_Office} data={TopBox} />

                {/* Born Today */}
                <BornToday data={bornToDay} />

                {/* Top News Section */}
                <TopNewsSection data={topNews} />

                {/* Social Button Section */}
                <Social />
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;
