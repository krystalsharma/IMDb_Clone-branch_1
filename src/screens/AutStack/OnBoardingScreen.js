import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const OnBoardingScreen = ({navigation}) => {
    const Done = ({...props}) => (
        <TouchableOpacity {...props} style={{marginHorizontal: 20}}>
            <Text style={{fontSize:16,fontWeight:'500'}}>Done</Text>
        </TouchableOpacity>
    );

    return (
        <Onboarding
            DoneButtonComponent={Done}
            onSkip={() => navigation.replace('LoginRoutes')}
            onDone={() => navigation.navigate('LoginRoutes')}
            pages={[
                {
                    backgroundColor: '#ff0',
                    image: (
                        <Image
                            source={require('../../assets/images/IMDb_App_Icon.png')}
                            style={{height: 200, width: 200}}
                        />
                    ),
                    title: 'Onboarding 1',
                    subtitle: 'React Native',
                },
                {
                    backgroundColor: '#fff',
                    image: (
                        <Image
                            source={require('../../assets/images/IMDb_App_Icon.png')}
                            style={{height: 200, width: 200}}
                        />
                    ),
                    title: 'Onboarding 2',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
            ]}
        />
    );
};

export default OnBoardingScreen;
