import React, {useEffect, useState} from 'react';
import {StatusBar, Text, View} from 'react-native';
import {CustomColors} from './src/assets/values/CustomColors';

const api_key = '8894618af4b86f3c23dd27487dd2be5a';
const url = `https://api.themoviedb.org/3/trending/all/week?api_key=${api_key}`;

const storage = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);

    const TMDb = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setTrendingMovies(data.results);
        } catch (error) {
            console.log('Errors: => ', error.message);
        }
    };

    useEffect(() => {
        TMDb();
    }, []);

    return (
        <View style={{flex: 1, backgroundColor: CustomColors.secondaryColor}}>
            <Text
                onPress={() => {
                    setActive(true);
                }}
                style={{fontSize: 30, fontWeight: 'bold', textAlign: 'center'}}>
                Active
            </Text>
            <StatusBar
                backgroundColor={CustomColors.primaryColor}
                barStyle="dark-content"
            />
        </View>
    );
};

export default storage;
